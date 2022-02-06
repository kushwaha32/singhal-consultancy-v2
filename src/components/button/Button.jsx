import "./button.css";

const Button = ({ refLink, text, blank }) => {
  return (
    <a href={refLink} className="know_Btn" target={blank}>
      {text}
    </a>
  );
};

export default Button;
