import React from 'react';

import { cookies } from 'next/headers';

import axiosInstance from '@/api/axios-instance';
import TourCard from '@/components/tour/tour-card';

export default async function Page() {
  const data = await axiosInstance.get('/tours', {});
  console.log(cookies().get('token'));

  return (
    <main className="main">
      <div className="card-container">
        {data.data.items.map((tour) => (
          <TourCard key={tour._id} tour={tour} />
        ))}
      </div>
    </main>
  );
}
