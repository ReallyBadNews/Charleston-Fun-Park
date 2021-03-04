/** @jsx jsx */
/** @jsxFrag */

import React from "react";
import ArrowDivider from "@/components/Dividers/ArrowDivider";
import EventsSection from "@/components/HomeSections/EventsSection";
import FeaturedAttractions from "@/components/HomeSections/FeaturedAttractions";
import Hero from "@/components/HomeSections/Hero";
import MobileWelcome from "@/components/HomeSections/MobileWelcome";
import MoreAttractions from "@/components/HomeSections/MoreAttractions";
import SEO from "@/components/seo";
import BirthdaySection from "@/src/components/HomeSections/BirthdaySection.tsx";
import { Link, graphql, PageProps, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Stack } from "raam";
import { FC } from "react";
import { Box, Button, Card, Container, Heading, jsx, Text } from "theme-ui";
import WoodBg from "../components/Images/WoodBg";
import { ChildFluidObject } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ImageProps {
  sideSessions: ChildFluidObject;
}

const IndexPage: FC<PageProps> = ({ location: { pathname } }) => {
  const {
    sideSessions: {
      childImageSharp: { fluid: sideSessions },
    },
  } = useStaticQuery<ImageProps>(graphql`
    {
      sideSessions: file(relativePath: { eq: "sideSessions.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO pathname={pathname} title="Home" description="REPLACE ME" />
      <Hero />
      <WoodBg overlayColor="tailwind.orange.300">
        <Container color="white.light" px="3" py="6">
          <Card variant="event">
            <Img
              alt="Side Sessions at the Charleston Fun Park"
              fluid={sideSessions}
            />
            <Box p="4">
              <Stack gap="3">
                <Heading>Live Music</Heading>
                <Text variant="body.mid">
                  Live music, drink specials, food trucks, axe throwing, and a
                  fun park!
                </Text>
                <Text variant="body.mid">
                  Every Thursday starting March 11, from 6-9pm
                </Text>
                <Button as="div" variant="cta">
                  <Link
                    sx={{ color: "inherit", textDecoration: "none" }}
                    to="/side-sessions/"
                  >
                    Get More Info
                    <FontAwesomeIcon icon={faArrowRight} sx={{ ml: "2" }} />
                  </Link>
                </Button>
              </Stack>
            </Box>
          </Card>
        </Container>
      </WoodBg>
      <ArrowDivider />
      <MobileWelcome sx={{ display: ["block", null, "none"] }} />
      <BirthdaySection id="birthdays" />
      <EventsSection />
      <FeaturedAttractions />
      <MoreAttractions />
    </>
  );
};

export default IndexPage;
