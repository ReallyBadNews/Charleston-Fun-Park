/** @jsx jsx */
import { jsx, Heading, Text, Container, Box } from "theme-ui";
import BackgroundImage from "gatsby-background-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { useStaticQuery, graphql } from "gatsby";
import { Stack, Flex } from "raam";

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
          fluid(maxWidth: 2048) {
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

  return (
    <Box
      sx={{
        position: `relative`,
        height: [
          `calc(100vh - 136.5px - 80px)`,
          `calc(100vh - 136.5px - 96px)`,
          `calc(100vh - 136.5px - 76px)`,
          `calc(100vh - 136.5px - 96px)`,
          `calc(100vh - 133.5px - 104px)`,
        ],
      }}
    >
      {isVideo ? (
        <video
          poster={videoPosterSrc}
          sx={{
            position: `absolute`,
            objectFit: `cover`,
            width: `full`,
            height: `full`,
            zIndex: `-1`,
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
            bg: `black.mid`,
            position: `absolute !important`,
            width: `full`,
            height: `full`,
          }}
        />
      )}
      <Box
        sx={{
          position: `absolute`,
          zIndex: `0`,
          top: `0`,
          right: `0`,
          bottom: `0`,
          left: `0`,
          background: [
            `none`,
            null,
            `linear-gradient(90deg, #1D2435FF, #1D2435FF 50%, #1D243500 100%)`,
          ],
          opacity: `0.5`,
        }}
      />
      {breakpoints.tablet && (
        <Container
          px={[`3`, null, null, null, `0`]}
          py="7"
          sx={{ height: `full` }}
        >
          <Flex
            alignItems="center"
            flexShrink="1"
            sx={{ height: `full`, zIndex: `2` }}
          >
            <Box
              color="white.light"
              sx={{
                width: [null, null, `3/4`, null, `7/12`],
                textShadow: `text`,
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
      )}
    </Box>
  );
};

export default Hero;
