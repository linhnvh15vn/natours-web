import React from 'react';

import Image from 'next/image';

import { getMe } from '@/lib';

export default async function Page() {
  const me = await getMe();

  return (
    <div className="user-view__content">
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
        <form className="form form-user-data">
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="form__input"
              type="text"
              value={me.name}
              required
              name="name"
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              className="form__input"
              type="email"
              value={me.email}
              required
              name="email"
            />
          </div>
          <div className="form__group form__photo-upload">
            <Image
              className="form__user-photo"
              src={me.photo}
              alt="User photo"
              width={75}
              height={75}
            />
            <input
              className="form__upload"
              type="file"
              accept="image/*"
              id="photo"
              name="photo"
            />
            <label htmlFor="photo">Choose new photo</label>
          </div>
          <div className="form__group right">
            <button className="btn btn--small btn--green">Save settings</button>
          </div>
        </form>
      </div>
      <div className="line">&nbsp;</div>
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Password change</h2>
        <form className="form form-user-password">
          <div className="form__group">
            <label className="form__label" htmlFor="password-current">
              Current password
            </label>
            <input
              id="password-current"
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength={8}
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="password">
              New password
            </label>
            <input
              id="password"
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength={8}
            />
          </div>
          <div className="form__group ma-bt-lg">
            <label className="form__label" htmlFor="password-confirm">
              Confirm password
            </label>
            <input
              id="password-confirm"
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength={8}
            />
          </div>
          <div className="form__group right">
            <button className="btn btn--small btn--green btn--save-password">
              Save password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
