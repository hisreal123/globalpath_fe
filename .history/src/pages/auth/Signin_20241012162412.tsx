import SigninForm from '../../components/pages/auth/SigninForm';
import { Link } from 'react-router-dom';

const Signin = () => {

  return (
    <div>
      <div className="top_nav px-5 flex items-center justify-between font-bold pt-3">
        <Link to="/">Logo</Link>
        <h2>right</h2>
      </div>

      <div className="grid grid-">
        <div className="right"> right</div>
        <SigninForm />
      </div>
    </div>
  );
}

export default Signin
