import React from 'react';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import TourList from '@/components/tour/tour-list';
import { getAllTours } from '@/lib';

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['tours'],
    queryFn: getAllTours,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="main">
        <TourList />
      </main>
    </HydrationBoundary>
  );
}
