import NavigationItem from '@/components/navigation/navigation-item';
import React from 'react';

interface Props {
  // Add your component props here
}

export default function Navigation(props: Props) {
  const items = [
    {
      link: '#',
      text: 'Settings',
      icon: 'settings',
      active: true,
    },
    {
      link: '#',
      text: 'My bookings',
      icon: 'briefcase',
      active: false,
    },
    {
      link: '#',
      text: 'My reviews',
      icon: 'star',
      active: false,
    },
    {
      link: '#',
      text: 'Billing',
      icon: 'credit-card',
      active: false,
    },
  ];

  return (
    <ul className="side-nav">
      {items.map((item) => (
        <NavigationItem key={item.text} {...item} />
      ))}
    </ul>
  );
}
