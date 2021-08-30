/** @jsxImportSource theme-ui */

import React, { ElementType, FC } from "react";
import { Container, Divider, Heading } from "theme-ui";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { Link } from "gatsby";
import { Inline } from "raam";
import WoodBg from "@/components/Images/WoodBg";

interface MoreAttractionsProps {
  as?: ElementType;
  title?: string;
  to?: string;
  overlayColor?: string;
}

const MoreAttractionsDivider: FC<MoreAttractionsProps> = ({
  as,
  title,
  to,
  overlayColor = "blue.xdark",
}) => {
  const breakpoints = useBreakpoint();

  return (
    <div sx={{ display: "grid", position: "relative", overflow: "hidden" }}>
      <WoodBg overlayColor={overlayColor} sx={{ position: "absolute" }} />
      <Divider sx={{ position: "absolute", top: "0" }} variant="divider.glow" />
      <Container>
        <Inline
          alignItems="center"
          gap={["1", null, "3", null, "4"]}
          justifyContent="center"
          py="3"
        >
          {breakpoints.tablet ? (
            <>
              <svg
                fill="none"
                height="33"
                sx={{ filter: "drop-shadow( 0px 0px 4px #75E7FF)" }}
                width="34"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // eslint-disable-next-line max-len
                  d="M17 1.23607L20.3147 11.4377C20.5825 12.2617 21.3504 12.8197 22.2168 12.8197H32.9434L24.2654 19.1246C23.5645 19.6339 23.2711 20.5366 23.5389 21.3607L26.8536 31.5623L18.1756 25.2574C17.4746 24.7481 16.5254 24.7481 15.8244 25.2574L7.14641 31.5623L10.4611 21.3607C10.7289 20.5366 10.4355 19.6339 9.73458 19.1246L9.14679 19.9336L9.73457 19.1246L1.05655 12.8197H11.7832C12.6496 12.8197 13.4175 12.2617 13.6853 11.4377L17 1.23607Z"
                  stroke="#75E7FF"
                  strokeWidth="2"
                />
              </svg>
              <svg
                fill="none"
                height="33"
                sx={{ filter: "drop-shadow( 0px 0px 4px #75E7FF)", ml: "2" }}
                width="34"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // eslint-disable-next-line max-len
                  d="M17 1.23607L20.3147 11.4377C20.5825 12.2617 21.3504 12.8197 22.2168 12.8197H32.9434L24.2654 19.1246C23.5645 19.6339 23.2711 20.5366 23.5389 21.3607L26.8536 31.5623L18.1756 25.2574C17.4746 24.7481 16.5254 24.7481 15.8244 25.2574L7.14641 31.5623L10.4611 21.3607C10.7289 20.5366 10.4355 19.6339 9.73458 19.1246L9.14679 19.9336L9.73457 19.1246L1.05655 12.8197H11.7832C12.6496 12.8197 13.4175 12.2617 13.6853 11.4377L17 1.23607Z"
                  stroke="#75E7FF"
                  strokeWidth="2"
                />
              </svg>
              <svg
                fill="none"
                height="33"
                sx={{
                  filter: "drop-shadow( 0px 0px 4px #75E7FF)",
                  transform: "scale(1.5)",
                  ml: "3",
                }}
                width="34"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // eslint-disable-next-line max-len
                  d="M17 1.23607L20.3147 11.4377C20.5825 12.2617 21.3504 12.8197 22.2168 12.8197H32.9434L24.2654 19.1246C23.5645 19.6339 23.2711 20.5366 23.5389 21.3607L26.8536 31.5623L18.1756 25.2574C17.4746 24.7481 16.5254 24.7481 15.8244 25.2574L7.14641 31.5623L10.4611 21.3607C10.7289 20.5366 10.4355 19.6339 9.73458 19.1246L9.14679 19.9336L9.73457 19.1246L1.05655 12.8197H11.7832C12.6496 12.8197 13.4175 12.2617 13.6853 11.4377L17 1.23607Z"
                  stroke="#75E7FF"
                  strokeWidth="2"
                />
              </svg>
            </>
          ) : (
            <svg
              fill="none"
              height="33"
              sx={{
                filter: "drop-shadow( 0px 0px 4px #75E7FF)",
                transform: "scale(1.5)",
              }}
              width="34"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                // eslint-disable-next-line max-len
                d="M17 1.23607L20.3147 11.4377C20.5825 12.2617 21.3504 12.8197 22.2168 12.8197H32.9434L24.2654 19.1246C23.5645 19.6339 23.2711 20.5366 23.5389 21.3607L26.8536 31.5623L18.1756 25.2574C17.4746 24.7481 16.5254 24.7481 15.8244 25.2574L7.14641 31.5623L10.4611 21.3607C10.7289 20.5366 10.4355 19.6339 9.73458 19.1246L9.14679 19.9336L9.73457 19.1246L1.05655 12.8197H11.7832C12.6496 12.8197 13.4175 12.2617 13.6853 11.4377L17 1.23607Z"
                stroke="#75E7FF"
                strokeWidth="2"
              />
            </svg>
          )}
          <Heading as={as} mx="3" variant="display">
            {to ? (
              <Link sx={{ color: "inherit", textDecoration: "none" }} to={to}>
                {title}
              </Link>
            ) : (
              [title]
            )}
          </Heading>
          {breakpoints.tablet ? (
            <>
              <svg
                fill="none"
                height="33"
                sx={{
                  filter: "drop-shadow( 0px 0px 4px #75E7FF)",
                  transform: "scale(1.5)",
                  mr: "3",
                }}
                width="34"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // eslint-disable-next-line max-len
                  d="M17 1.23607L20.3147 11.4377C20.5825 12.2617 21.3504 12.8197 22.2168 12.8197H32.9434L24.2654 19.1246C23.5645 19.6339 23.2711 20.5366 23.5389 21.3607L26.8536 31.5623L18.1756 25.2574C17.4746 24.7481 16.5254 24.7481 15.8244 25.2574L7.14641 31.5623L10.4611 21.3607C10.7289 20.5366 10.4355 19.6339 9.73458 19.1246L9.14679 19.9336L9.73457 19.1246L1.05655 12.8197H11.7832C12.6496 12.8197 13.4175 12.2617 13.6853 11.4377L17 1.23607Z"
                  stroke="#75E7FF"
                  strokeWidth="2"
                />
              </svg>
              <svg
                fill="none"
                height="33"
                sx={{ filter: "drop-shadow( 0px 0px 4px #75E7FF)", mr: "2" }}
                width="34"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // eslint-disable-next-line max-len
                  d="M17 1.23607L20.3147 11.4377C20.5825 12.2617 21.3504 12.8197 22.2168 12.8197H32.9434L24.2654 19.1246C23.5645 19.6339 23.2711 20.5366 23.5389 21.3607L26.8536 31.5623L18.1756 25.2574C17.4746 24.7481 16.5254 24.7481 15.8244 25.2574L7.14641 31.5623L10.4611 21.3607C10.7289 20.5366 10.4355 19.6339 9.73458 19.1246L9.14679 19.9336L9.73457 19.1246L1.05655 12.8197H11.7832C12.6496 12.8197 13.4175 12.2617 13.6853 11.4377L17 1.23607Z"
                  stroke="#75E7FF"
                  strokeWidth="2"
                />
              </svg>
              <svg
                fill="none"
                height="33"
                sx={{ filter: "drop-shadow( 0px 0px 4px #75E7FF)" }}
                width="34"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // eslint-disable-next-line max-len
                  d="M17 1.23607L20.3147 11.4377C20.5825 12.2617 21.3504 12.8197 22.2168 12.8197H32.9434L24.2654 19.1246C23.5645 19.6339 23.2711 20.5366 23.5389 21.3607L26.8536 31.5623L18.1756 25.2574C17.4746 24.7481 16.5254 24.7481 15.8244 25.2574L7.14641 31.5623L10.4611 21.3607C10.7289 20.5366 10.4355 19.6339 9.73458 19.1246L9.14679 19.9336L9.73457 19.1246L1.05655 12.8197H11.7832C12.6496 12.8197 13.4175 12.2617 13.6853 11.4377L17 1.23607Z"
                  stroke="#75E7FF"
                  strokeWidth="2"
                />
              </svg>
            </>
          ) : (
            <svg
              fill="none"
              height="33"
              sx={{
                filter: "drop-shadow( 0px 0px 4px #75E7FF)",
                transform: "scale(1.5)",
              }}
              width="34"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                // eslint-disable-next-line max-len
                d="M17 1.23607L20.3147 11.4377C20.5825 12.2617 21.3504 12.8197 22.2168 12.8197H32.9434L24.2654 19.1246C23.5645 19.6339 23.2711 20.5366 23.5389 21.3607L26.8536 31.5623L18.1756 25.2574C17.4746 24.7481 16.5254 24.7481 15.8244 25.2574L7.14641 31.5623L10.4611 21.3607C10.7289 20.5366 10.4355 19.6339 9.73458 19.1246L9.14679 19.9336L9.73457 19.1246L1.05655 12.8197H11.7832C12.6496 12.8197 13.4175 12.2617 13.6853 11.4377L17 1.23607Z"
                stroke="#75E7FF"
                strokeWidth="2"
              />
            </svg>
          )}
        </Inline>
      </Container>
    </div>
  );
};

export default MoreAttractionsDivider;
