/** @jsxImportSource theme-ui */

import { Container, Divider, Text, Box } from "theme-ui";
import { Inline } from "raam";
import Arrow from "@/components/Images/Arrow";
import BrickBg from "@/components/Images/BrickBg";
import StyledLink from "@/components/Link.styled";
import { FC } from "react";

interface ArrowDividerProps {
  id?: string;
}

const ArrowDivider: FC<ArrowDividerProps> = ({ id }) => (
  <div sx={{ display: "grid", position: "relative" }} id={id}>
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
        <StyledLink scrollTo="birthdays">
          <Text variant="display" sx={{ maxWidth: ["12ch", null, "initial"] }}>
            The Party Starts Here
          </Text>
        </StyledLink>
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

export default ArrowDivider;
