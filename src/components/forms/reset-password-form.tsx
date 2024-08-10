'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { resetPassword } from '@/lib';

const schema = z.object({
  newPassword: z.string().min(8),
  newPasswordConfirm: z.string().min(8),
});

export type InferredResetPasswordSchema = z.infer<typeof schema>;

const defaultValues: InferredResetPasswordSchema = {
  newPassword: '',
  newPasswordConfirm: '',
};

export default function ResetPasswordForm() {
  const params = useParams();

  const { register, handleSubmit } = useForm<InferredResetPasswordSchema>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    mutationFn: resetPassword,
  });

  const onSubmit = async (formData: InferredResetPasswordSchema) => {
    mutate({ body: formData, resetToken: params.resetToken as string });
  };

  return (
    <form className="form form--login" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__group">
        <label className="form__label" htmlFor="email">
          New Password
        </label>
        <input
          id="email"
          className="form__input"
          type="password"
          placeholder="you@example.com"
          {...register('newPassword')}
        />
      </div>
      <div className="form__group ma-bt-md">
        <label className="form__label" htmlFor="password">
          New Password Confirm
        </label>
        <input
          id="password"
          className="form__input"
          type="password"
          placeholder="••••••••"
          {...register('newPasswordConfirm')}
        />
      </div>
      <div className="form__group">
        <button type="submit" className="btn btn--green">
          Change
        </button>
      </div>
    </form>
  );
}
