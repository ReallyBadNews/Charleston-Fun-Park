/** @jsxImportSource theme-ui */

import { FC } from "react";
import { Box, Container, Divider } from "theme-ui";
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
        gridArea: "1 / 1",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      }}
    />
    <Divider sx={{ position: "absolute", top: "0" }} variant="divider.glow" />
    <Container sx={{ gridArea: "1 / 1" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: "3",
        }}
      >
        <Arrow
          sx={{
            height: "auto",
            transform: "rotateZ(180deg)",
            width: ["72px", null, "24", null, "32"],
          }}
        />
        <Link
          sx={{
            px: ["2", null, "4"],
            position: "relative",
            maxWidth: ["12ch", null, "initial"],
            fontFamily: "display",
            fontSize: [4, 5, 6, 8, 9],
            textAlign: "center",
            lineHeight: "none",
            color: "yellow.light",
            textShadow: "neonYellow",
          }}
          to="#birthdays"
        >
          The Party Starts Here
        </Link>
        <Arrow
          sx={{
            height: "auto",
            width: ["72px", null, "24", null, "32"],
          }}
        />
      </Box>
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
