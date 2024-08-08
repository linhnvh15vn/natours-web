'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

export default function ForgotPasswordForm() {
  const { register, handleSubmit } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData: z.infer<typeof schema>) => {
    console.log(formData);
  };

  return (
    <form className="form form--signup" onSubmit={handleSubmit(onSubmit)}>
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
      <div className="form__group">
        <button type="submit" className="btn btn--green">
          Send
        </button>
      </div>
    </form>
  );
}
