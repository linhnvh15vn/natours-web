'use server';

import { cookies } from 'next/headers';

import axiosInstance from '@/api/axios-instance';
import {
  type User,
  type HttpResponse,
  type PaginatedData,
  type Tour,
  type AuthenticationResponse,
} from '@/types';

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response: AuthenticationResponse = await axiosInstance.post(
    '/auth/login',
    { email, password },
  );

  cookies().set('accessToken', response.data.token);

  return response;
};

export const getAllTours = async () => {
  const response: HttpResponse<PaginatedData<Tour>> =
    await axiosInstance.get('/tours');
  return response.data;
};

export const getTourById = async (_id: string) => {
  const response: HttpResponse<Tour> = await axiosInstance.get(`/tours/${_id}`);
  return response.data;
};

export const getMe = async () => {
  const response: HttpResponse<User> = await axiosInstance.get('/users/me', {
    headers: {
      Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
    },
  });

  return response.data;
};
