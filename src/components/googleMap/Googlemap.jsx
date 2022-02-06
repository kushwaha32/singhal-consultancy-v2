import GoogleMapReact from "google-map-react";
import LocationMarker from "./locationMarker";

const Map = ({ mapData, center, zoom }) => {
  const marker = mapData.map((data, i) => {
    return <LocationMarker lat={data.lat} lng={data.lng} key={i} />;
  });
  const key =
    "http://465225658457-bf7pu62f3ijbcf1jvj13c8dqsvdlp1l8.apps.googleusercontent.com/";
  return (
    <div
      className="container_width"
      style={{ height: "300px", marginBottom: "50px", marginTop: "50px" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={key}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {marker}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 28.5005,
    lng: 77.382,
  },
  zoom: 6,
};

export default Map;
