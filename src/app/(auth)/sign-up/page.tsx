import React from 'react';

interface Props {
  // Add your component props here
}

export default function Page(props: Props) {
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Create your account</h2>
        <form className="form form--login">
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Your name
            </label>
            <input
              className="form__input"
              id="name"
              type="text"
              required={true}
            />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              className="form__input"
              id="email"
              type="email"
              placeholder="you@example.com"
              required={true}
            />
          </div>

          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              id="password"
              type="password"
              placeholder="••••••••"
              required={true}
              minLength={8}
            />
          </div>

          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              className="form__input"
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              required={true}
              minLength={8}
            />
          </div>
          <div className="form__group">
            <button className="btn btn--green">Sign up</button>
          </div>
        </form>
      </div>
    </main>
  );
}
