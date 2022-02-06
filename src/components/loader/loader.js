import spinner from "../../img/spinner.gif";

const Loader = () => {
  return (
    <div className="loading_con">
      <p>
        <img src={spinner} alt="spinner" />
      </p>
    </div>
  );
};

export default Loader;
