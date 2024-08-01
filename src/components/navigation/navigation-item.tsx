import React from 'react';

interface Props {
  link: string;
  text: string;
  icon: string;
  active?: boolean;
}

export default function NavigationItem({ link, text, icon, active }: Props) {
  return (
    <li className={`${active ? 'side-nav--active' : ''}`}>
      <a href={link}>
        <svg>
          <use xlinkHref={`img/icons.svg#icon-${icon}`} />
        </svg>
        {text}
      </a>
    </li>
  );
}
