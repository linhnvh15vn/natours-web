import React from 'react';

import dayjs from 'dayjs';
import Image from 'next/image';

import { type Tour } from '@/types';

interface Props {
  tour: Tour;
}

export default function TourCard({ tour }: Props) {
  const infos = [
    {
      icon: '/icons.svg#icon-map-pin',
      text: tour.startLocation.description,
    },
    {
      icon: '/icons.svg#icon-calendar',
      text: dayjs(tour.startDates[0]).format('YYYY/MM/DD'),
    },
    {
      icon: '/icons.svg#icon-flag',
      text: `${tour.locations.length} stops`,
    },
    {
      icon: '/icons.svg#icon-user',
      text: `${tour.maxGroupSize} people`,
    },
  ];

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <Image
            className="card__picture-img"
            src={tour.imageCover}
            alt={tour.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            placeholder="blur"
            blurDataURL="/"
          />
          <div className="card__picture-overlay">&nbsp;</div>
        </div>
        <h3 className="heading-tertirary">
          <span>{tour.name}</span>
        </h3>
      </div>

      <div className="card__details">
        <h4 className="card__sub-heading">
          {tour.difficulty} {tour.duration}-day tour
        </h4>
        <p className="card__text">{tour.summary}</p>
        {infos.map((info) => (
          <div key={info.icon} className="card__data">
            <svg className="card__icon">
              <use xlinkHref={info.icon} />
            </svg>
            <span>{info.text}</span>
          </div>
        ))}
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">${tour.price}&nbsp;</span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">
            {tour.ratingsAverage}&nbsp;
          </span>
          <span className="card__footer-text">
            rating ({tour.ratingsQuantity})
          </span>
        </p>
        <a className="btn btn--green btn--small" href={`/tour/${tour._id}`}>
          Details
        </a>
      </div>
    </div>
  );
}
