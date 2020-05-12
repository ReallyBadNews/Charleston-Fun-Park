/** @jsx jsx */
import { jsx, Container, Heading, Text } from "theme-ui";
import { Stack } from "raam";
import BrickBg from "./BrickBg";

const BirthdaySection = () => (
  <BrickBg>
    <Container sx={{ height: "xl" }}>
      <Stack>
        <Heading sx={{ color: "yellow.light" }} variant="heading">
          Birthdays, Parties & Events
        </Heading>
        <Text color="white.light">
          Easy to book online 24/7, by phone or in person. Our kids’ birthday
          party packages have everything you need to make your child’s special
          day one to remember.
        </Text>
      </Stack>
    </Container>
  </BrickBg>
);

export default BirthdaySection;
