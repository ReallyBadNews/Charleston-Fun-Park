/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const MediaItem = ({
  description: { description },
  media,
  media: {
    fluid,
    file: { contentType, url },
  },
  isVideo,
  className,
  sx,
}) => {
  console.log("media", media);

  return (
    <>
      {isVideo ? (
        <video
          className={className}
          // poster={videoPosterSrc}
          sx={sx}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={url} type={contentType} />
          <p>{description}</p>
        </video>
      ) : (
        <Img alt={description} className={className} fluid={fluid} sx={sx} />
      )}
    </>
  );
};

MediaItem.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  isVideo: PropTypes.bool,
  media: PropTypes.shape({
    file: PropTypes.shape({
      contentType: PropTypes.string,
      url: PropTypes.string,
    }),
    fluid: PropTypes.shape({}),
    isVideo: PropTypes.bool,
    title: PropTypes.string,
  }),
  sx: PropTypes.shape({}),
  videoPoster: PropTypes.shape({
    fixed: PropTypes.shape({
      src: PropTypes.string,
    }),
  }),
};

MediaItem.defaultProps = {
  className: null,
  description: "",
  isVideo: false,
  media: {},
  sx: {},
  videoPoster: {},
};

export default MediaItem;
