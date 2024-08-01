import React from 'react';

import Image from 'next/image';

import { type Review } from '@/types';

interface Props {
  review: Review;
}

export default function TourReview({ review }: Props) {
  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <Image
          className="reviews__avatar-img"
          src={review.user.photo}
          alt={review.user.name}
          width={35}
          height={35}
        />
        <h6 className="reviews__user">{review.user.name}</h6>
      </div>
      <p className="reviews__text">{review.review}</p>
      <div className="reviews__rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`reviews__star reviews__star--${review.rating >= star ? 'active' : 'inactive'}`}
          >
            <use xlinkHref="/icons.svg#icon-star" />
          </svg>
        ))}
      </div>
    </div>
  );
}
