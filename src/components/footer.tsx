import React from 'react';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src="/logo-green.png" alt="Natour logo" />
      </div>
      <ul className="footer__nav">
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Download apps</a>
        </li>
        <li>
          <a href="#">Become a guide</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p className="footer__copyright">
        &copy; by Jonas Schmedtmann. Feel free to use this project for your own
        purposes, EXCEPT producing your own course or tutorials!
      </p>
    </footer>
  );
}
