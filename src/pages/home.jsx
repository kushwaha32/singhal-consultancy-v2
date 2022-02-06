import Banner from "../components/frontbanner/Banner";
import Getinvolve from "../components/getinvolve/Getinvolve";
import IndustrySector from "../components/industrySector/IndustrySector";
import Areaofexpertise from "../components/areaofexpritise/Areaofexpritise";
import Thefirm from "../components/thefirm/Thefirm";
import Map from "../components/googleMap/Googlemap";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import Cookieconsent from "../components/cookieConsent/Cookieconsent";

const Home = () => {
  const data = [
    {
      id: 1,
      lat: 28.5005,
      lng: 77.382,
    },
    {
      id: 2,
      lat: 28.8382,
      lng: 78.2422,
    },
  ];
  return (
    <>
      <Header />
      <Banner />
      <Thefirm />
      <Areaofexpertise />
      <IndustrySector />
      <Getinvolve />
      <Map mapData={data} />
      <Footer />
      <Cookieconsent />
    </>
  );
};

export default Home;
