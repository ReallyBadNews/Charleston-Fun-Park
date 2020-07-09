/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, screen } from "@testing-library/react";
import MediaItem from "../MediaItem";

describe("MediaItem", () => {
  let props;

  beforeEach(() => {
    props = {
      alt: `Hey now, you're an all-star`,
      dataTestId: "mediaItem",
      media: {
        file: {
          contentType: `video/mp4`,
          url: `https://urlwithavideo.com/video?v=1234`,
        },
        fluid: {
          aspectRatio: 1.7777777777777777,
          base64:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAMAAABI111xAAAChVBMVEUXYFZUpIlLcmACHQ8HJhsEIxMCLhYBJg8BDQQCCwUCCgcBDQUBIQ0DMBYOOB4MMyQCHhAkTjtaposlcWsWaFEulHFu1bByqJcOKSMCIQ1Jp5BDmoACGwgCBwQCGwlBkXZUsZsud1QwTj9gjHyC374rmHIUZUwQWzsZfV8jqIQpm4QldWIwYUwna08yfmApUz8DJA4DKxEoUj08gWFFl3JHi2dLq5M4n4RAv5UhiGIFZTsDFgsHLBsSVjwMOykLRTIWb1YEYz01n3g7t48EMyAFNCFJvpc2t5Ebc1A5lG8hX0kRTzQMfFgHUzMEQhcBDgkIIhQHKBoNLxsLLRwUWDkRSyhRnWsNfFoVakoTcFAQkW9BnH1emXcUSy4FDQgIEwwFFwoDJw8DIA4BCwUCDQYDGAsGNx8NRDEXRy0OMx0ROyMDJQ8JNRoJPB4DQh4JKBYNLhwFHA0BBAQFDggDDwYCEwcCEgoDDAoFGAwHFw0PclQcUz8KHQ4NIQ0EEAcCFQoBGAsIJBQCCwQCCgQTNBsqNSoSLhgNJRUHFwwDEQsBBQcDDQUYQCgiWzoGIxMHHA8IJRMILRIFMRMDNBMCORkGPR0HJhAHJRMJJhINMBYJHQ4VOB0CDAYBBAUCBAgEEwgVTzAJMBgKMx0FEgwFJBgFXDYCXTIDXDsDXz4CZDsFXTkEJRgGEgsLKBUKOh8MKhYBAwcCBAoDDQcILBwIJxoGIxIFEwwFJhsHgmEDcU0DYkQEZ0YEfFoGc1QEFhAFGA4MJB4KKB0IIxIEDgwBAwoBBQgCCAYCDwcCGw0DKRUDIAoLaEoLlnMDfFkCZ0MCZ0IGg2EZmngKRy8DEAcCEQgBBQYBAwkfzRUZAAAACXBIWXMAAAAnAAAAJwEqCZFPAAAAB3RJTUUH5AYVAzYLtQ5XnQAAACtJREFUCNdjZGDEAkTgLIQ0izAWhSwiVBD8y4IqSKRFeZMZNxKj0nQvPyMAcJcFU49QaL4AAAAbdEVYdENyZWF0b3IAQWRvYmUgQWZ0ZXIgRWZmZWN0c+agR5UAAAAASUVORK5CYII=",
          sizes: "(max-width: 800px) 100vw, 800px",
          src:
            "//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=800&q=50",
          srcSet:
            "//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=200&h=113&q=50 200w,↵//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=400&h=225&q=50 400w,↵//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=800&h=450&q=50 800w,↵//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=1200&h=675&q=50 1200w,↵//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=1600&h=900&q=50 1600w,↵//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=1920&h=1080&q=50 1920w",
          srcSetWebp:
            "//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=200&h=113&q=50&fm=webp 200w,↵//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=400&h=225&q=50&fm=webp 400w,↵//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=800&h=450&q=50&fm=webp 800w,↵//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=1200&h=675&q=50&fm=webp 1200w,↵//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=1600&h=900&q=50&fm=webp 1600w,↵//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=1920&h=1080&q=50&fm=webp 1920w",
          srcWebp:
            "//images.ctfassets.net/pjzqt4pnzyaw/6Sc8ylm2sJzVa7neMLDAG7/2caea1b5127309d0faf12209b427a4d2/omniArena.png?w=800&q=50&fm=webp",
        },
      },
      isVideo: false,
      className: null,
    };
  });

  it("should display an image element by default", () => {
    render(<MediaItem {...props} />);
    expect(screen.getByAltText(props.alt)).toBeInTheDocument();
  });

  it("should display a video element when isVideo = true", () => {
    props.isVideo = true;
    render(<MediaItem {...props} />);
    expect(screen.getByTestId(props.dataTestId)).toBeVisible();
  });
});
