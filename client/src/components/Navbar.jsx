import { NavLink } from "react-router-dom";
import { styles } from "../styles";

// Logo / Icons
import logo from "../assets/logo.svg";
import gdcactive from "../assets/gdcactive.svg";
import galleriactive from "../assets/galleriactive.svg";

export default function Navbar() {
  return (
    <div className="w-[120px] min-h-screen bg-neutral-50 bg-opacity-60 shadow">
      <ul className="logo-wrap flex flex-col items-center space-y-16 ">
        <img className="w-[70px] h-[40px] mt-[50px] " src={logo} alt="Logo" />

        <NavLink
          to="/gdc-are"
          className={({ isActive }) =>
            isActive
              ? "outline-none ring-2 w-[85px] h-[85px] p-3 ring-customBlue focus:ring-opacity-50 rounded-[10px] bg-blue-100"
              : "w-[85px] h-[85px] rounded-[10px] p-3"
          }
        >
          <img src={gdcactive} alt="Logo" className="w-[100px] h-[40px]" />
          <p
            className={`${styles.bodyTextSemiActive} text-center tracking-tight`}
          >
            GDC Åre
          </p>
        </NavLink>
        <NavLink
          to="/galleri"
          className={({ isActive }) =>
            isActive
              ? "outline-none ring-2 w-[85px] h-[85px] p-3 ring-customBlue focus:ring-opacity-50 rounded-[10px] bg-blue-100"
              : "w-[85px] h-[85px] rounded-[10px] p-3"
          }
        >
          <img src={galleriactive} alt="icon" className="w-[100px] h-[40px]" />
          <p
            className={`${styles.bodyTextSemiActive} text-center tracking-tight`}
          >
            Galleri
          </p>
        </NavLink>
      </ul>
    </div>
  );
}
