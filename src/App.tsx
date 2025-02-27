import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center  mx-auto text-white bg-[#121212]">
        <Navbar/>
        <Signup/>
      </div>
    </>
  );
}

export default App;
