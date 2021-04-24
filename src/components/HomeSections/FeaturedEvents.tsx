/** @jsx jsx */
/** @jsxFrag */

import React, { FC } from "react";
import WoodBg from "@/components/Images/WoodBg";
import { ChildFluidObject } from "@/types/types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Stack } from "raam";
import { Box, Button, Card, Container, Heading, jsx, Text } from "theme-ui";

interface ImageProps {
  sideSessions: ChildFluidObject;
  golfCardImg: ChildFluidObject;
  funPuttOpen: ChildFluidObject;
}

const FeaturedEvents: FC = () => {
  const {
    sideSessions: {
      childImageSharp: { fluid: sideSessions },
    },
    golfCardImg: {
      childImageSharp: { fluid: golfCardImg },
    },
    funPuttOpen: {
      childImageSharp: { fluid: funPuttOpen },
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
      golfCardImg: file(relativePath: { eq: "golfCardImg.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 512, maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      funPuttOpen: file(relativePath: { eq: "funPuttOpen.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 96, maxWidth: 96) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <WoodBg
        overlayColor="tailwind.green.300"
        sx={{ borderColor: "blue.dark", borderBottom: "2px solid" }}
      >
        <Container color="white.light" px="3" py="6">
          <Card variant="event" sx={{ bg: "white" }}>
            <Box p="4">
              <Stack gap="3">
                <Heading variant="heading.largeTitle">Fun Putt Open</Heading>
                <Text
                  variant="body.lg"
                  sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  Saturday, May 23rd (1-6pm)
                </Text>
                <Text variant="body.mid">
                  It&apos;s time to show off your short game. Grab your family
                  or some friends and sign up today for the first, annual FUN
                  PUTT OPEN mini-golf tournament. Prizes, free gifts, food and
                  drink specials, all while competing in the greatest sport ever
                  created... mini-golf. We&apos;ll have TVs set up so you can
                  check out the scores and coverage of the PGA Championship from
                  Kiawah.
                </Text>
                <Img
                  alt="Fun Putt Open at Charleston Fun Park"
                  fluid={funPuttOpen}
                  sx={{
                    bg: "tailwind.green.300",
                    maxWidth: ["full", null, "64"],
                    height: "auto",
                  }}
                />
                <Text variant="body.mid">
                  Click below for more information or to register.{" "}
                </Text>
                <Button as="div" variant="cta">
                  <Link
                    sx={{ color: "inherit", textDecoration: "none" }}
                    to="/fun-putt-open/"
                  >
                    Info & Registration
                    <FontAwesomeIcon icon={faArrowRight} sx={{ ml: "2" }} />
                  </Link>
                </Button>
              </Stack>
            </Box>
            <Img
              alt="Man on putting green"
              fluid={golfCardImg}
              sx={{ bg: "tailwind.green.300" }}
            />
          </Card>
        </Container>
      </WoodBg>
      <WoodBg overlayColor="tailwind.orange.300">
        <Container color="white.light" px="3" py="6">
          <Card variant="event" sx={{ bg: "tailwind.orange.50" }}>
            <Img
              alt="Side Sessions at the Charleston Fun Park"
              fluid={sideSessions}
              sx={{ bg: "tailwind.orange.300" }}
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
    </>
  );
};

export default FeaturedEvents;
