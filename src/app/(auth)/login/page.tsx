import Input from '@/components/ui/input';
import React from 'react';

import classNames from 'classnames/bind';
import styles from './page.module.scss';

const cx = classNames.bind(styles);

export default function Page() {
  return (
    <main className="main">
      <div className={cx('login-form')}>
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <form className="form form--login">
          <Input
            type="email"
            label="Email Address"
            placeholder="you@example.com"
            required
          />

          {/* Add class ma-bt-md */}
          <Input
            type="password"
            label="Password"
            placeholder="••••••••"
            required={true}
            minLength={8}
          />
          <div className="form__group">
            <button className="btn btn--green">Login</button>
          </div>
        </form>
      </div>
    </main>
  );
}
