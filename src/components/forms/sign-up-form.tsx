'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
  passwordConfirm: z.string().min(8),
});

const defaultValues: z.infer<typeof schema> = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export default function SignUpForm() {
  const { register, handleSubmit } = useForm<z.infer<typeof schema>>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData: z.infer<typeof schema>) => {
    console.log(formData);
  };

  return (
    <form className="form form--signup" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__group">
        <label className="form__label" htmlFor="name">
          Your name
        </label>
        <input
          className="form__input"
          id="name"
          type="text"
          placeholder=""
          required
          {...register('name')}
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="email">
          Email address
        </label>
        <input
          className="form__input"
          id="email"
          type="email"
          placeholder="you@example.com"
          required
          {...register('email')}
        />
      </div>
      <div className="form__group ma-bt-md">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          id="password"
          type="password"
          placeholder="••••••••"
          required
          minLength={8}
          {...register('password')}
        />
      </div>
      <div className="form__group ma-bt-md">
        <label className="form__label" htmlFor="passwordConfirm">
          Confirm password
        </label>
        <input
          className="form__input"
          id="passwordConfirm"
          type="password"
          placeholder="••••••••"
          required
          minLength={8}
          {...register('passwordConfirm')}
        />
      </div>
      <div className="form__group">
        <button type="submit" className="btn btn--green">
          Sign up
        </button>
      </div>
    </form>
  );
}
