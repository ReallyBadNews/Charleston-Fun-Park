/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Video from "./Video";

const MediaItem = ({
  alt,
  dataTestId,
  media,
  isVideo,
  className,
  sx,
  videoPoster,
}) => (
  <>
    {isVideo ? (
      <Video
        alt={alt}
        className={className}
        dataTestId={dataTestId}
        media={media}
        poster={videoPoster}
        sx={sx}
      />
    ) : (
      <Img alt={alt} className={className} fluid={media.fluid} sx={sx} />
    )}
  </>
);

MediaItem.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
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
  videoPoster: PropTypes.string,
};

MediaItem.defaultProps = {
  className: null,
  alt: null,
  dataTestId: null,
  isVideo: false,
  media: {},
  sx: null,
  videoPoster: ``,
};

export default MediaItem;
