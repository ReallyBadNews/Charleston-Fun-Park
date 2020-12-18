/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Box, jsx, Flex, Card, Container, Heading, Text } from "theme-ui";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { Stack } from "raam";
import SEO from "../components/seo";
import WoodBg from "../components/Images/WoodBg";
import StarDivider from "../components/Dividers/StarDivider";
import ArrowButton from "../components/ArrowButton";

const BirthdaysEventsLayout = ({ location: { pathname } }) => {
  // TODO: Refactor to a page query
  const {
    contentfulBirthdaysEventsPage: {
      title,
      heading,
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
      birthdayPackage4Title,
      birthdayPackage4Price,
      birthdayPackage4Content: {
        childMdx: { body: package4Content },
      },
      birthdayPackage4Media,
      birthdayPackage5Title,
      birthdayPackage5Price,
      birthdayPackage5Content: {
        childMdx: { body: package5Content },
      },
      birthdayPackage5Media,
    },
  } = useStaticQuery(graphql`
    query BirthdaysEventsQuery($id: String) {
      contentfulBirthdaysEventsPage(id: { eq: $id }) {
        id
        title
        slug
        heading
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
          fluid(maxHeight: 342, maxWidth: 608) {
            ...GatsbyContentfulFluid_withWebp_noBase64
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
          fluid(maxHeight: 342, maxWidth: 608) {
            ...GatsbyContentfulFluid_withWebp_noBase64
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
          fluid(maxHeight: 342, maxWidth: 608) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        birthdayPackage4Title
        birthdayPackage4Price
        birthdayPackage4Content {
          childMdx {
            body
          }
        }
        birthdayPackage4Media {
          title
          description
          fluid(maxHeight: 342, maxWidth: 608) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        birthdayPackage5Title
        birthdayPackage5Price
        birthdayPackage5Content {
          childMdx {
            body
          }
        }
        birthdayPackage5Media {
          title
          description
          fluid(maxHeight: 342, maxWidth: 608) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  const shortcodes = { ArrowButton };

  return (
    <>
      <SEO description={description} pathname={pathname} title={title} />
      <WoodBg overlayColor="blue.light">
        <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
          <StarDivider title={title} />
          <Container
            my="6"
            px={["3", null, null, null, "0"]}
            sx={{ flex: "1 1 auto" }}
          >
            <Stack gap="3">
              {heading && (
                <Card px="3" py="4" variant="attraction">
                  <Stack gap="3">
                    <Heading as="h2" variant="heading.sectionTitle">
                      {heading}
                    </Heading>
                    <Text variant="body.mid">{description}</Text>
                  </Stack>
                </Card>
              )}
              {birthdayPackage1Title && (
                <Card variant="bDays">
                  <Box sx={{ width: ["full", null, "1/2"] }}>
                    <Heading mb="2" variant="heading.title">
                      {birthdayPackage1Title.toLowerCase()}
                    </Heading>
                    <Text variant="body.mid">{birthdayPackage1Price}</Text>
                    <MDXProvider components={shortcodes}>
                      <MDXRenderer>{package1Content}</MDXRenderer>
                    </MDXProvider>
                  </Box>
                  {birthdayPackage1Media.length &&
                    birthdayPackage1Media.map((image) => (
                      <Img
                        key={image.title}
                        alt={image.title}
                        fluid={image.fluid}
                        sx={{
                          width: ["full", null, "1/2"],
                          ml: ["0", null, "3"],
                          borderRadius: "lg",
                        }}
                      />
                    ))}
                </Card>
              )}
              {birthdayPackage2Title && (
                <Card variant="bDays">
                  <Box sx={{ width: ["full", null, "1/2"] }}>
                    <Heading mb="2" variant="heading.title">
                      {birthdayPackage2Title.toLowerCase()}
                    </Heading>
                    <Text variant="body.mid">{birthdayPackage2Price}</Text>
                    <MDXProvider components={shortcodes}>
                      <MDXRenderer>{package2Content}</MDXRenderer>
                    </MDXProvider>
                  </Box>
                  {birthdayPackage2Media.length &&
                    birthdayPackage2Media.map((image) => (
                      <Img
                        key={image.title}
                        alt={image.title}
                        fluid={image.fluid}
                        sx={{
                          width: ["full", null, "1/2"],
                          ml: ["0", null, "3"],
                          borderRadius: "lg",
                        }}
                      />
                    ))}
                </Card>
              )}
              {birthdayPackage3Title && (
                <Card variant="bDays">
                  <Box sx={{ width: ["full", null, "1/2"] }}>
                    <Heading mb="2" variant="heading.title">
                      {birthdayPackage3Title.toLowerCase()}
                    </Heading>
                    <Text variant="body.mid">{birthdayPackage3Price}</Text>
                    <MDXProvider components={shortcodes}>
                      <MDXRenderer>{package3Content}</MDXRenderer>
                    </MDXProvider>
                  </Box>
                  {birthdayPackage3Media.length &&
                    birthdayPackage3Media.map((image) => (
                      <Img
                        key={image.title}
                        alt={image.title}
                        fluid={image.fluid}
                        sx={{
                          width: ["full", null, "1/2"],
                          ml: ["0", null, "3"],
                          borderRadius: "lg",
                        }}
                      />
                    ))}
                </Card>
              )}
              {birthdayPackage4Title && (
                <Card variant="bDays">
                  <Box sx={{ width: ["full", null, "1/2"] }}>
                    <Heading mb="2" variant="heading.title">
                      {birthdayPackage4Title.toLowerCase()}
                    </Heading>
                    <Text variant="body.mid">{birthdayPackage4Price}</Text>
                    <MDXProvider components={shortcodes}>
                      <MDXRenderer>{package4Content}</MDXRenderer>
                    </MDXProvider>
                  </Box>
                  {birthdayPackage4Media.length &&
                    birthdayPackage4Media.map((image) => (
                      <Img
                        key={image.title}
                        alt={image.title}
                        fluid={image.fluid}
                        sx={{
                          width: ["full", null, "1/2"],
                          ml: ["0", null, "3"],
                          borderRadius: "lg",
                        }}
                      />
                    ))}
                </Card>
              )}
              {birthdayPackage5Title && (
                <Card variant="bDays">
                  <Box sx={{ width: ["full", null, "1/2"] }}>
                    <Heading mb="2" variant="heading.title">
                      {birthdayPackage5Title.toLowerCase()}
                    </Heading>
                    <Text variant="body.mid">{birthdayPackage5Price}</Text>
                    <MDXProvider components={shortcodes}>
                      <MDXRenderer>{package5Content}</MDXRenderer>
                    </MDXProvider>
                  </Box>
                  {birthdayPackage5Media.length &&
                    birthdayPackage5Media.map((image) => (
                      <Img
                        key={image.title}
                        alt={image.title}
                        fluid={image.fluid}
                        sx={{
                          width: ["full", null, "1/2"],
                          ml: ["0", null, "3"],
                          borderRadius: "lg",
                        }}
                      />
                    ))}
                </Card>
              )}
            </Stack>
          </Container>
        </Flex>
      </WoodBg>
    </>
  );
};

BirthdaysEventsLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default BirthdaysEventsLayout;
