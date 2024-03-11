/** @jsxImportSource theme-ui */

import { FC } from "react";
import { Box, Container, Divider, Heading } from "theme-ui";
import { Link } from "gatsby";
import WoodBg from "@/components/Images/WoodBg";

interface MoreAttractionsProps {
  as?: React.ElementType | React.FunctionComponent<unknown>;
  title?: string;
  to?: string;
  overlayColor?: string;
}

const MoreAttractionsDivider: FC<MoreAttractionsProps> = ({
  as,
  title,
  to,
  overlayColor = "blue.xdark",
}) => (
  <div sx={{ display: "grid", position: "relative", overflow: "hidden" }}>
    <WoodBg
      overlayColor={overlayColor}
      sx={{
        gridArea: "1 / 1",
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
      }}
    />
    <Divider sx={{ position: "absolute", top: "0" }} variant="divider.glow" />
    <Container sx={{ zIndex: "1", gridArea: "1 / 1" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: "3",
        }}
      >
        <Box sx={{ display: ["none", null, "block"] }}>
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
        </Box>
        <Box sx={{ display: ["block", null, "none"] }}>
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
        </Box>
        <Heading as={as} mx="3" sx={{ px: "4" }} variant="display">
          {to ? (
            // @ts-expect-error – TODO: update theme-ui
            <Link sx={{ color: "inherit", textDecoration: "none" }} to={to}>
              {title}
            </Link>
          ) : (
            [title]
          )}
        </Heading>
        <Box sx={{ display: ["none", null, "block"] }}>
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
        </Box>
        <Box sx={{ display: ["block", null, "none"] }}>
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
        </Box>
      </Box>
    </Container>
  </div>
);

MoreAttractionsDivider.defaultProps = {
  as: "div",
  title: undefined,
  to: undefined,
  overlayColor: "blue.xdark",
};

export default MoreAttractionsDivider;
