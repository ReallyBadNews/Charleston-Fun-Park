/** @jsxImportSource theme-ui */

import { FC } from "react";
import { Box, Flex, Card, Container, Heading, Text } from "theme-ui";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Stack } from "raam";
import SEO from "@/components/seo";
import WoodBg from "@/components/Images/WoodBg";
import StarDivider from "@/components/Dividers/StarDivider";
import { MediaObject } from "@/types/types";

interface BirthdayPageProps extends PageProps {
  data: {
    contentfulBirthdaysEventsPage: {
      title: string;
      heading: string;
      description: {
        description: string;
      };
      birthdayPackage1Title: string;
      birthdayPackage1Price: string;
      birthdayPackage1Content: {
        childMdx: {
          body: string;
        };
      };
      birthdayPackage1Media: MediaObject[];
      birthdayPackage2Title: string;
      birthdayPackage2Price: string;
      birthdayPackage2Content: {
        childMdx: {
          body: string;
        };
      };
      birthdayPackage2Media: MediaObject[];
      birthdayPackage3Title: string;
      birthdayPackage3Price: string;
      birthdayPackage3Content: {
        childMdx: {
          body: string;
        };
      };
      birthdayPackage3Media: MediaObject[];
      birthdayPackage4Title: string;
      birthdayPackage4Price: string;
      birthdayPackage4Content: {
        childMdx: {
          body: string;
        };
      };
      birthdayPackage4Media: MediaObject[];
      birthdayPackage5Title: string;
      birthdayPackage5Price: string;
      birthdayPackage5Content: {
        childMdx: {
          body: string;
        };
      };
      birthdayPackage5Media: MediaObject[];
    };
  };
}

const BirthdaysEventsLayout: FC<BirthdayPageProps> = ({
  data: {
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
  },
  location: { pathname },
}) => (
  <>
    <SEO description={description} pathname={pathname} title={title} />
    <WoodBg overlayColor="blue.light">
      <Flex
        sx={{
          flexDirection: "column",
          minHeight: "screenHeight",
          gridArea: "1 / 1",
          zIndex: "1",
        }}
      >
        <StarDivider title={title} />
        <Container my="6" sx={{ flex: "1 1 auto" }}>
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
                  <MDXRenderer>{package1Content}</MDXRenderer>
                </Box>
                {birthdayPackage1Media.length &&
                  birthdayPackage1Media.map((image) => (
                    <GatsbyImage
                      key={image.title}
                      alt={image.title || "No alt text"}
                      image={image.gatsbyImageData}
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
                  <MDXRenderer>{package2Content}</MDXRenderer>
                </Box>
                {birthdayPackage2Media.length &&
                  birthdayPackage2Media.map((image) => (
                    <GatsbyImage
                      key={image.title}
                      alt={image.title || "No alt text"}
                      image={image.gatsbyImageData}
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
                  <MDXRenderer>{package3Content}</MDXRenderer>
                </Box>
                {birthdayPackage3Media.length &&
                  birthdayPackage3Media.map((image) => (
                    <GatsbyImage
                      key={image.title}
                      alt={image.title || "No alt text"}
                      image={image.gatsbyImageData}
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
                  <MDXRenderer>{package4Content}</MDXRenderer>
                </Box>
                {birthdayPackage4Media.length &&
                  birthdayPackage4Media.map((image) => (
                    <GatsbyImage
                      key={image.title}
                      alt={image.title || "No alt text"}
                      image={image.gatsbyImageData}
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
                  <MDXRenderer>{package5Content}</MDXRenderer>
                </Box>
                {birthdayPackage5Media.length &&
                  birthdayPackage5Media.map((image) => (
                    <GatsbyImage
                      key={image.title}
                      alt={image.title || "No alt text"}
                      image={image.gatsbyImageData}
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

export default BirthdaysEventsLayout;

export const query = graphql`
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
        gatsbyImageData(
          placeholder: BLURRED
          layout: CONSTRAINED
          width: 220
          height: 220
        )
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
        gatsbyImageData(
          placeholder: BLURRED
          layout: CONSTRAINED
          width: 220
          height: 220
        )
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
        gatsbyImageData(
          placeholder: BLURRED
          layout: CONSTRAINED
          width: 220
          height: 220
        )
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
        gatsbyImageData(
          placeholder: BLURRED
          layout: CONSTRAINED
          width: 220
          height: 220
        )
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
        gatsbyImageData(
          placeholder: BLURRED
          layout: CONSTRAINED
          width: 220
          height: 220
        )
      }
    }
  }
`;
