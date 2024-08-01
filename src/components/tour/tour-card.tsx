import React from 'react';

import Image from 'next/image';

import { type Tour } from '@/types';

interface Props {
  tour: Tour;
}

export default function TourCard({ tour }: Props) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          {/* fix overlay behind image */}
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
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="/icons.svg#icon-map-pin" />
          </svg>
          <span>{tour.startLocation.description}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="/icons.svg#icon-calendar" />
          </svg>
          <span>
            {tour.startDates[0].toLocaleString('en-us', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="/icons.svg#icon-flag" />
          </svg>
          <span>{tour.locations.length} stops</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="/icons.svg#icon-user" />
          </svg>
          <span>{tour.maxGroupSize} people</span>
        </div>
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
