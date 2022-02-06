import "./industrySector.css";
import { Accordion } from "react-bootstrap";
import KnowBtn from "../button/KnowBtn";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getindustrysector } from "../../actions/industrysectorAction";
import Parser from "html-react-parser";

const IndustrySector = () => {
  const dispatch = useDispatch();
  const industrysectorDAta = useSelector((state) => state.industrysectorData);
  const { industrysectorAll } = industrysectorDAta;
  useEffect(() => {
    dispatch(getindustrysector());
  }, [dispatch]);
  return (
    <>
      <div id="industrySectors"></div>
      <section className="container_width industry_sector">
        <div className="industry_sector_holder">
          <h3 className="heading_comman">Industry Sector</h3>
          <Accordion defaultActiveKey="0">
            {industrysectorAll.data?.map((el, i) => {
              return (
                <Accordion.Item eventKey={`${i}`} key={i}>
                  <Accordion.Header className="acco_heading">
                    {el.title}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src={el.image}
                          alt=""
                          className="img_width img_indus"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="para_indu">
                          {Parser(el.discription)}
                          <br />
                          <br />
                        </div>
                        <KnowBtn linkTo={el.link} text="Know More" />
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default IndustrySector;
