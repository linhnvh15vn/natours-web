import TourCard from '@/components/tour/tour-card';
import React from 'react';

export default async function Page() {
  const data = await fetch('http://127.0.0.1:8080/api/v1/tours', {
    cache: 'no-cache',
  });
  const tours = await data.json();

  console.log(tours);

  return (
    <main className="main">
      <div className="card-container">
        {tours.data.items.map((tour) => (
          <TourCard key={tour._id} tour={tour} />
        ))}
      </div>
    </main>
  );
}
