/** @jsx jsx */
import { Container, Divider, Text, jsx } from "theme-ui";
import { Inline } from "raam";
import Arrow from "../Arrow";
import BrickBg from "../BrickBg";

const SectionTitle = () => (
  <BrickBg>
    <Divider sx={{ position: "absolute", top: "0" }} variant="divider.glow" />
    <Container>
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
        <Text sx={{ display: ["none", null, "block"] }} variant="display">
          The Party Starts Here
        </Text>
        {/* <Text sx={{ display: ["block", null, "none"] }} variant="display">
          The Party
          <br />
          Starts Here
        </Text> */}
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
  </BrickBg>
);

export default SectionTitle;
