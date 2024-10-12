import React from 'react'
import SigninComponent from '../../components/pages/auth/SigninComponent'

const Signin = () => {

  return (
    <div>
      <div className="top_nav px-5 flex items-center justify-between font-bold pt-3">
        <Link to="/">Logo</Link>
        <h2>right</h2>
      </div>
      
      <SigninComponent />
    </div>
  );
}

export default Signin
