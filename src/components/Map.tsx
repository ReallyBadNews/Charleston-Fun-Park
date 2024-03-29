import { FC } from "react";
import GoogleMapReact from "google-map-react";
import { Box } from "theme-ui";
import { useSiteMetadata } from "../hooks/use-site-metadata";

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
      alt="logo"
      height="64"
      // @ts-expect-error – TODO(reallybadnews): use google maps library
      // eslint-disable-next-line react/no-unknown-property
      lat={lat}
      // eslint-disable-next-line react/no-unknown-property
      lng={lng}
      src="https://charleston-fun-park.s3.amazonaws.com/images/logo-map.png"
    />
  );
};

const GoogleMap: FC<MapProps> = ({ height, width }) => {
  const { googleMapsToken } = useSiteMetadata();

  if (typeof window === "undefined") {
    return <Box sx={{ height, width, bg: "blue.mid" }} />;
  }

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
