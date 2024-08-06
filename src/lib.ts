'use server';

import { cookies } from 'next/headers';

import axiosInstance from '@/api/axios-instance';

export const login = async (formData) => {
  const response: AuthenticatorResponse = await axiosInstance.post(
    '/auth/login',
    formData,
  );
  cookies().set('session', response.data.token, {
    expires: new Date(Date.now() + 60 * 60 * 1000),
    httpOnly: true,
  });

  return response;
};
