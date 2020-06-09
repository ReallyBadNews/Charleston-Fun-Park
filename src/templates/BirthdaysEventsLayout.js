/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Box, jsx, Flex, Card, Container, Grid, Heading, Text } from "theme-ui";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Stack } from "raam";
import SEO from "../components/seo";
import WoodBg from "../components/Images/WoodBg";
import MoreAttractionsDivider from "../components/SectionDivider/MoreAttractionsDivider";

const BirthdaysEventsLayout = ({
  data: {
    contentfulBirthdaysEventsPage: {
      title,
      description: { description },
      birthdayPackage1Title,
      birthdayPackage1Price,
      birthdayPackage1Content: {
        childMdx: { body: package1Content },
      },
      birthdayPackage1Media,
      birthdayPackage2Title,
      birthdayPackage2Price,
      birthdayPackage2Content: {
        childMdx: { body: package2Content },
      },
      birthdayPackage2Media,
      birthdayPackage3Title,
      birthdayPackage3Price,
      birthdayPackage3Content: {
        childMdx: { body: package3Content },
      },
      birthdayPackage3Media,
    },
  },
  location: { pathname },
}) => (
  <>
    <SEO description={description} pathname={pathname} title={title} />
    <WoodBg overlayColor="blue.light">
      <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
        <MoreAttractionsDivider title={title} />
        <Container
          my="6"
          px={["3", null, null, null, "0"]}
          sx={{ flex: "1 1 auto" }}
        >
          <Stack gap="7">
            <Card variant="bDays">
              <Box sx={{ width: "1/2" }}>
                <Heading mb="2" variant="heading.title">
                  {birthdayPackage1Title}
                </Heading>
                <Text variant="body.mid">{birthdayPackage1Price}</Text>
                <MDXRenderer>{package1Content}</MDXRenderer>
              </Box>
              <Grid
                columns={["repeat(2, 1fr)", null, "repeat(2, 1fr)"]}
                gap="3"
                ml="3"
                sx={{ width: "1/2" }}
              >
                {birthdayPackage1Media.map((image) => (
                  <Stack key={image.title} gap="2">
                    <Img alt={image.title} fluid={image.fluid} />
                    <Text>{image.description}</Text>
                  </Stack>
                ))}
              </Grid>
            </Card>
            <Card variant="bDays">
              <Box sx={{ width: "1/2" }}>
                <Heading mb="2" variant="heading.title">
                  {birthdayPackage2Title}
                </Heading>
                <Text variant="body.mid">{birthdayPackage2Price}</Text>
                <MDXRenderer>{package2Content}</MDXRenderer>
              </Box>
              <Grid
                columns={["repeat(2, 1fr)", null, "repeat(2, 1fr)"]}
                gap="3"
                ml="3"
                sx={{ width: "1/2" }}
              >
                {birthdayPackage2Media.map((image) => (
                  <Stack key={image.title} gap="2">
                    <Img alt={image.title} fluid={image.fluid} />
                    <Text>{image.description}</Text>
                  </Stack>
                ))}
              </Grid>
            </Card>
            <Card variant="bDays">
              <Box sx={{ width: "1/2" }}>
                <Heading mb="2" variant="heading.title">
                  {birthdayPackage3Title}
                </Heading>
                <Text variant="body.mid">{birthdayPackage3Price}</Text>
                <MDXRenderer>{package3Content}</MDXRenderer>
              </Box>
              <Grid
                columns={["repeat(2, 1fr)", null, "repeat(2, 1fr)"]}
                gap="3"
                ml="3"
                sx={{ width: "1/2" }}
              >
                {birthdayPackage3Media.map((image) => (
                  <Stack key={image.title} gap="2">
                    <Img alt={image.title} fluid={image.fluid} />
                    <Text>{image.description}</Text>
                  </Stack>
                ))}
              </Grid>
            </Card>
          </Stack>
        </Container>
      </Flex>
    </WoodBg>
  </>
);

export const birthdaysEventsQuery = graphql`
  query BirthdaysEventsQuery($id: String) {
    contentfulBirthdaysEventsPage(id: { eq: $id }) {
      id
      title
      slug
      description {
        description
      }
      birthdayPackage1Title
      birthdayPackage1Price
      birthdayPackage1Content {
        childMdx {
          body
        }
      }
      birthdayPackage1Media {
        title
        description
        fluid(maxHeight: 196, maxWidth: 296) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      birthdayPackage2Title
      birthdayPackage2Price
      birthdayPackage2Content {
        childMdx {
          body
        }
      }
      birthdayPackage2Media {
        title
        description
        fluid(maxHeight: 196, maxWidth: 296) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      birthdayPackage3Title
      birthdayPackage3Price
      birthdayPackage3Content {
        childMdx {
          body
        }
      }
      birthdayPackage3Media {
        title
        description
        fluid(maxHeight: 196, maxWidth: 296) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

BirthdaysEventsLayout.propTypes = {
  data: PropTypes.shape({
    contentfulBirthdaysEventsPage: PropTypes.shape({
      birthdayPackage1Content: PropTypes.shape({
        childMdx: PropTypes.shape({
          body: PropTypes.string,
        }),
      }),
      birthdayPackage1Media: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string,
          fluid: PropTypes.shape({
            aspectRatio: PropTypes.number,
            base64: PropTypes.string,
            sizes: PropTypes.string,
            srcSet: PropTypes.string,
            srcSetWebp: PropTypes.string,
            srcWebP: PropTypes.string,
          }),
          title: PropTypes.string,
        })
      ),
      birthdayPackage1Price: PropTypes.string,
      birthdayPackage1Title: PropTypes.string,
      birthdayPackage2Content: PropTypes.shape({
        childMdx: PropTypes.shape({
          body: PropTypes.string,
        }),
      }),
      birthdayPackage2Media: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string,
          fluid: PropTypes.shape({
            aspectRatio: PropTypes.number,
            base64: PropTypes.string,
            sizes: PropTypes.string,
            srcSet: PropTypes.string,
            srcSetWebp: PropTypes.string,
            srcWebP: PropTypes.string,
          }),
          title: PropTypes.string,
        })
      ),
      birthdayPackage2Price: PropTypes.string,
      birthdayPackage2Title: PropTypes.string,
      birthdayPackage3Content: PropTypes.shape({
        childMdx: PropTypes.shape({
          body: PropTypes.string,
        }),
      }),
      birthdayPackage3Media: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string,
          fluid: PropTypes.shape({
            aspectRatio: PropTypes.number,
            base64: PropTypes.string,
            sizes: PropTypes.string,
            srcSet: PropTypes.string,
            srcSetWebp: PropTypes.string,
            srcWebP: PropTypes.string,
          }),
          title: PropTypes.string,
        })
      ),
      birthdayPackage3Price: PropTypes.string,
      birthdayPackage3Title: PropTypes.string,
      description: PropTypes.shape({
        description: PropTypes.string,
      }),
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default BirthdaysEventsLayout;
