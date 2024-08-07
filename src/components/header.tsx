'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

import { getMe } from '@/lib';

export default function Header() {
  const { data: meData } = useQuery({
    queryKey: ['me'],
    queryFn: getMe,
  });

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link className="nav__el" href="/">
          All tours
        </Link>
      </nav>
      <div className="header__logo">
        <Image
          src="/images/logo-white.png"
          alt="Natours logo"
          width={68}
          height={35}
        />
      </div>
      <nav className="nav nav--user">
        {meData ? (
          <>
            <Link className="nav__el nav__el--logout" href="#">
              Log out
            </Link>
            <Link className="nav__el" href="/me">
              <Image
                className="nav__user-img"
                src={meData.photo}
                alt={`Photo of ${meData.name}`}
                width={35}
                height={35}
              />
              <span>{meData.name.split(' ')[0]}</span>
            </Link>
          </>
        ) : (
          <>
            <Link className="nav__el" href="/login">
              Log in
            </Link>
            <Link className="nav__el nav__el--cta" href="/sign-up">
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
