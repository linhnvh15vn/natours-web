import React from 'react';

import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.scss';

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer__logo')}>
        <Image
          src="/images/logo-green.png"
          width={150}
          height={30}
          alt="Natour logo"
        />
      </div>
      <ul className={cx('footer__nav')}>
        <li>
          <Link href="#">About us</Link>
        </li>
        <li>
          <Link href="#">Download apps</Link>
        </li>
        <li>
          <Link href="#">Become a guide</Link>
        </li>
        <li>
          <Link href="#">Careers</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
      <p className={cx('footer__copyright')}>
        &copy; {new Date().getFullYear()} Natours
      </p>
    </footer>
  );
}
