'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  item: {
    href: string;
    icon: string;
    label: string;
  };
}

export default function NavigationItem({ item }: Props) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <li className={`${isActive && 'side-nav--active'}`}>
      <Link href={item.href}>
        <svg>
          <use xlinkHref={item.icon} />
        </svg>
        {item.label}
      </Link>
    </li>
  );
}
