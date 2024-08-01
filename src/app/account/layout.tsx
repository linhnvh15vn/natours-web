import React from 'react';

import Navigation from '@/components/navigation';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="main">
      <div className="user-view">
        <nav className="user-view__menu">
          <Navigation />
        </nav>
        {children}
      </div>
    </div>
  );
}
