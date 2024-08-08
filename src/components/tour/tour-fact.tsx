import React from 'react';

interface Props {
  fact: {
    label: string;
    icon: string;
    text: string;
  };
}

export default function TourFact({ fact }: Props) {
  return (
    <div key={fact.label} className="overview-box__detail">
      <svg className="overview-box__icon">
        <use xlinkHref={fact.icon} />
      </svg>
      <span className="overview-box__label">{fact.label}</span>
      <span className="overview-box__text">{fact.text}</span>
    </div>
  );
}
