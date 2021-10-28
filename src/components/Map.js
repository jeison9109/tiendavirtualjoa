import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 19.456987,
    lng: -99.7541444,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCBYkqSvZMJBI3z1BwveZucyJ_fF2SMAA8">
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
