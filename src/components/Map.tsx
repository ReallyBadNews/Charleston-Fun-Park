import React, { FC } from "react";
import GoogleMapReact from "google-map-react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Box } from "theme-ui";

type MapProps = {
  height: string;
  width: string;
};

type IconProps = {
  lat: number;
  lng: number;
};

const defaultProps = {
  center: {
    lat: 32.86810312921223,
    lng: -79.7794897624561,
  },
  zoom: 15,
};

const Icon: FC<IconProps> = ({ lat, lng }) => {
  if (typeof window === "undefined") return null;
  return (
    <img
      height="64"
      src="https://charlestonfunpark.com/static/4cab3a6c3d07d254c4dd080c61226dfb/1ce16/logo.webp"
      alt="logo"
      // @ts-ignore
      lat={lat}
      lng={lng}
    />
  );
};

const GoogleMap: FC<MapProps> = ({ height, width }) => {
  if (typeof window === "undefined") {
    return <Box sx={{ height, width, bg: "blue.mid" }} />;
  }

  const { googleMapsToken } = useSiteMetadata();

  return (
    <div style={{ height, width }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapsToken }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Icon lat={defaultProps.center.lat} lng={defaultProps.center.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
