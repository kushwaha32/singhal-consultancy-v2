import "./Banner.css";
import { HashLink as Link } from "react-router-hash-link";

const Banner = () => {
  return (
    <>
      <div id="slide_top"></div>
      <section className="banner_background">
        <div className="contact_info">
          <div className="logo_brand">
            <Link to="/#slide_top">
              <h2>singhal</h2>
              <h2>consultancy</h2>
            </Link>
          </div>
          <p className="slider_p">
            <strong>
              <i className="fas fa-envelope" aria-hidden="true"></i>
            </strong>
            <a href="mailto:info@singhalconsultancy.com" className="mail-color">
              info@singhalconsultancy.com
            </a>
            <br />
            <strong>Noida Office: </strong>1106, KM-1, JP Kosmos, Wish Town,
            Sector 134, Noida-201304, Uttar Pradesh, India{" "}
            <strong>
              <i
                className="fa fa-phone"
                aria-hidden="true"
                style={{ marginLeft: "10px" }}
              ></i>
            </strong>{" "}
            +91 8979567834
            <br />
            <strong>Gajraula Office: </strong>101, Old Saria Mill, Buddh Bazar,
            Railway Station Road, Gajruala-244235, Uttar Pradesh, India
            <strong>
              <i
                className="fa fa-phone"
                aria-hidden="true"
                style={{ marginLeft: "10px" }}
              ></i>
            </strong>{" "}
            +91 8979567834
            <br />
          </p>
        </div>
        {/* <div className="horse_bottom">
        <img src={bannerImg} alt="img2" />
      </div> */}
      </section>
    </>
  );
};

export default Banner;
