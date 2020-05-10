/** @jsx jsx */
import { jsx, Box, Container, Heading } from "theme-ui";
import { Flex } from "raam";
import MainLayout from "../templates/MainLayout";
import Hero from "../components/Hero";

const IndexPage = () => (
  <MainLayout title="Home">
    <Hero />
    <Box bg="black.dark" color="white.light" py="4">
      <Container>
        <Flex alignItems="center" justifyContent="center">
          <Heading>The Party Starts Here</Heading>
        </Flex>
      </Container>
    </Box>
  </MainLayout>
);

export default IndexPage;
