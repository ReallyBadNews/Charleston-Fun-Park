/** @jsxImportSource theme-ui */

import { FC } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Container, Heading, Text, Button, Grid, Box } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Stack } from "raam";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import BrickBg from "@/components/Images/BrickBg";
import { ChildFluidObject, MediaObject } from "@/types/types";

interface BirthdaySectionProps {
  id?: string;
}

interface HomePageBirthday {
  id: string;
  title: string;
  media: MediaObject[];
  description: {
    description: string;
  };
}

interface Query {
  contentfulHomePageBirthdays: HomePageBirthday;
  file: ChildFluidObject;
}

const BirthdaySection: FC<BirthdaySectionProps> = ({ id }) => {
  const {
    contentfulHomePageBirthdays,
    file: {
      childImageSharp: { fluid: baloonsImage },
    },
  } = useStaticQuery<Query>(graphql`
    query BirthdaySectionQuery {
      contentfulHomePageBirthdays(
        id: { eq: "459dbfcc-f34c-523b-a458-54775988401c" }
      ) {
        id
        title
        media {
          title
          description
          fluid(maxHeight: 400, maxWidth: 400) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        description {
          description
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

  const { navLinks } = useSiteMetadata();

  return (
    <BrickBg id={id}>
      <Container variant="flexContainer">
        <Box
          sx={{
            alignSelf: "flex-start",
            width: "1/4",
            display: ["none", null, "initial"],
          }}
        >
          <Img fluid={baloonsImage} />
        </Box>
        <Stack
          gap={["3", null, "4", null, "5"]}
          sx={{
            width: ["auto", null, "3/4"],
            ml: ["auto", null, "3"],
            mr: ["auto", null, "0"],
          }}
        >
          <Stack gap="3">
            <Heading sx={{ color: "yellow.light" }} variant="heading">
              {contentfulHomePageBirthdays.title}
            </Heading>
            <Text color="white.light" variant="body.mid">
              {contentfulHomePageBirthdays.description.description}
            </Text>
            <Button as="div" variant="cta">
              <Link
                sx={{ color: "inherit", textDecoration: "none" }}
                to={navLinks[2].url}
              >
                View Package Options
                <FontAwesomeIcon icon={faArrowRight} sx={{ ml: "2" }} />
              </Link>
            </Button>
          </Stack>
          <Grid columns={["repeat(2, 1fr)", null, "repeat(4, 1fr)"]} gap="3">
            {contentfulHomePageBirthdays.media.map((image) => (
              <Img
                key={image.title}
                alt={image.description}
                fluid={image.fluid}
                sx={{
                  bg: "blue.dark",
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
