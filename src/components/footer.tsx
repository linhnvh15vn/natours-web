import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Image
          src="/images/logo-green.png"
          width={150}
          height={30}
          alt="Natour logo"
        />
      </div>
      <ul className="footer__nav">
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
      <p className="footer__copyright">
        &copy; by Jonas Schmedtmann. Feel free to use this project for your own
        purposes, EXCEPT producing your own course or tutorials!
      </p>
    </footer>
  );
}
