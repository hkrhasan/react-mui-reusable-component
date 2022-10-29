import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 28.78133,
  lng: 76.154747,
};

const defaultZoom = 10;

export default function GoogleMapComponent(props) {
  const { apiKey, center, zoom, markerPoints, CustomMarker } = props;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center || defaultCenter}
      zoom={zoom || defaultZoom}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        {markerPoints?.map((point, index) => {
          if (CustomMarker) {
            return <CustomMarker position={point} key={index} />;
          }
          return <Marker position={point} key={index} />;
        })}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}
