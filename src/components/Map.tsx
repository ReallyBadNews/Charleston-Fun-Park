import React, { FC } from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import { useSiteMetadata } from "../hooks/use-site-metadata";

// @ts-ignore
import logo from "../images/logo.png";

type MapProps = {
  height: string;
  width: string;
};

type MapPropsType = {
  center: [number, number];
  popup: boolean;
  zoom: [number];
};

const MapBox: FC<MapProps> = ({ height, width }) => {
  if (typeof window === undefined) return null;

  const { mapboxToken } = useSiteMetadata();

  const mapProps: MapPropsType = {
    center: [-79.779456, 32.868205],
    popup: false,
    zoom: [15],
  };

  const mapStyle = "mapbox://styles/reallybadnews/ckb07yl340i0p1jp931yu09hn";

  const Map = ReactMapboxGl({
    accessToken: mapboxToken,
  });

  return (
    <Map
      center={mapProps.center}
      containerStyle={{ height, width }}
      // eslint-disable-next-line react/style-prop-object
      style={mapStyle}
      zoom={mapProps.zoom}
    >
      <Marker anchor="bottom" coordinates={mapProps.center}>
        <img
          alt="marker"
          height="64"
          src={logo}
          style={{ cursor: "pointer" }}
          width="64"
        />
      </Marker>
    </Map>
  );
};

export default MapBox;
