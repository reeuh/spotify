import { BiHide } from "react-icons/bi";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="/login" className="w-full max-w-[1440px] !mx-auto flex justify-center items-center h-full">
      <div
        className="w-[30rem] flex flex-col justify-center items-center gap-5 bg-black rounded-2xl px-10 py-12"
      >
        <p className="text-2xl font-bold">Login to Spotify</p>

        {/* Continue with account */}
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <button className="flex justify-between items-center gap-2 w-full border py-2 rounded-full px-4">
            <FaGoogle />
            <a href="">Continue with Google</a>
            <div></div>
          </button>
          <button className="flex justify-between items-center gap-2 w-full border py-2 rounded-full px-4">
            <FaFacebook />
            <a href="">Continue with Facebook</a>
            <div></div>
          </button>
          <button className="flex justify-between items-center gap-2 w-full border py-2 rounded-full px-4">
            <FaApple />
            <a href="">Continue with Apple</a>
            <div></div>
          </button>
        </div>

        {/* Border */}
        <div className="border-b w-full border-gray-500 my-4"></div>

        {/* Username and password */}
        <div className="w-full flex gap-2 flex-col">
          <input
            placeholder="Username or Email"
            className="border py-2 rounded-full w-full pl-5 outline-none"
          />
          <div className="relative w-full">
            <input
              type="password"
              placeholder="Password"
              className="border py-2 rounded-full w-full pl-5 pr-10 outline-none"
            />
            <BiHide className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" />
          </div>
        </div>

        {/* Remember me */}

        <div className="w-full flex justify-start items-center gap-2">
          <input type="checkbox" className="cursor-pointer"/>
          <p>Remember me</p>
        </div>

        {/* Login button */}
        <button className="px-10 py-2 rounded-full border border-[#1DB954]  bg-[#1DB954] font-semibold text-black hover:border hover:border-white hover:bg-none cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300 ease-out">
          Login
        </button>

        {/* Forgot password */}
        <div className="flex flex-col gap-1">
          <a href="" className="text-sm hover:underline hover:text-[#1DB954]">
            Forgot your password?
          </a>

          {/* Signup */}
          <Link to="/signup" className="text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-white hover:text-[#1DB954]">
              <u>Sign up for Spotify.</u>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
