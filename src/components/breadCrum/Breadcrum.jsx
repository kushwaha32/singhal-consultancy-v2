import "./breadcrum.css";

const Breadcrum = ({ url }) => {
  return (
    <div className="bread_crum">
      <span>
        <a href="index.php">home</a>&nbsp; / &nbsp; {url}
      </span>
    </div>
  );
};

export default Breadcrum;
