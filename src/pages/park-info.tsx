/** @jsx jsx */
/** @jsxFrag */

import React, { FC } from "react";
import { Box, Container, Flex, Grid, jsx, Card } from "theme-ui";
import { useStaticQuery, graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "@/components/seo";
import StarDivider from "@/components/Dividers/StarDivider";
import WoodBg from "@/components/Images/WoodBg";
import MapBox from "@/components/Map";

interface Query {
  contentfulParkInfo: {
    title: string;
    seoTitle: string;
    description: {
      description: string;
    };
    content: {
      childMdx: {
        body: string;
      };
    };
  };
}

const ParkInfo: FC<PageProps> = ({ location: { pathname } }) => {
  const {
    contentfulParkInfo: {
      title,
      seoTitle,
      description: { description },
      content: {
        childMdx: { body: bodyContent },
      },
    },
  } = useStaticQuery<Query>(graphql`
    query ParkInfo {
      contentfulParkInfo {
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
      }
    }
  `);

  return (
    <>
      <SEO description={description} pathname={pathname} title={seoTitle} />
      <StarDivider title={title} />
      <WoodBg overlayColor="blue.light">
        <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
          <Container px={["3", null, null, null, "0"]} py="7">
            <Grid columns="1fr" variant="attractionsPage">
              <Card variant="image">
                <MapBox height="512px" width="100%" />
                <Box p="4">
                  <MDXRenderer>{bodyContent}</MDXRenderer>
                </Box>
              </Card>
            </Grid>
          </Container>
        </Flex>
      </WoodBg>
    </>
  );
};

export default ParkInfo;
