/** @jsx jsx */
/** @jsxFrag */

import React, { FC } from "react";
import { SxProps, jsx } from "theme-ui";

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
    sx={sx}
    autoPlay
    loop
    muted
    playsInline
  >
    {media ? (
      <source src={media.url} type={media.contentType} />
    ) : (
      <>
        <p>no video source</p>
        {console.error("No video source")}
      </>
    )}
    <p>{alt}</p>
  </video>
);

export default Video;
