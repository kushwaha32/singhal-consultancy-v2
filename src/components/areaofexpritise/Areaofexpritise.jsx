import { Carousel } from "react-bootstrap";
import "./areaofexpertixe.css";
import KnowBtn from "../button/KnowBtn";
import { useEffect } from "react";
import { getareaofexpertise } from "../../actions/areaofexpertiseAction";
import { useDispatch, useSelector } from "react-redux";
import Parser from "html-react-parser";

const Areaofexpertise = () => {
  const dispatch = useDispatch();
  const areaofexpertiseDAta = useSelector((state) => state.areaofexpertiseData);
  const { areaofexpertiseAll } = areaofexpertiseDAta;

  useEffect(() => {
    dispatch(getareaofexpertise());

    // ealint-disable-next-line
  }, [dispatch]);
  return (
    <>
      <div id="areaOfExpertise"></div>
      <section className="container_width practice_area">
        <div className="practice_area_holder">
          <h3 className="heading_comman">Area of Expertise</h3>

          <Carousel className="caro_area">
            {areaofexpertiseAll.data?.map((el, i) => {
              return (
                <Carousel.Item style={{ height: "400px" }} key={i}>
                  <div className="row">
                    <div className="col-md-4 right_con">
                      <div className="text_con_caro">
                        <h4>{el.title}</h4>
                        <div>{Parser(el.discription)}</div>
                        <KnowBtn linkTo={el.link} text="Know More" />
                      </div>
                    </div>
                    <div className="col-md-8 left_con">
                      <div className="blur"></div>
                      <img
                        className="d-block w-100"
                        src={el.image}
                        alt="Second slide"
                      />
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Areaofexpertise;
