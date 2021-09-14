import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Location = (props) => {
  const { latitude, longitude, userLocation } = props;
  const position = [latitude, longitude];

  return (
    <MapContainer id="mapid" center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <span>
            {`${userLocation.city}, ${userLocation.state} (${userLocation.country})`}
            <br />
            {`${userLocation.postcode}, street: ${userLocation.street.number} ${userLocation.street.name}`}
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Location;
