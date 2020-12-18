/** @jsx jsx */
/** @jsxFrag */

import React, { FC } from "react";
import { jsx, SxProps } from "theme-ui";
import Img, { FluidObject } from "gatsby-image";
import Video from "./Video";

interface CommonProps {
  alt: string;
  dataTestId?: string;
  className?: string;
}

type MediaItemProps =
  | {
      isVideo?: true;
      media: {
        fluid: never;
        file: {
          contentType: string;
          url: string;
        };
      };
      videoPoster: string;
    }
  | {
      isVideo?: false;
      media: {
        fluid: FluidObject;
        file: never;
      };
      videoPoster: never;
    };

type Props = CommonProps & MediaItemProps;

const MediaItem: FC<Props & SxProps> = ({
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

MediaItem.defaultProps = {
  isVideo: false,
};

export default MediaItem;
