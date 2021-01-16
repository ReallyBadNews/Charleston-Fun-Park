import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { SxProps } from "theme-ui";

interface VideoProps {
  alt?: string;
  className?: string;
  dataTestId?: string;
  media?: {
    contentType: string;
    url: string;
  };
  poster?: string;
}

const Video: FC<VideoProps & SxProps> = ({
  alt,
  className,
  dataTestId,
  media,
  poster,
  sx,
}) => (
  <video
    className={className}
    data-testid={dataTestId}
    poster={poster}
    // @ts-ignore
    sx={sx}
    autoPlay
    loop
    muted
    playsInline
  >
    {media ? (
      <source src={media.url} type={media.contentType} />
    ) : (
      <Box>No Video Source</Box>
    )}
    <p>{alt}</p>
  </video>
);

export default Video;
