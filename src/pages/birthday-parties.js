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
  const {
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
          fluid(maxHeight: 378, maxWidth: 608) {
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
          fluid(maxHeight: 378, maxWidth: 608) {
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
          fluid(maxHeight: 378, maxWidth: 608) {
            ...GatsbyContentfulFluid_withWebp
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
          fluid(maxHeight: 378, maxWidth: 608) {
            ...GatsbyContentfulFluid_withWebp
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
          fluid(maxHeight: 378, maxWidth: 608) {
            ...GatsbyContentfulFluid_withWebp
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
        <Flex sx={{ flexDirection: `column`, minHeight: `screenHeight` }}>
          <StarDivider title={title} />
          <Container
            my="6"
            px={[`3`, null, null, null, `0`]}
            sx={{ flex: `1 1 auto` }}
          >
            <Stack gap="3">
              {birthdayPackage1Title && (
                <Card variant="bDays">
                  <Box sx={{ width: [`full`, null, `1/2`] }}>
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
                          width: [`full`, null, `1/2`],
                          ml: [`0`, null, `3`],
                        }}
                      />
                    ))}
                </Card>
              )}
              {birthdayPackage2Title && (
                <Card variant="bDays">
                  <Box sx={{ width: `1/2` }}>
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
                          width: [`full`, null, `1/2`],
                          ml: [`0`, null, `3`],
                        }}
                      />
                    ))}
                </Card>
              )}
              {birthdayPackage3Title && (
                <Card variant="bDays">
                  <Box sx={{ width: `1/2` }}>
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
                          width: [`full`, null, `1/2`],
                          ml: [`0`, null, `3`],
                        }}
                      />
                    ))}
                </Card>
              )}
              {birthdayPackage4Title && (
                <Card variant="bDays">
                  <Box sx={{ width: `1/2` }}>
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
                          width: [`full`, null, `1/2`],
                          ml: [`0`, null, `3`],
                        }}
                      />
                    ))}
                </Card>
              )}
              {birthdayPackage5Title && (
                <Card variant="bDays">
                  <Box sx={{ width: `1/2` }}>
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
                          width: [`full`, null, `1/2`],
                          ml: [`0`, null, `3`],
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
