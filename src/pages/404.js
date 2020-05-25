import React from "react";
import { Container, Heading, Text } from "theme-ui";
import StyledLink from "../components/Link.styled";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <>
    <SEO title="404 | Page Not Found" />
    <Container py="6">
      <Heading variant="caps">Not Found</Heading>
      <Text mt="4" variant="body.normal">
        <span>Did you take a wrong turn? </span>
        <StyledLink to="/">Go back home</StyledLink>
      </Text>
    </Container>
  </>
);

export default NotFoundPage;
