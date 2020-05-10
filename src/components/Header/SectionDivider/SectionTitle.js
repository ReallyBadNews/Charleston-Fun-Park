/** @jsx jsx */
import { Box, Container, Heading, jsx } from "theme-ui";
import { Flex } from "raam";
import Arrow from "../../Arrow";

const SectionTitle = () => (
  <Box as="section" bg="black.dark" color="white.light" py="3">
    <Container>
      <Flex alignItems="center" justifyContent="center">
        <Arrow height="auto" transform="rotateZ(180deg)" width="32" />
        <Heading px="7" variant="display">
          The Party Starts Here
        </Heading>
        <Arrow height="auto" width="32" />
      </Flex>
    </Container>
  </Box>
);

export default SectionTitle;
