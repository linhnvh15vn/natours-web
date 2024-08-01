import Image from 'next/image';
import React from 'react';
import classNames from 'classnames/bind';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx('header')}>
      <nav className={cx('nav nav--tours')}>
        <a className={cx('nav__el')} href="/">
          All tours
        </a>
      </nav>
      <div className={cx('header__logo')}>
        <Image
          src="/images/logo-white.png"
          width={68}
          height={35}
          alt="Natours logo"
        />
      </div>
      <nav className={cx('nav nav--user')}>
        <a className={cx('nav__el')} href="/login">
          Log in
        </a>
        <a className={cx('nav__el', 'nav__el--cta')} href="#">
          Sign up
        </a>
      </nav>
    </header>
  );
}
