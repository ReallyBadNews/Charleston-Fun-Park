/** @jsxImportSource theme-ui */

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Stack } from "raam";
import { FC } from "react";
import { Box, Button, Container, Grid, Heading, Text } from "theme-ui";
import { ChildFluidObject, MediaObject } from "@/src/types/types";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import BrickBg from "@/components/Images/BrickBg";

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
  const { contentfulHomePageBirthdays } = useStaticQuery<Query>(graphql`
    query BirthdaySectionQuery {
      contentfulHomePageBirthdays(
        id: { eq: "459dbfcc-f34c-523b-a458-54775988401c" }
      ) {
        title
        media {
          title
          description
          gatsbyImageData(
            placeholder: BLURRED
            layout: CONSTRAINED
            width: 220
            height: 220
          )
        }
        description {
          description
        }
      }
    }
  `);

  const { navLinks } = useSiteMetadata();

  return (
    <div id={id} sx={{ display: "grid", position: "relative" }}>
      <BrickBg
        sx={{
          gridArea: "1 / 1",
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        }}
      />
      <Container sx={{ gridArea: "1 / 1" }} variant="flexContainer">
        <Box
          sx={{
            alignSelf: "flex-start",
            width: "1/4",
            display: ["none", null, "initial"],
          }}
        >
          <StaticImage
            alt="baloons"
            layout="constrained"
            placeholder="none"
            src="../../images/baloons.png"
          />
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
          <Grid columns={[2, null, 4]} gap="3">
            {contentfulHomePageBirthdays.media.map((image) => (
              <GatsbyImage
                key={image.title}
                alt={image.description || ""}
                image={image.gatsbyImageData}
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
    </div>
  );
};

BirthdaySection.defaultProps = {
  id: undefined,
};

export default BirthdaySection;
