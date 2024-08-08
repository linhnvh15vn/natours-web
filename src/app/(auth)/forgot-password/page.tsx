import React from 'react';

import ForgotPasswordForm from '@/components/forms/forgot-password-form';

export default function Page() {
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Forgot your password?</h2>
        <ForgotPasswordForm />
      </div>
    </main>
  );
}
