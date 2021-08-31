import { PageProps } from "gatsby";
import { FC } from "react";
import { Container, Heading, Text, Box, Card, Grid, Flex } from "theme-ui";
import StarDivider from "@/components/Dividers/StarDivider";
import StyledLink from "@/components/Link.styled";
import SEO from "@/components/seo";

const NotFoundPage: FC<PageProps> = ({ location: { pathname } }) => (
  <>
    <SEO
      title="404 | Page Not Found"
      description="404 | Page Not Found"
      pathname={pathname}
    />
    <StarDivider title="Page Not Found" />
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "screenHeight",
        bg: "blue.dark",
      }}
    >
      <Container px={["3", null, null, null, "0"]} py="7">
        <Grid columns="1fr" variant="attractionsPage">
          <Card variant="image">
            <Box p="4">
              <Heading variant="heading.title">Not Found</Heading>
              <Text mt="3" variant="body.normal">
                <span>Did you take a wrong turn? </span>
                <StyledLink to="/">Go back home</StyledLink>
              </Text>
            </Box>
          </Card>
        </Grid>
      </Container>
    </Flex>
  </>
);

export default NotFoundPage;
