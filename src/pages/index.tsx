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
      <SEO pathname={pathname} title="Home" description="Charleston Fun Park" />
      <Hero />
      <WoodBg overlayColor="tailwind.orange.300">
        <Container color="white.light" px="3" py="6">
          <Card variant="event" sx={{ bg: "tailwind.orange.50" }}>
            <Img
              alt="Side Sessions at the Charleston Fun Park"
              fluid={sideSessions}
            />
            <Box p="4">
              <Stack gap="3">
                <Heading variant="heading.largeTitle">Thursdays: 6-9pm</Heading>
                <Heading variant="heading.smallTitle">
                  Starting March 11
                </Heading>
                <Text variant="body.mid">
                  SIDE SESSION ARE BACK AT THE CHARLESTON FUN PARK!
                </Text>
                <Text variant="body.mid">
                  Live music every week, a rotating line-up of the areas most
                  sought after food trucks (including some sweets trucks!).
                  Incredible drink specials... if you&apos;re into that sort of
                  thing. An Axe Throwing competition with prizes that anyone can
                  get involved in. Plus there&apos;s the rest of the fun park to
                  play in!! Hangout, relax and listen to some music while your
                  kids have fun and when you&apos;re hungry the food trucks have
                  you covered. For more info including the latest lineup of
                  musicians and food trucks
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
