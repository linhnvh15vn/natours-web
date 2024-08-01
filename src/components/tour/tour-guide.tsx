import React from 'react';
import Image from 'next/image';

interface Props {
  guide: any;
}

export default function TourGuide({ guide }: Props) {
  return (
    <div className="overview-box__detail">
      <Image
        src={guide.photo}
        alt={guide.role}
        className="overview-box__img"
        width={36}
        height={36}
      />
      <span className="overview-box__label">{guide.role}</span>
      <span className="overview-box__text">{guide.name}</span>
    </div>
  );
}
