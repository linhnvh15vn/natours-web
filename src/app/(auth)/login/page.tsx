import React from 'react';

import LoginForm from '@/components/forms/login-form';

export default function Page() {
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <LoginForm />
      </div>
    </main>
  );
}
