import Breadcrum from "../breadCrum/Breadcrum";
import Cookieconsent from "../cookieConsent/Cookieconsent";
import FixedImgRight from "../fixedImgRight/Fixedimgright";
import Footer from "../footer/footer";
import Header from "../header/Header";

const SuperComponent = (props) => {
  return (
    <>
      <Header />
      <section className="container_width" style={{ marginTop: "140px" }}>
        <div className="row">
          <div className="col-md-10">
            <Breadcrum url={props.url} />
            {props.children}
          </div>
          <div className="col-md-2">
            <FixedImgRight aboutImg={props.aboutImg} />
          </div>
        </div>
      </section>
      <Footer />
      <Cookieconsent />
    </>
  );
};

export default SuperComponent;
