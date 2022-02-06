import CookieConsent from "react-cookie-consent";
import "./cookieconsent.css";

const Cookieconsent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I Accept"
      declineButtonText="decline"
      cookieName="usercookie"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
      enableDeclineButton
    >
      <h3 className="cookie_consent_heading">Disclaimer</h3>
      <p className="cookie_consent_condition">
        According to the rules of the Bar Council of India prohibit law firms
        from advertising and soliciting work through communication in the public
        domain. This website is meant solely for the purpose of information and
        not for the purpose of advertising. Singhal Consultancy does not intend
        to solicit clients through this website. The information provided under
        this website is solely available at your request for information
        purposes only. It should not be interpreted as soliciting or
        advertisement. By clicking on ‘ENTER’, the visitor acknowledges that the
        information provided in the website (a) does not amount to advertising
        or solicitation and (b) is meant only for his/her understanding of our
        activities and who we are.
        <br />
        <br />
        By continuing to use this site you consent to the use of cookies on your
        device as described in our privacy and security
      </p>
    </CookieConsent>
  );
};

export default Cookieconsent;
