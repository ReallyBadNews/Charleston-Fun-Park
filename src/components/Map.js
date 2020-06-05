import React from "react";
import PropTypes from "prop-types";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import logo from "../images/logo.png";

const MapBox = ({ height, width }) => {
  const mapProps = {
    center: [-79.779456, 32.868205],
    popup: false,
    zoom: [15],
  };

  const mapStyle = "mapbox://styles/reallybadnews/ckb07yl340i0p1jp931yu09hn";

  let Map = false;

  if (typeof window !== "undefined") {
    Map = ReactMapboxGl({
      accessToken: `pk.eyJ1IjoicmVhbGx5YmFkbmV3cyIsImEiOiJjazd0dmR6dTAwY2g3M2xvMzYzYnF0NDdrIn0.SP9hQddKs_mTkGOl7M1vkw`,
    });
  }

  return (
    <>
      {Map && (
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
      )}
    </>
  );
};

MapBox.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

MapBox.defaultProps = {
  height: "",
  width: "",
};

export default MapBox;
