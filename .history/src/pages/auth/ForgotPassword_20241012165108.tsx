import ForgotPasswordForm from '@/components/pages/auth/ForgotPasswordForm'
import React from 'react'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div>
      <div className="top_nav px-5 flex items-center justify-between font-bold pt-3">
        <Link to="/">Logo</Link>
        <h2>right</h2>
      </div>

      {/*  */}
      <ForgotPasswordForm />
    </div>
  );
}

export default ForgotPassword
