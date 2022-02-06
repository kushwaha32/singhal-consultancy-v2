import "./recongnition.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import imgRecog from "../../img/recogaward.png";
import imgre from "../../img/recog2.jpg";
import imgre2 from "../../img/recog4.jpg";
import imgre3 from "../../img/recog5-1.jpg";
import imgre4 from "../../img/recog6.jpg";

const Recongnition = ({
  style,
  recongnition_holder,
  recongnition,
  otherStyle,
}) => {
  return (
    <section className={`container_width ${recongnition} ${otherStyle}`}>
      <div className={recongnition_holder}>
        <h3 className="heading_comman" style={style}>
          Recognition
        </h3>
        <div className="row">
          <div className="col-md-4 reco_con">
            <img src={imgRecog} className="recog_brand" alt="" />
          </div>
          <div
            className="col-md-8"
            style={{ background: "#E6E6E6", padding: "30px 40px" }}
          >
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              items={4}
              nav={false}
              dots={false}
            >
              <div class="item">
                <img src={imgre} className="img_width" alt="" />
              </div>
              <div class="item">
                <img src={imgre2} className="img_width" alt="" />
              </div>
              <div class="item">
                <img src={imgre3} className="img_width" alt="" />
              </div>
              <div class="item">
                <img src={imgre4} className="img_width" alt="" />
              </div>
              <div class="item">
                <img src={imgre} className="img_width" alt="" />
              </div>
              <div class="item">
                <img src={imgre2} className="img_width" alt="" />
              </div>
              <div class="item">
                <img src={imgre3} className="img_width" alt="" />
              </div>
              <div class="item">
                <img src={imgre4} className="img_width" alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recongnition;
