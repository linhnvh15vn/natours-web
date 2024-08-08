import React from 'react';

import Image from 'next/image';

import { type User } from '@/types';

interface Props {
  guide: User;
}

export default function TourGuide({ guide }: Props) {
  return (
    <div className="overview-box__detail">
      <Image
        className="overview-box__img"
        src={guide.photo}
        alt={guide.name}
        width={35}
        height={35}
      />
      <span className="overview-box__label">{guide.role}</span>
      <span className="overview-box__text">{guide.name}</span>
    </div>
  );
}
