/** @jsx jsx */
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { jsx, Container, Heading, Text, Button, Grid } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Stack } from "raam";
import BrickBg from "./BrickBg";

const BirthdaySection = () => {
  const {
    allContentfulBirthdaysEvents: { edges },
    file: {
      childImageSharp: { fluid: baloonsImage },
    },
  } = useStaticQuery(graphql`
    query BirthdaySectionQuery {
      allContentfulBirthdaysEvents {
        edges {
          node {
            id
            title
            media {
              contentful_id
              description
              fluid(maxHeight: 200, maxWidth: 200) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            description {
              description
            }
          }
        }
      }
      file(relativePath: { eq: "baloons.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <BrickBg sx={{ position: "relative" }}>
      <Container
        px={["3", null, null, null, "0"]}
        py="7"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "full",
        }}
      >
        <Img
          fluid={baloonsImage}
          sx={{ alignSelf: "flex-start", width: "1/4" }}
        />
        <Stack
          gap={["3", null, "4", null, "5"]}
          sx={{
            width: "3/4",
            ml: "3",
            mr: ["auto", null, null, "0", null],
          }}
        >
          <Stack gap="3">
            <Heading
              sx={{ fontSize: "8", color: "yellow.light" }}
              variant="heading"
            >
              {edges[0].node.title}
            </Heading>
            <Text color="white.light" variant="body.mid">
              {edges[0].node.description.description}
            </Text>
            <Button as={Link} to="/" variant="cta">
              View Package Options
              <FontAwesomeIcon
                icon={faArrowRight}
                sx={{ maxHeight: "4", ml: "2" }}
              />
            </Button>
          </Stack>
          <Grid
            columns={["1fr", "repeat(2, 1fr)", null, "repeat(4, 1fr)"]}
            gap="3"
          >
            {edges[0].node.media.map((image) => (
              <Img
                key={image.contentful_id}
                alt={image.description}
                fluid={image.fluid}
                sx={{
                  borderWidth: "0.125rem",
                  borderColor: "white.light",
                  borderStyle: "solid",
                }}
              />
            ))}
          </Grid>
        </Stack>
      </Container>
    </BrickBg>
  );
};

export default BirthdaySection;
