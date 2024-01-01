import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import facebookIcon from '../assets/images/facebook-f-white.png';
import googleIcon from '../assets/images/google-white.png';

export const Login = () => {
  return (
    <main>
      <Helmet>
        <title>Login - Nuolar</title>
      </Helmet>
      
      <section className="mt-10">
        <div className="container">
          <form className="bg-gray-50 border-2 border-gray-300 rounded-lg w-full max-w-[500px] mx-auto p-4">
            <h2 className="text-center text-2xl font-semibold uppercase mb-4">Login</h2>

            <label htmlFor="email" className="block mb-2">Email Address</label>
            <input className="input w-full bg-white border border-gray-300 mb-4" type="email" name="email" id="email" placeholder="Write your email" required />

            <label htmlFor="password" className="block mb-2">Password</label>
            <input className="input w-full bg-white border border-gray-300 mb-2" type="password" name="password" id="password" placeholder="Write your password" required />
            <Link className="text-primary font-medium text-right block mb-4">Forget Password?</Link>

            <button type="submit" className="btn btn-primary btn-block mb-2">Login</button>

            <div className="divider">OR LOGIN WITH</div>

            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center gap-2 bg-[#DB4437] text-white rounded-lg px-4 py-2 font-medium cursor-pointer select-none">
                <img src={googleIcon} alt="Google Icon" className="w-6" />
                <span>Google</span>
              </div>
              <div className="flex justify-center items-center gap-2 bg-[#316FF6] text-white rounded-lg px-4 py-2 font-medium cursor-pointer select-none">
                <img src={facebookIcon} alt="Facebook Icon" className="w-6" />
                <span>Facebook</span>
              </div>
            </div>

            <p className="mt-6 font-medium">Don&apos;t have an account? <Link to='/register' className="text-primary">Register Now</Link></p>
          </form>
        </div>
      </section>
    </main>
  );
};