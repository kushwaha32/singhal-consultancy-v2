import Footer from "../footer/footer";
import Sidenav from "../sideNav/sidenav";
import Topnav from "../topNav/topnav";
import "./supercomponent.css";

const Supercomponent = (props) => {
  return (
    <>
      <Topnav />
      <Sidenav />
      <div className="content-wrapper">
        <div className="content sin_admin"> {props.children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Supercomponent;
