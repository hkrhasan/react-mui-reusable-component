/* eslint-disable react-hooks/rules-of-hooks */
import { Grid, Box } from "@mui/material";
import React, { useState } from "react";
import GoogleMapComponent from "../Components/GoogleMap";
import Layout from "./layout";
import { Link } from "react-router-dom";
import Pin from "../images/marker-pin.png";
import { Marker } from "@react-google-maps/api";

const googleMap = () => {
  const [zoom, setZoom] = useState(11);
  const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 });

  return (
    <Layout>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapComponent
          apiKey={process.env.MAP_API_KEY}
          markerPoints={[
            {
              lat: 28.78133,
              lng: 76.154747,
            },
            {
              lat: 28.70837,
              lng: 77.19543,
            },
          ]}
        />
      </div>
    </Layout>
  );
};

export default googleMap;
