/** @jsxImportSource theme-ui */

import { Inline } from "raam";
import { FC } from "react";
import { Box, Container, Divider, Text } from "theme-ui";
import Arrow from "@/components/Images/Arrow";
import BrickBg from "@/components/Images/BrickBg";
import { Link } from "@/components/Link";

interface ArrowDividerProps {
  id?: string;
}

const ArrowDivider: FC<ArrowDividerProps> = ({ id }) => (
  <div id={id} sx={{ display: "grid", position: "relative" }}>
    <BrickBg
      sx={{
        bg: "blue.dark",
        gridArea: "1 / 1",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      }}
    />
    <Box
      sx={{
        gridArea: "1 / 1",
        zIndex: 0,
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        bg: "blue.xdark",
        opacity: "0.75",
      }}
    />
    <Divider sx={{ position: "absolute", top: "0" }} variant="divider.glow" />
    <Container sx={{ gridArea: "1 / 1" }}>
      <Inline
        alignItems="center"
        gap={["2", null, "3", null, "4"]}
        justifyContent="center"
        py="3"
      >
        <Arrow
          sx={{
            height: "auto",
            transform: "rotateZ(180deg)",
            width: ["72px", null, "24", null, "32"],
          }}
        />
        <Link to="#birthdays">
          <Text sx={{ maxWidth: ["12ch", null, "initial"] }} variant="display">
            The Party Starts Here
          </Text>
        </Link>
        <Arrow
          sx={{
            height: "auto",
            width: ["72px", null, "24", null, "32"],
          }}
        />
      </Inline>
    </Container>
    <Divider
      sx={{ position: "absolute", bottom: "0" }}
      variant="divider.glow"
    />
  </div>
);

ArrowDivider.defaultProps = {
  id: undefined,
};

export default ArrowDivider;
