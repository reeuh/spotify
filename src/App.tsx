import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./Pages/Login";
import Login from "./Pages/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    {/* <div className="w-full h-screen flex flex-col justify-center items-center  mx-auto text-white bg-[#121212]">
      <Navbar/>
      </div> */}
    </Router>
  );
}

export default App;
