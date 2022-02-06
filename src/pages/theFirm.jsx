import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import aboutImg from "../img/about-us.jpg";
import SuperComponent from "../components/commanSuperComponent/SuperComponent";
import UnderWho from "../components/underWho/Underwho";
import Recongnition from "../components/recongnition/Recongnition";

const Thefirm = () => {
  return (
    <>
      <SuperComponent aboutImg={aboutImg} url="about us">
        <h1 className="about_heading">Who We Are</h1>
        <div className="row">
          <div className="col-md-6">
            <UnderWho
              heading="Saikrishna & Associates is a Tier-1 full-service Firm"
              text="Intellectual Property, Telecommunication Media & Technology, Corporate Law & Competition Law verticals backing up the Firm's other practice areas."
            />
            <UnderWho
              heading="Saikrishna & Associates is a Tier-1 full-service Firm"
              text="Intellectual Property, Telecommunication Media & Technology, Corporate Law & Competition Law verticals backing up the Firm's other practice areas."
            />
            <UnderWho
              heading="Saikrishna & Associates is a Tier-1 full-service Firm"
              text="Intellectual Property, Telecommunication Media & Technology, Corporate Law & Competition Law verticals backing up the Firm's other practice areas."
            />
          </div>
          <div className="col-md-6">
            <UnderWho
              heading="Saikrishna & Associates is a Tier-1 full-service Firm"
              text="Intellectual Property, Telecommunication Media & Technology, Corporate Law & Competition Law verticals backing up the Firm's other practice areas."
            />
            <UnderWho
              heading="Saikrishna & Associates is a Tier-1 full-service Firm"
              text="Intellectual Property, Telecommunication Media & Technology, Corporate Law & Competition Law verticals backing up the Firm's other practice areas."
            />
            <UnderWho
              heading="Saikrishna & Associates is a Tier-1 full-service Firm"
              text="Intellectual Property, Telecommunication Media & Technology, Corporate Law & Competition Law verticals backing up the Firm's other practice areas."
            />
          </div>
        </div>
        <Recongnition
          style={{ marginTop: "30px", textAlign: "left" }}
          otherStyle="otherStyle"
          recongnition_holder=""
          recongnition=""
        />
      </SuperComponent>
    </>
  );
};

export default Thefirm;
