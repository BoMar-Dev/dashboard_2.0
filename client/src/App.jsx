import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate("/gdc-are");
  }, [navigate]);

  const changeBackgroundClass = () => {
    return location.pathname === "/galleri" ? "bg-photo" : "base-gradient-bg";
  };

  return (
    <div className={`md:w-full lg:w-[2500] flex ${changeBackgroundClass()}`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
