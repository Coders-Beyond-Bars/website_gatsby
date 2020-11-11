import React from "react";

import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const AddressMap = (props) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: 500,
    }}
  >
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: -1.2884, lng: 36.8233 }}
    />
  </div>
);

export default GoogleApiWrapper({
  apiKey: "AIzaSyBQCtW0CzbwHdaxE1aS2X9X4ZLhGh42fV4",
})(AddressMap);
