import SignupComponent from '../../components/pages/auth/SignupComponent'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div>
      <div className="top_nav px-5 flex items-center justify-between font-bold pt-3">
        <Link to="/">Logo</Link>
        <h2>right</h2>
      </div>

      {/* signupform */}
      <Signupfrom />
    </div>
  );
}

export default Signup
