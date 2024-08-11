import React from 'react';

import NavigationItem from '@/components/navigation/navigation-item';

export default function Navigation() {
  const items = [
    {
      href: '/me',
      icon: '/icons.svg#icon-settings',
      label: 'Settings',
    },
    {
      href: '/me/my-booking',
      icon: '/icons.svg#icon-briefcase',
      label: 'My bookings',
    },
    {
      href: '/me/my-review',
      icon: '/icons.svg#icon-star',
      label: 'My reviews',
    },
    {
      href: '/me/billing',
      icon: '/icons.svg#icon-credit-card',
      label: 'Billing',
    },
  ];

  return (
    <nav className="user-view__menu">
      <ul className="side-nav">
        {items.map((item) => (
          <NavigationItem key={item.href} item={item} />
        ))}
      </ul>
    </nav>
  );
}
