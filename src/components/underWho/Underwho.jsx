import "./Underwho.css";
import dotImg from "../../img/dotImg.png";
const UnderWho = ({ heading, text }) => {
  return (
    <figure className="under_con">
      <img src={dotImg} alt="dotImg" />
      <figcaption>
        <h4>{heading}</h4>
        <p>{text}</p>
      </figcaption>
    </figure>
  );
};

export default UnderWho;
