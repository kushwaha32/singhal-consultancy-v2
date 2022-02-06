import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getThefirm } from "../../actions/thefirmActions";
import "./thefirm.css";
import Parser from "html-react-parser";

const Thefirm = () => {
  const dispatch = useDispatch();
  const thefirmDAta = useSelector((state) => state.thefirmData);
  const { thefirmAll } = thefirmDAta;
  useEffect(() => {
    dispatch(getThefirm());
  }, [dispatch]);
  return (
    <>
      <div id="thefirmsection"></div>
      <section className="the_firm">
        <div className="firm_details">
          <h3 className="heading_comman">The Firm</h3>
          <p>
            {thefirmAll.data?.map((el, i) => {
              return Parser(el.discription);
            })}
            <br />
            <br />
          </p>
          {/* <Button refLink="/" text="Visit Our E-Profile" blank="" /> */}
        </div>
      </section>
    </>
  );
};

export default Thefirm;
