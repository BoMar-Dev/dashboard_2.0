import { NavLink } from "react-router-dom";
import { styles } from "../styles";

// Logo / Icons
import logo from "../assets/logo.svg";
import gdcactive from "../assets/gdcactive.svg";
import galleriactive from "../assets/galleriactive.svg";
import login from "../assets/admin-icon.svg";

export default function Navbar() {
  return (
    <div className="w-[120px] min-h-screen bg-neutral-50 bg-opacity-60 shadow">
      <ul className="logo-wrap flex flex-col items-center space-y-16 ">
        <img className="w-[70px] h-[40px] mt-[50px] " src={logo} alt="Logo" />

        <NavLink to="/gdc-are" className={({ isActive }) => (isActive ? `${styles.activeButton}` : `${styles.inactiveButton}`)}>
          <img src={gdcactive} alt="Logo" className="w-[100px] h-[40px]" />
          <p className={`${styles.bodyTextSemiActive} text-center tracking-tight`}>GDC Åre</p>
        </NavLink>

        <NavLink to="/galleri" className={({ isActive }) => (isActive ? `${styles.activeButton}` : `${styles.inactiveButton}`)}>
          <img src={galleriactive} alt="icon" className="w-[100px] h-[40px]" />
          <p className={`${styles.bodyTextSemiActive} text-center tracking-tight`}>Galleri</p>
        </NavLink>

        <NavLink className="color red-400">
          <img className="w-[65px] h-[30px] mt-[535px] 2xl:mt-[650px] color-blue-100" src={login} alt="login" />
          {/* <RiAdminFill style={{ color: "red", width: "100px" }} size={40} /> */}
        </NavLink>
      </ul>
    </div>
  );
}
