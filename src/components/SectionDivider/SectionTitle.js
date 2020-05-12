/** @jsx jsx */
import { Container, Divider, Text, jsx } from "theme-ui";
import { Flex } from "raam";
import Arrow from "../Arrow";
import BrickBg from "../BrickBg";

const SectionTitle = () => (
  <BrickBg>
    <Divider sx={{ position: "absolute", top: "0" }} variant="divider.glow" />
    <Container py="3">
      <Flex alignItems="center" justifyContent="center">
        <Arrow height="auto" transform="rotateZ(180deg)" width="32" />
        <Text px="7" variant="display">
          The Party Starts Here
        </Text>
        <Arrow height="auto" width="32" />
      </Flex>
    </Container>
    <Divider
      sx={{ position: "absolute", bottom: "0" }}
      variant="divider.glow"
    />
  </BrickBg>
);

export default SectionTitle;
