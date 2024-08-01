import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';

import styles from './footer.module.scss';

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer__logo')}>
        <Image
          src="/images/logo-green.png"
          alt="Natour logo"
          width={150}
          height={30}
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
        &copy; by Jonas Schmedtmann. Feel free to use this project for your own
        purposes, EXCEPT producing your own course or tutorials!
      </p>
    </footer>
  );
}
