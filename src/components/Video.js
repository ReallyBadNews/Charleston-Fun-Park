import React from "react";
import PropTypes from "prop-types";

const Video = ({ alt, className, dataTestId, media, poster, sx }) => (
  <video
    className={className}
    data-testid={dataTestId}
    poster={poster}
    sx={sx}
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={media.file.url} type={media.file.contentType} />
    <p>{alt}</p>
  </video>
);

Video.propTypes = {
  media: PropTypes.shape({
    file: PropTypes.shape({
      contentType: PropTypes.string,
      url: PropTypes.string,
    }),
  }).isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  poster: PropTypes.string,
  sx: PropTypes.shape({}),
};

Video.defaultProps = {
  alt: ``,
  className: null,
  dataTestId: null,
  poster: ``,
  sx: {},
};

export default Video;
