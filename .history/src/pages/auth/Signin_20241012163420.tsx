import SigninForm from '../../components/pages/auth/SigninForm';
import { Link } from 'react-router-dom';

const Signin = () => {

  return (
    <div>
      <div className="top_nav px-5 flex items-center justify-between font-bold pt-3">
        <Link to="/">Logo</Link>
        <h2>right</h2>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2  ">
        {/* <div className="right bg-gray-700 hidden md:block"> right</div> */}
      </div> */}
        <SigninForm />
    </div>
  );
}

export default Signin
