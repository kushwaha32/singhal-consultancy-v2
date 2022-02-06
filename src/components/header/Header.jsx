import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <div className="container_width header_parent">
        <div className="logo_brand">
          <Link to="/#slide_top">
            <h2>singhal</h2>
            <h2>consultancy</h2>
          </Link>
        </div>
        <div className="hamburger" onClick={() => toggleMenu()}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`nav_link ${toggle ? "show" : ""} `}>
          <li className="cross_icon" onClick={() => toggleMenu()}>
            <i className="fas fa-times" aria-hidden="true"></i>
          </li>
          <li style={{ paddingLeft: "0px" }}>
            <div className="logo_brand">
              <Link to="/#slide_top">
                <h2>singhal</h2>
                <h2>consultancy</h2>
              </Link>
            </div>
          </li>
          <li className="li_link">
            <Link smooth to="/#thefirmsection">
              The Firm
            </Link>
          </li>
          <li className="li_link">
            <Link to="/people">Our People</Link>
          </li>
          <li className="li_link">
            <Link smooth to="/#areaOfExpertise">
              Area of Expertise
            </Link>
          </li>
          <li className="li_link">
            <Link smooth to="/#industrySectors">
              Industry Sectors
            </Link>
          </li>
          <li className="li_link">
            <a href="https://ipbulletin.in" target="_blank">
              IP Bulletin
            </a>
          </li>
          <li className="li_link">
            <Link to="/#getInTouch">Get in Touch with us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
