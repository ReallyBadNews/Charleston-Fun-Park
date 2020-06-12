/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Container, Flex, Grid, jsx, Card, Text, Heading } from "theme-ui";
import { Stack } from "raam";
import SEO from "../components/seo";
import StarDivider from "../components/Dividers/StarDivider";
import WoodBg from "../components/Images/WoodBg";
import MapBox from "../components/Map";
import StyledLink from "../components/Link.styled";

const ParkInfo = () => (
  <>
    <SEO title="Park Info" />
    <StarDivider title="Park Info" />
    <WoodBg overlayColor="blue.light">
      <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
        <Container px={["3", null, null, null, "0"]} py="7">
          <Grid
            columns={["1fr", null, "repeat(2, 1fr)", "1fr"]}
            variant="attractionsPage"
          >
            <Card variant="image">
              <MapBox height="512px" width="100%" />
              <Box p="4">
                <Stack gap="3">
                  <Heading variant="heading.title">Location</Heading>
                  <Text>3255 N Hwy 17, Mt Pleasant, SC 29466</Text>
                  <Heading variant="heading.title">Hours of Operation</Heading>
                  <Text>Monday – Thursday: 11:00 am – 8:00 pm</Text>
                  <Text>Friday: 11:00 am – 11:00 pm</Text>
                  <Text>Saturday: 9:00 am – 11:00 pm</Text>
                  <Text>Sunday: 12:00 pm – 8:00 pm</Text>
                  <Text>
                    *On weekdays when Charleston County Schools are ‘Closed’ we
                    will open at 11:00 am We would love to hear from you! Please
                    fill out this form and we will get in touch with you
                    shortly.
                  </Text>
                  <Heading variant="heading.title">Get in Touch</Heading>
                  <StyledLink href="mailto:info@charlestonfunpark.com">
                    info@charlestonfunpark.com
                  </StyledLink>
                  <StyledLink href="tel:(843) 971-1223">
                    (843) 971-1223
                  </StyledLink>
                </Stack>
              </Box>
            </Card>
          </Grid>
        </Container>
      </Flex>
    </WoodBg>
  </>
);
export default ParkInfo;
