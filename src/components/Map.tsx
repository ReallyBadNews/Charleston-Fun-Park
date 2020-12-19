import React, { FC } from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";

// @ts-ignore
import logo from "../images/logo.png";

type MapBoxProps =
  | {
      height: string;
      width: string;
    }
  | {
      height?: never;
      width?: never;
    };

const MapBox: FC<MapBoxProps> = ({ height, width }) => {
  const mapStyle = "mapbox://styles/reallybadnews/ckb07yl340i0p1jp931yu09hn";

  const Map = ReactMapboxGl({
    accessToken: process.env.MAPBOX_API_KEY || "",
  });

  return (
    <>
      <Map
        center={[-79.779456, 32.868205]}
        containerStyle={{ height, width }}
        style={mapStyle}
        zoom={[15]}
      >
        <Marker anchor="bottom" coordinates={[-79.779456, 32.868205]}>
          <img
            alt="marker"
            height="64"
            src={logo}
            style={{ cursor: "pointer" }}
            width="64"
          />
        </Marker>
      </Map>
    </>
  );
};

export default MapBox;
