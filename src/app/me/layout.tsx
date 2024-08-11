import React from 'react';

import Navigation from '@/components/navigation';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="main">
      <div className="user-view">
        <Navigation />
        {children}
      </div>
    </main>
  );
}
