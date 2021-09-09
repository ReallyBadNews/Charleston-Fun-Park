/** @jsxImportSource theme-ui */

import { Heading, Text, Container, Box } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Stack, Flex } from "raam";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";

interface Query {
  contentfulHomePageHero: {
    description: {
      description: string;
    };
    isVideo: boolean;
    media: {
      gatsbyImageData: IGatsbyImageData;
      description?: string;
      title: string;
      file: {
        contentType: string;
        url: string;
      };
    };
    title: string;
    subtitle: string;
    videoPoster: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

const Hero = () => {
  const {
    contentfulHomePageHero: {
      description: { description },
      isVideo,
      media,
      subtitle,
      title,
      videoPoster: { gatsbyImageData: videoPoster },
    },
  } = useStaticQuery<Query>(graphql`
    query HeroQuery {
      contentfulHomePageHero(
        id: { eq: "017be6d2-0203-5b98-b841-201c01ab9432" }
      ) {
        description {
          description
        }
        isVideo
        media {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          description
          title
          file {
            contentType
            url
          }
        }
        subtitle
        title
        videoPoster {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <Box
      sx={{
        position: "relative",
        height: [
          "calc(100vh - 147px - 80px)",
          "calc(100vh - 147px - 96px)",
          "calc(100vh - 147px - 76px)",
          "calc(100vh - 147px - 96px)",
          "calc(100vh - 147px - 104px)",
        ],
      }}
    >
      {isVideo ? (
        <video
          poster={videoPoster.images.fallback?.src}
          preload="none"
          sx={{
            position: "absolute",
            backgroundColor: "blue.dark",
            objectFit: "cover",
            width: "full",
            height: "full",
            zIndex: "-1",
          }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={media.file.url} type={media.file.contentType} />
          <p>Video could not be found.</p>
        </video>
      ) : (
        <GatsbyImage
          alt={media.description || ""}
          image={media.gatsbyImageData}
          sx={{
            bg: "black.mid",
            position: "absolute",
            width: "full",
            height: "full",
          }}
        />
      )}
      <Box
        sx={{
          position: "absolute",
          zIndex: "0",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          background: [
            "none",
            null,
            "radial-gradient(circle, #1D2435FF, 50%, #1D243500 100%)",
          ],
          opacity: "0.5",
        }}
      />
      <Container
        px={["3", null, null, null, "0"]}
        py="7"
        sx={{ display: ["none", null, "block"], height: "full" }}
      >
        <Flex
          alignItems="center"
          flexShrink={1}
          sx={{ height: "full", zIndex: "2" }}
        >
          <Box
            color="white.light"
            mx="auto"
            sx={{
              width: "3/4",
              textAlign: "center",
              textShadow: "text",
            }}
          >
            <Heading variant="heading.title">{subtitle}</Heading>
            <Stack gap="3">
              <Heading as="h1" variant="heading">
                {title}
              </Heading>
              <Text variant="body.lg">{description}</Text>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
