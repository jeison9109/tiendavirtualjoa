import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import pass from "../data/pass";

const API_KEY = pass.googleMapsAPI;

const Map = ({ data }) => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };

  //"AIzaSyB6vZ8m82pSzFhR-fmFK4is5pl3KuAwmM8"
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
