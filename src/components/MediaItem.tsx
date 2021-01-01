/** @jsx jsx */
/** @jsxFrag */

import React, { FC } from "react";
import { jsx, SxProps } from "theme-ui";
import Img from "gatsby-image";
import Video from "./Video";
import { MediaObject } from "../types";

interface CommonProps {
  alt: string;
  dataTestId?: string;
  className?: string;
}

interface MediaItemProps {
  media: MediaObject;
  videoPoster?: string;
}

type Props = CommonProps & MediaItemProps;

export const MediaItem: FC<Props & SxProps> = ({
  alt,
  dataTestId,
  media,
  className,
  sx,
  videoPoster,
}) => {
  switch (media.file.contentType) {
    case "video/mp4":
      return (
        <Video
          alt={alt}
          className={className}
          dataTestId={dataTestId}
          media={media.file}
          poster={videoPoster}
          sx={sx}
        />
      );
    default:
      return (
        <Img alt={alt} className={className} fluid={media.fluid} sx={sx} />
      );
  }
};
