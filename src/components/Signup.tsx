import { FaFacebook, FaGoogle } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="w-[30rem] h-[33rem] flex flex-col justify-center items-center gap-5 bg-black rounded-2xl px-10 py-16">
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
          <FaGoogle />
          <a href="">Continue with Apple</a>
          <div></div>
        </button>
      </div>

      {/* Border */}
      <div className="border-b w-full border-gray-500 my-4"></div>

      {/* Username  password */}
      <div className="w-full flex gap-2 flex-col">
        <input
          placeholder="Username or Email"
          className="border py-2 rounded-full w-full pl-5"
        />
        <input
          placeholder="Password"
          className="border py-2 rounded-full w-full pl-5"
        />
      </div>

      {/* Remember me */}
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
      </div>

      {/* Login button */}
      <button className="px-10 py-2 rounded-full bg-[#1DB954] font-semibold text-black">
        Login
      </button>

      {/* Forgot password */}
      <a href="" className="text-sm">
        Forgot your password?
      </a>
    </div>
  );
};

export default Signup;
