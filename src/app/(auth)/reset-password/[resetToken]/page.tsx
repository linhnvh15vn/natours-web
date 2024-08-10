import React from 'react';

import ResetPasswordForm from '@/components/forms/reset-password-form';

export default function Page() {
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Reset your password</h2>
        <ResetPasswordForm />
      </div>
    </main>
  );
}
