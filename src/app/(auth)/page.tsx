import React from 'react';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Page() {
  return cookies().get('accessToken')?.value
    ? redirect('/')
    : redirect('/login');
}
