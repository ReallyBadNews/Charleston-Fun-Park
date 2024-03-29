/** @jsxImportSource theme-ui */

import { FC } from "react";
import { SxProp } from "theme-ui";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Video from "./Video";
import { MediaObject } from "@/types/types";

interface CommonProps {
  alt?: string;
  dataTestId?: string;
  className?: string;
}

interface MediaItemProps {
  media: MediaObject & { gatsbyImageData: IGatsbyImageData };
  videoPoster?: string;
}

type Props = CommonProps & MediaItemProps;

export const MediaItem: FC<Props & SxProp> = ({
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
          alt={alt || "No alt text available"}
          className={className}
          image={media.gatsbyImageData}
          sx={sx}
        />
      );
  }
};

MediaItem.defaultProps = {
  alt: "No alt text available",
  dataTestId: "mediaItem",
  className: undefined,
  videoPoster: undefined,
};
