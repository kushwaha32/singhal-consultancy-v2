import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/location";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker">
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
