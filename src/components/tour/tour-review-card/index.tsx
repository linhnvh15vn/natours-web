import React from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';

import styles from './tour-review-card.module.scss';

interface Props {
  review: any;
}

const cx = classNames.bind(styles);

export default function TourReviewCard({ review }: Props) {
  return (
    <div className={cx('reviews__card')}>
      <div className={cx('reviews__avatar')}>
        <Image
          src={review.user.photo}
          alt="Jim Brown"
          className={cx('reviews__avatar-img')}
          width={45}
          height={45}
        />
        <h6 className={cx('reviews__user')}>{review.user.name}</h6>
      </div>
      <p className={cx('reviews__text')}>{review.review}</p>
      <div className={cx('reviews__rating')}>
        {Array.from({ length: review.rating }, (_, i) => (
          <svg key={i} className={cx('reviews__star', 'reviews__star--active')}>
            <use xlinkHref="/icons.svg#icon-star" />
          </svg>
        ))}
      </div>
    </div>
  );
}
