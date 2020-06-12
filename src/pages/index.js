/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Heading, Text, jsx } from "theme-ui";
import { Stack } from "raam";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Hero from "../components/Hero";
import ArrowDivider from "../components/Dividers/ArrowDivider";
import BirthdaySection from "../components/BirthdaySection";
import FeaturedAttractions from "../components/Attractions/Featured/FeaturedAttractions";
import SectionDivider from "../components/Dividers/SectionDivider";
import MoreAttractions from "../components/MoreAttractions";
import SEO from "../components/seo";
import WoodBg from "../components/Images/WoodBg";

const IndexPage = () => {
  const breakpoints = useBreakpoint();

  return (
    <>
      <SEO title="Home" />
      <Hero />
      <ArrowDivider />
      {!breakpoints.tablet && (
        <WoodBg overlayColor="blue.light">
          <Box color="white.light" px="3" py="6" sx={{ textAlign: "center" }}>
            <Heading variant="heading.smallTitle">Welcome to the</Heading>
            <Stack gap="3">
              <Heading as="h1" variant="heading.title">
                Charleston Fun Park
              </Heading>
              <Text variant="body.normal">
                From 36 holes of mini-golf, go karts, bumper cars,a full arcade
                with a VR coaster and the OMNI VR Arena and even axe throwing.
                We have something for everyone!
              </Text>
            </Stack>
          </Box>
        </WoodBg>
      )}
      <BirthdaySection />
      <SectionDivider bg="green.light" />
      <FeaturedAttractions />
      <MoreAttractions />
    </>
  );
};

export default IndexPage;
