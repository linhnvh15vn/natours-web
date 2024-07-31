import React from 'react';

export default function Header(props: Props) {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <a className="nav__el" href="/">
          All tours
        </a>
      </nav>
      <div className="header__logo">
        <img src="/logo-white.png" alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        <a className="nav__el" href="/login">
          Log in
        </a>
        <a className="nav__el nav__el--cta" href="#">
          Sign up
        </a>
      </nav>
    </header>
  );
}
