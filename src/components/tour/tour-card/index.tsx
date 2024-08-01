import Link from 'next/link';
import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import styles from './tour-card.module.scss';

interface Props {
  tour: any;
}

const cx = classNames.bind(styles);

export default function TourCard({ tour }: Props) {
  console.log(tour);

  return (
    <div className={cx('card')}>
      <div className={cx('card__header')}>
        <div className={cx('card__picture')}>
          <div className={cx('card__picture-overlay')}>&nbsp;</div>
          <Image
            src={tour.imageCover}
            className={cx('card__picture-img')}
            alt={tour.name}
            fill
          />
        </div>
        <h3 className="heading-tertirary">
          <span>{tour.name}</span>
        </h3>
      </div>
      <div className={cx('card__details')}>
        <h4 className={cx('card__sub-heading')}>
          {tour.difficulty} {tour.duration}-day tour
        </h4>
        <p className={cx('card__text')}>{tour.summary}</p>
        <div className={cx('card__data')}>
          <svg className={cx('card__icon')}>
            <use xlinkHref="/icons.svg#icon-map-pin" />
          </svg>
          <span>{tour.startLocation.description}</span>
        </div>
        <div className={cx('card__data')}>
          <svg className={cx('card__icon')}>
            <use xlinkHref="/icons.svg#icon-calendar" />
          </svg>
          <span>{tour.startDates[0].toLocaleString()}</span>
        </div>
        <div className={cx('card__data')}>
          <svg className={cx('card__icon')}>
            <use xlinkHref="/icons.svg#icon-flag"></use>
          </svg>
          <span>{tour.locations.length} stops</span>
        </div>
        <div className={cx('card__data')}>
          <svg className={cx('card__icon')}>
            <use xlinkHref="/icons.svg#icon-user" />
          </svg>
          <span>{tour.maxGroupSize} people</span>
        </div>
      </div>
      <div className={cx('card__footer')}>
        <p>
          <span className={cx('card__footer-value')}>${tour.price}&nbsp;</span>
          <span className={cx('card__footer-text')}>per person</span>
        </p>
        <p className={cx('card__ratings')}>
          <span className={cx('card__footer-value')}>
            {tour.ratingsAverage}&nbsp;
          </span>
          <span className={cx('card__footer-text')}>
            rating ({tour.ratingsQuantity})
          </span>
        </p>
        <Link href={`/tour/${tour._id}`} className="btn btn--green btn--small">
          Details
        </Link>
      </div>
    </div>
  );
}
