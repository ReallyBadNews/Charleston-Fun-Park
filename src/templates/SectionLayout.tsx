/** @jsx jsx */
/** @jsxFrag */

import React, { FC } from "react";
import {
  Container,
  Flex,
  jsx,
  Card,
  // useThemeUI,
  Text,
  Heading,
} from "theme-ui";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "@/components/seo";
import WoodBg from "@/components/Images/WoodBg";
import StarDivider from "@/components/Dividers/StarDivider";
import { MediaItem } from "@/components/MediaItem";
import { Stack } from "raam";
import { MediaObject } from "../types";

type CommonProps = {
  description?: string;
  title?: string;
};

interface SectionLayoutProps extends PageProps {
  data: {
    contentfulSectionPages: {
      content: {
        childMdx: {
          body: string;
        };
      };
      description: {
        description: string;
      };
      id: string;
      media: MediaObject;
      slug: string;
      title: string;
      seoTitle: string;
    };
  };
}

const SectionLayout: FC<SectionLayoutProps & CommonProps> = ({
  data: {
    contentfulSectionPages: {
      content: {
        childMdx: { body: content },
      },
      description: { description },
      media,
      title,
      seoTitle,
    },
  },
  location: { pathname },
}) => {
  // const {
  //   theme: { sizes },
  // } = useThemeUI();

  return (
    <>
      <SEO pathname={pathname} title={seoTitle} description={description} />
      <StarDivider title={title} />
      <WoodBg>
        <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
          {media ? (
            <MediaItem
              media={media}
              alt="REPLACE_ME"
              sx={{
                maxHeight: "xl",
                height: "xl",
                width: "full",
                objectFit: "cover",
              }}
            />
          ) : null}
          <Container px={["3", null, null, null, "0"]} py="7">
            <Card variant="image">
              <Stack p="4" gap="5">
                <Stack gap="2">
                  <Heading
                    as="h2"
                    sx={{
                      fontFamily: "body",
                      fontSize: ["4", null, "7"],
                    }}
                  >
                    {title}
                  </Heading>
                  <Text variant="body.mid">
                    <MDXRenderer>{content}</MDXRenderer>
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </Container>
        </Flex>
      </WoodBg>
    </>
  );

  // return (
  //   <>
  //     <SEO
  //       description={contentfulSectionPages.description.description}
  //       pathname={pathname}
  //       title={contentfulSectionPages.title}
  //     />
  //     <WoodBg overlayColor="blue.light">
  //       <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
  //         <StarDivider title={contentfulSectionPages.title} />
  //         <Container
  //           my="6"
  //           sx={{
  //             flex: "1 1 auto",
  //             width:
  //               contentfulSectionPages.media &&
  //               contentfulSectionPages.media[0].file.contentType !==
  //                 "application/pdf"
  //                 ? "full"
  //                 : "auto",
  //           }}
  //         >
  //           <Grid
  //             columns={[
  //               "1fr",
  //               null,
  //               sizes &&
  //               contentfulSectionPages.media &&
  //               contentfulSectionPages.media[0].file.contentType !==
  //                 "application/pdf"
  //                 ? `1fr minmax(${sizes["xs"]}, ${sizes["1/3"]})`
  //                 : "1fr",
  //             ]}
  //             px={["3", null, null, null, "0"]}
  //             sx={{
  //               maxWidth:
  //                 contentfulSectionPages.media &&
  //                 contentfulSectionPages.media[0].file.contentType !==
  //                   "application/pdf"
  //                   ? "auto"
  //                   : "3xl",
  //             }}
  //           >
  //             <Card
  //               bg="white.light"
  //               color="black.dark"
  //               p="4"
  //               sx={{ borderRadius: "lg" }}
  //             >
  //               <MDXRenderer>
  //                 {contentfulSectionPages.content.childMdx.body}
  //               </MDXRenderer>
  //               {contentfulSectionPages.media &&
  //                 contentfulSectionPages.media[0].file.contentType ===
  //                   "application/pdf" && (
  //                   <StyledLink href={contentfulSectionPages.media[0].file.url}>
  //                     Download Application
  //                   </StyledLink>
  //                 )}
  //             </Card>
  //             {contentfulSectionPages.media &&
  //               contentfulSectionPages.media[0].file.contentType !==
  //                 "application/pdf" && (
  //                 <Box>
  //                   {contentfulSectionPages.media.map((image) => (
  //                     <Card key={image.title} variant="image">
  //                       <Img alt={image.title} fluid={image.fluid} />
  //                       <Text p="3">
  //                         {contentfulSectionPages.description.description}
  //                       </Text>
  //                     </Card>
  //                   ))}
  //                 </Box>
  //               )}
  //           </Grid>
  //         </Container>
  //       </Flex>
  //     </WoodBg>
  //   </>
  // );
};

export const sectionsQuery = graphql`
  query AutoSectionQuery($id: String) {
    contentfulSectionPages(id: { eq: $id }) {
      id
      title
      seoTitle
      description {
        description
      }
      content {
        childMdx {
          body
        }
      }
      media {
        fluid(maxWidth: 735) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        file {
          contentType
          url
        }
        title
        description
      }
    }
  }
`;

export default SectionLayout;
