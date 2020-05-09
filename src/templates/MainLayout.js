import React from "react";
import PropTypes from "prop-types";
import GlobalStyles from "../../static/GlobalStyles";
import SEO from "../components/seo";
import Header from "../components/Header/Header";

const MainLayout = ({ children, description, title }) => (
  <>
    <GlobalStyles />
    <SEO description={description} title={title} />
    <Header />
    <main>{children}</main>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
};

MainLayout.defaultProps = {
  description: "",
  title: "",
};

export default MainLayout;
