/** @jsx jsx */
import { jsx, Heading, Container, Button, Card, Box } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import WoodBg from "../Images/WoodBg";

const EventsSection = () => {
  const {
    contentfulHomePageEvents: {
      content: {
        childMdx: { body },
      },
      media: { fluid, title: alt },
      title,
    },
  } = useStaticQuery(graphql`
    {
      contentfulHomePageEvents(
        id: { eq: "1ab38432-604a-5744-8d7f-9d45634e93e4" }
      ) {
        content {
          childMdx {
            body
          }
        }
        media {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
          title
        }
        title
      }
    }
  `);

  const shortcodes = { Button };

  return (
    <WoodBg overlayColor="green.light">
      <Container color="white.light" px="3" py="6">
        <Card variant="event">
          <Img alt={alt} fluid={fluid} />
          <Box p="4">
            <Heading mb="3">{title}</Heading>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </Box>
        </Card>
      </Container>
    </WoodBg>
  );
};

export default EventsSection;
