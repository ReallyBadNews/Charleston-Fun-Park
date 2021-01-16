/** @jsx jsx */

import { FC } from "react";
import { Container, Divider, Text, jsx } from "theme-ui";
import { Stack } from "@chakra-ui/react";
import Arrow from "@/components/Images/Arrow";
import BrickBg from "@/components/Images/BrickBg";
import StyledLink from "@/components/Link.styled";

interface ArrowDividerProps {
  id?: string;
}

// TODO: Refactor Stack to Flex & Spacer
const ArrowDivider: FC<ArrowDividerProps> = ({ id }) => (
  <BrickBg id={id}>
    <Divider sx={{ position: "absolute", top: "0" }} variant="divider.glow" />
    <Container>
      <Stack
        alignItems="center"
        direction="row"
        spacing={["2", null, "4", null, "6"]}
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
      </Stack>
    </Container>
    <Divider
      sx={{ position: "absolute", bottom: "0" }}
      variant="divider.glow"
    />
  </BrickBg>
);

export default ArrowDivider;
