import { Link } from "react-router-dom";
import "./peoplenav.css";

const Peoplenav = ({ people_nav_active, text, to }) => {
  return (
    <div className="people_nav">
      <Link to={to} className={people_nav_active}>
        {text}
      </Link>
    </div>
  );
};

export default Peoplenav;
