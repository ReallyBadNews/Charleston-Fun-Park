import React, { FC } from "react";
import GoogleMapReact from "google-map-react";

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

const Icon: FC<IconProps> = (props) => (
  <img
    height="64"
    src="https://charlestonfunpark.com/static/4cab3a6c3d07d254c4dd080c61226dfb/1ce16/logo.webp"
    alt="logo"
    {...props}
  />
);

const GoogleMap: FC<MapProps> = ({ height, width }) => (
  <div style={{ height, width }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyAGc3OSw-vxktv7i19AaTeQ0z3DRj8cdls" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <Icon lat={defaultProps.center.lat} lng={defaultProps.center.lng} />
    </GoogleMapReact>
  </div>
);

export default GoogleMap;
