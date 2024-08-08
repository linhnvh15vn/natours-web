import React from 'react';

import SignUpForm from '@/components/forms/sign-up-form';

export default function Page() {
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Create your account!</h2>
        <SignUpForm />
      </div>
    </main>
  );
}
