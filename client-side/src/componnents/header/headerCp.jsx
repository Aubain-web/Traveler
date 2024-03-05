//import { FaPlaneArrival } from "react-icons/fa";
import "./header.css";
import earthMenuImage from "../../assets/images/earth-menu.svg";
import logoImage from "../../assets/images/logo-no-background.svg";

const HeaderCp = () => {

  return (
    <div className="contenthead">
      <div className="dropdown">
        <img src={earthMenuImage} width="60"/>
        <div className="dropdown-content">
          <a href="#">Login</a>
          <a href="#">Sign In</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="logo">
        <img src={logoImage} alt="Logo" width="130" />
        <h3> Traveler </h3>
      </div>
    </div>
  );
};

export default HeaderCp;
