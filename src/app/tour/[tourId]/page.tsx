import React from 'react';

import dayjs from 'dayjs';
import Image from 'next/image';

import TourFact from '@/components/tour/tour-fact';
import TourGuide from '@/components/tour/tour-guide';
import TourReview from '@/components/tour/tour-review';
import { getTourById } from '@/lib';

interface Props {
  params: {
    tourId: string;
  };
}

export default async function Page({ params }: Props) {
  const tour = await getTourById(params.tourId);

  const facts = [
    {
      label: 'Next date',
      text: dayjs(tour.startDates[0]).format('YYYY/MM/DD'),
      icon: '/icons.svg#icon-calendar',
    },
    {
      label: 'Difficulty',
      text: tour.difficulty,
      icon: '/icons.svg#icon-trending-up',
    },
    {
      label: 'Participants',
      text: `${tour.maxGroupSize} people`,
      icon: '/icons.svg#icon-user',
    },
    {
      label: 'Rating',
      text: `${tour.ratingsAverage} / 5`,
      icon: '/icons.svg#icon-star',
    },
  ];

  return (
    <main className="">
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay">&nbsp;</div>
          <Image
            className="header__hero-img"
            src={tour.imageCover}
            alt={tour.name}
            fill
          />
        </div>
        <div className="heading-box">
          <h1 className="heading-primary">
            <span>{tour.name} tour</span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use xlinkHref="/icons.svg#icon-clock" />
              </svg>
              <span className="heading-box__text">{tour.duration} days</span>
            </div>
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use xlinkHref="/icons.svg#icon-map-pin" />
              </svg>
              <span className="heading-box__text">
                {tour.startLocation.description}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
              {facts.map((fact) => (
                <TourFact key={fact.label} fact={fact} />
              ))}
            </div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
              {tour.guides.map((guide) => (
                <TourGuide key={guide._id} guide={guide} />
              ))}
            </div>
          </div>
        </div>
        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">About {tour.name} tour</h2>
          {tour.description.split('\n').map((p) => (
            <p key={p} className="description__text">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="section-pictures">
        {tour.images?.slice(0, 3).map((image, i) => (
          <div key={image} className="picture-box">
            <Image
              className={`picture-box__img picture-box__img--${i + 1}`}
              src={image}
              alt={tour.name + i}
              width={428}
              height={326}
            />
          </div>
        ))}
      </section>

      <section className="section-reviews">
        <div className="reviews">
          {tour.reviews.map((review) => (
            <TourReview key={review._id} review={review} />
          ))}
        </div>
      </section>

      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <Image
              src="/images/logo-white.png"
              width={110}
              height={56}
              alt="Natours logo"
            />
          </div>
          {tour.images
            ?.slice(0, 2)
            .map((image, i) => (
              <Image
                key={image}
                className={`cta__img cta__img--${i + 1}`}
                src={image}
                width={150}
                height={150}
                alt="Tour picture"
              />
            ))}

          <div className="cta__content">
            <h2 className="heading-secondary">What are you waiting for?</h2>
            <p className="cta__text">
              {tour.duration} days. 1 adventure. Infinite memories. Make it
              yours today!
            </p>

            <button
              className="btn btn--green span-all-rows"
              id="book-tour"
              data-tour-id="tour.id"
            >
              Book tour now!
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
