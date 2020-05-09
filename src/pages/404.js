import React from "react";
import PropTypes from "prop-types";
import { Container, Heading, Text } from "theme-ui";
import MainLayout from "../templates/MainLayout";
import StyledLink from "../components/Link.styled";

const NotFoundPage = () => (
  <MainLayout title="404: Not Found">
    <Container py="6">
      <Heading variant="caps">Not Found</Heading>
      <Text mt="4" variant="body">
        <span>Did you take a wrong turn? </span>
        <StyledLink to="/">Go back home</StyledLink>
      </Text>
    </Container>
  </MainLayout>
);

export default NotFoundPage;

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
