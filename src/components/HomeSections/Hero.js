/** @jsx jsx */
import { Button, jsx, Heading, Text, Container, Box } from "theme-ui";
import BackgroundImage from "gatsby-background-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Stack, Flex } from "raam";
import useSiteMetadata from "../../hooks/use-site-metadata";

const Hero = () => {
  const {
    contentfulHomePageHero: {
      description: { description },
      isVideo,
      media,
      subtitle,
      title,
      videoPoster: {
        fixed: { src: videoPosterSrc },
      },
    },
  } = useStaticQuery(graphql`
    query HeroQuery {
      contentfulHomePageHero(
        id: { eq: "04ac880b-e825-5040-8011-5641ebc3dc27" }
      ) {
        description {
          description
        }
        isVideo
        media {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
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
          fixed(height: 1080, width: 1920) {
            src
          }
        }
      }
    }
  `);

  const breakpoints = useBreakpoint();
  const { funCardLink } = useSiteMetadata();

  return (
    <Box
      sx={{
        position: "relative",
        height: [
          "calc(100vh - 136.5px - 80px)",
          "calc(100vh - 136.5px - 96px)",
          "calc(100vh - 136.5px - 76px)",
          "calc(100vh - 136.5px - 96px)",
          "calc(100vh - 133.5px - 104px)",
        ],
      }}
    >
      {isVideo ? (
        <video
          poster={videoPosterSrc}
          sx={{
            position: "absolute",
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
        <BackgroundImage
          fluid={media.fluid}
          sx={{
            bg: "black.mid",
            position: "absolute !important",
            width: "full",
            height: "full",
          }}
        />
      )}
      <Button
        as="a"
        href={funCardLink}
        sx={{ position: "absolute", right: "3", top: "3", zIndex: "1" }}
        target="_blank"
        variant="cta"
      >
        <FontAwesomeIcon
          icon={faCartPlus}
          sx={{ mr: "2", maxHeight: "0.875rem", maxWidth: "0.875rem" }}
          fixedWidth
        />
        Fun Cards
      </Button>
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
            "linear-gradient(90deg, #1D2435FF, #1D2435FF 50%, #1D243500 100%)",
          ],
          opacity: "0.5",
        }}
      />
      {breakpoints.tablet ? (
        <Container
          px={["3", null, null, null, "0"]}
          py="7"
          sx={{ height: "full" }}
        >
          <Flex
            alignItems="center"
            flexShrink="1"
            sx={{ height: "full", zIndex: "2" }}
          >
            <Box
              color="white.light"
              sx={{
                width: [null, null, "3/4", null, "7/12"],
              }}
            >
              <Heading variant="heading.title">{subtitle}</Heading>
              <Stack gap="3">
                <Heading as="h1" variant="heading">
                  {title}
                </Heading>
                <Text variant="body.large">{description}</Text>
              </Stack>
            </Box>
          </Flex>
        </Container>
      ) : null}
    </Box>
  );
};

export default Hero;
