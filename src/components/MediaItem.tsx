/** @jsxImportSource theme-ui */

import React, { FC } from "react";
import { SxProps } from "theme-ui";
import { GatsbyImage } from "gatsby-plugin-image";
import Video from "./Video";
import { MediaObject } from "@/types/types";

interface CommonProps {
  alt?: string;
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
  if (!media.file) return null;

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
        <GatsbyImage
          image={media.gatsbyImageData}
          alt={alt}
          className={className}
          sx={sx}
        />
      );
  }
};
