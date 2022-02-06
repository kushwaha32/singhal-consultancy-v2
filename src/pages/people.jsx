import aboutImg from "../img/stoneImg.jfif";
import SuperComponent from "../components/commanSuperComponent/SuperComponent";
import Peoplenav from "../components/peopleNav/Peoplenav";
import { Accordion, Nav, Tab } from "react-bootstrap";
import { useEffect } from "react";
import { getpartners } from "../actions/partnersAction";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../constants/baseUrl";
import Parser from "html-react-parser";
import { getassociates } from "../actions/associatesAction";
import { getinformationtechnology } from "../actions/informationtechnologyAction";

const People = () => {
  const dispatch = useDispatch();
  // partners data
  const partnersDAta = useSelector((state) => state.partnersData);
  const { partnersAll } = partnersDAta;
  // associates tata
  const associatesDAta = useSelector((state) => state.associatesData);
  const { associatesAll } = associatesDAta;
  // information technology data
  const informationtechnologyDAta = useSelector(
    (state) => state.informationtechnologyData
  );
  const { informationtechnologyAll } = informationtechnologyDAta;

  useEffect(() => {
    dispatch(getpartners());
    dispatch(getassociates());
    dispatch(getinformationtechnology());
  }, [dispatch]);
  return (
    <>
      <SuperComponent aboutImg={aboutImg} url="people">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="flex-column">
            <div className="people_nav_container">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  <Peoplenav
                    to=""
                    people_nav_active="people_nav_active"
                    text="Partners"
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  {" "}
                  <Peoplenav to="" people_nav_active="" text="Associates" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  {" "}
                  <Peoplenav
                    to=""
                    people_nav_active=""
                    text="Information Technology"
                  />
                </Nav.Link>
              </Nav.Item>
            </div>
          </Nav>
          {/* partners */}
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="partners">
                <Accordion alwaysOpen>
                  {partnersAll.data?.map((el, i) => {
                    return (
                      <Accordion.Item eventKey={`${i}`} key={i}>
                        <Accordion.Header>
                          <figure>
                            <img src={el.image} alt="" />
                            <figcaption>
                              <h3 className="text-capitalize"> {el.name}</h3>
                              <p>{el.education}</p>
                            </figcaption>
                          </figure>
                        </Accordion.Header>
                        <Accordion.Body>
                          {Parser(el.discription)}
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </div>
            </Tab.Pane>
            {/* associate partners */}
            <Tab.Pane eventKey="second">
              <div className="partners">
                <Accordion alwaysOpen>
                  {associatesAll.data?.map((el, i) => {
                    return (
                      <Accordion.Item eventKey={`${i}`} key={i}>
                        <Accordion.Header>
                          <figure>
                            <img src={el.image} alt="" />
                            <figcaption>
                              <h3 className="text-capitalize">{el.name}</h3>
                              <p>{el.education}</p>
                            </figcaption>
                          </figure>
                        </Accordion.Header>
                        <Accordion.Body>
                          {Parser(el.discription)}
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </div>
            </Tab.Pane>
            {/* information technology */}
            <Tab.Pane eventKey="third">
              {" "}
              <div className="partners">
                <Accordion alwaysOpen>
                  {informationtechnologyAll.data?.map((el, i) => {
                    return (
                      <Accordion.Item eventKey={`${i}`} key={i}>
                        <Accordion.Header>
                          <figure>
                            <img src={el.image} alt="" />
                            <figcaption>
                              <h3 className="text-capitalize">{el.name}</h3>
                              <p>{el.education}</p>
                            </figcaption>
                          </figure>
                        </Accordion.Header>
                        <Accordion.Body>
                          {Parser(el.discription)}
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </SuperComponent>
    </>
  );
};

export default People;
