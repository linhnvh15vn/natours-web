'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { login } from '@/lib';

const schema = z.object({
  email: z.string().email().min(1, 'Enter your email address'),
  password: z.string().min(8, 'Please enter your password'),
});

export default function LoginForm() {
  const { register, handleSubmit } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const onSubmit = async (formData: z.infer<typeof schema>) => {
    mutate(formData);
  };

  return (
    <form className="form form--login" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__group">
        <label className="form__label" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          className="form__input"
          type="email"
          placeholder="you@example.com"
          {...register('email')}
        />
      </div>
      <div className="form__group ma-bt-md">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className="form__input"
          type="password"
          placeholder="••••••••"
          {...register('password')}
        />
      </div>
      <div className="form__group">
        <button type="submit" className="btn btn--green">
          Login
        </button>
      </div>
    </form>
  );
}
