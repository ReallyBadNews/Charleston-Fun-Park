/** @jsxImportSource theme-ui */

import { Box, Heading, Text, SxProps } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Stack } from "raam";
import WoodBg from "@/components/Images/WoodBg";
import { FC } from "react";

interface Query {
  contentfulHomePageHero: {
    description: {
      description: string;
    };
    subtitle: string;
    title: string;
  };
}

interface Props {
  className?: string;
}

const MobileWelcome: FC<Props & SxProps> = ({ className, sx }) => {
  const {
    contentfulHomePageHero: {
      description: { description },
      subtitle,
      title,
    },
  } = useStaticQuery<Query>(graphql`
    query MobileWelcomeQuery {
      contentfulHomePageHero(
        id: { eq: "017be6d2-0203-5b98-b841-201c01ab9432" }
      ) {
        description {
          description
        }
        subtitle
        title
      }
    }
  `);

  return (
    <WoodBg overlayColor="blue.light" className={className} sx={sx}>
      <Box color="white.light" px="3" py="6" sx={{ textAlign: "center" }}>
        <Heading variant="heading.smallTitle">{subtitle}</Heading>
        <Stack gap="3">
          <Heading as="h1" variant="heading.title">
            {title}
          </Heading>
          <Text variant="body.normal">{description}</Text>
        </Stack>
      </Box>
    </WoodBg>
  );
};

export default MobileWelcome;
