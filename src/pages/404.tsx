import { PageProps } from "gatsby";
import { FC } from "react";
import { Container, Heading, Text, Box, Card, Grid, Flex } from "theme-ui";
import StarDivider from "@/components/Dividers/StarDivider";
import { Link } from "@/components/Link";
import SEO from "@/components/seo";

const NotFoundPage: FC<PageProps> = ({ location: { pathname } }) => (
  <>
    <SEO
      description="404 | Page Not Found"
      pathname={pathname}
      title="404 | Page Not Found"
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
                <Link to="/">Go back home</Link>
              </Text>
            </Box>
          </Card>
        </Grid>
      </Container>
    </Flex>
  </>
);

export default NotFoundPage;
