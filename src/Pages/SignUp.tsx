import { FaApple, FaFacebook, FaSpotify } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const CreateNew = () => {
  return (
    <div id="signup" className="w-full h-screen flex flex-col justify-center items-center bg-[#121212] text-white">
      <div className="w-[305555555rem] flex flex-col justify-center items-center gap-5 bg-black rounded-2xl px-10 py-16">
        <div className="flex justify-center items-center gap-2 mb-5">
          <FaSpotify size={28} />
          <p className="text-2xl text- font-bold">Sign up to start listening</p>
        </div>

        {/* Email */}
        <div className="w-full flex flex-col gap-2">
            <p className="text-left">Email address</p>
          <input
            type="email"
            placeholder="name@domain.com"
            className="border py-2 rounded w-full pl-5"
          />
        </div>

        {/* Create Account button */}
        <button className="w-full py-2 rounded-full bg-[#1DB954] font-semibold text-black hover:bg-[#1ed760]">
          Next
        </button>

        {/* Border */}
        <div className="flex items-center w-full my-4">
            <div className="border-b border-gray-500 flex-grow"></div>
            <span className="mx-2">or</span>
            <div className="border-b border-gray-500 flex-grow"></div>
        </div>

        {/* Continue with account */}
        <div className="w-full flex flex-col justify-center items-center gap-2">
                <button className="flex justify-between items-center gap-2 w-full border py-2 rounded-full px-4">
                  <FaGoogle />
                  <a href="">Sign up with Google</a>
                  <div></div>
                </button>
                <button className="flex justify-between items-center gap-2 w-full border py-2 rounded-full px-4">
                  <FaFacebook />
                  <a href="">Sign up with Facebook</a>
                  <div></div>
                </button>
                <button className="flex justify-between items-center gap-2 w-full border py-2 rounded-full px-4">
                <FaApple />
                  <a href="">Sign up with Apple</a>
                  <div></div>
                </button>
              </div>

              {/* Border2 */}
              <div className="border-b w-full border-gray-500 my-4"></div>

              {/* Back to Login */}
              <div className="w-full flex justify-center items-center gap-2">
                <p>Already have an account?</p>
                <a href="" className="text-[#1DB954] hover:underline">Log in here.</a>
              </div>
      </div>
    </div>
  );
};

export default CreateNew;
