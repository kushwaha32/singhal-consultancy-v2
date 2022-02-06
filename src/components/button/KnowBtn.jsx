import { Link } from "react-router-dom";

const KnowBtn = ({ linkTo, text }) => {
  return (
    <Link to={linkTo} className="know_more">
      {text}
    </Link>
  );
};

export default KnowBtn;
