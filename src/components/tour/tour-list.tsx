'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import TourCard from '@/components/tour/tour-card';
import { getAllTours } from '@/lib';

export default function TourList() {
  const { data: tourData } = useQuery({
    queryKey: ['tours'],
    queryFn: getAllTours,
  });

  return (
    <div className="card-container">
      {tourData?.items.map((tour) => <TourCard key={tour._id} tour={tour} />)}
    </div>
  );
}
