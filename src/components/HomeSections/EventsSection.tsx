/** @jsxImportSource theme-ui */

import { Heading, Container, Card, Box } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import WoodBg from "@/components/Images/WoodBg";
import { MediaObject } from "@/types/types";

interface Query {
  contentfulHomePageEvents: {
    content: {
      childMdx: {
        body: string;
      };
    };
    media: MediaObject;
    title: string;
  };
}

const EventsSection = () => {
  const {
    contentfulHomePageEvents: {
      content: {
        childMdx: { body },
      },
      media,
      title,
    },
  } = useStaticQuery<Query>(graphql`
    {
      contentfulHomePageEvents(
        id: { eq: "4f6731d3-7f5e-534e-a667-fc67fadf384e" }
      ) {
        content {
          childMdx {
            body
          }
        }
        media {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
          title
        }
        title
      }
    }
  `);

  return (
    <div sx={{ display: "grid", position: "relative" }}>
      <WoodBg overlayColor="green.light" sx={{ position: "absolute" }} />
      <Container color="white.light" px="3" py="6" sx={{ zIndex: "1" }}>
        <Card variant="event">
          <GatsbyImage
            alt={media.title || "No image description"}
            image={media.gatsbyImageData}
          />
          <Box p="4">
            <Heading mb="3">{title}</Heading>
            <MDXRenderer>{body}</MDXRenderer>
          </Box>
        </Card>
      </Container>
    </div>
  );
};

export default EventsSection;
