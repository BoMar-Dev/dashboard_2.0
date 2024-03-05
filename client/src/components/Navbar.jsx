import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { styles } from "../styles";

// Logo / Icons
import logo from "../assets/logo.svg";
import gdcactive from "../assets/gdcactive.svg";
import galleriactive from "../assets/galleriactive.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const buttonRef = useRef(null);

  const toggleGDC = () => {
    navigate("/gdc-are");
  };

  const toggleGalleri = () => {
    navigate("/galleri");
  };

  useEffect(() => {
    if (location.pathname === "/gdc-are" && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [location.pathname]);

  return (
    <div className="w-[120px] min-h-screen bg-neutral-50 bg-opacity-60 shadow">
      <ul className="logo-wrap flex flex-col items-center space-y-16 ">
        <img className="w-[70px] h-[40px] mt-[50px] " src={logo} alt="Logo" />

        <div>
          <button
            ref={buttonRef}
            className={`focus:outline-none focus:ring-2 w-[85px] h-[85px] p-3 focus:ring-customBlue focus:ring-opacity-50 rounded-[10px] focus:bg-blue-100`}
            onClick={toggleGDC}
          >
            <img
              className="w-[100px] h-[40px]"
              src={gdcactive}
              alt="gdc-icon"
            />
            <p
              className={`${styles.bodyTextSemiActive} text-center tracking-tight`}
            >
              GDC Åre
            </p>
          </button>
        </div>

        <button
          className={`focus:outline-none focus:ring-2 w-[85px] h-[85px] p-3 focus:ring-customBlue focus:ring-opacity-50 rounded-[10px] focus:bg-blue-100`}
          onClick={toggleGalleri}
        >
          <img
            className="w-[100px] h-[40px]"
            src={galleriactive}
            alt="gdc-icon"
          />
          <p
            className={`${styles.bodyTextSemiActive} text-center tracking-tight`}
          >
            Galleri
          </p>
        </button>
      </ul>
    </div>
  );
}
