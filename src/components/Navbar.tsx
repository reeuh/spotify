import { FaSpotify } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 right-0 w-full flex justify-start px-5 bg-black py-5">
      <div className="flex justify-center items-center gap-2">
        <FaSpotify size={28} />
        <p className="text-2xl font-semibold">Spotify</p>
      </div>
    </div>
  );
};

export default Navbar;
