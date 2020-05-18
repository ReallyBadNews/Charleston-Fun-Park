import React from "react";
import PropTypes from "prop-types";
import { config } from "@fortawesome/fontawesome-svg-core";
import GlobalStyles from "../../static/GlobalStyles";
import SEO from "../components/seo";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

config.autoAddCss = true;

const MainLayout = ({ children, description, title }) => (
  <>
    <GlobalStyles />
    <SEO description={description} title={title} />
    <Header />
    <main>{children}</main>
    <Footer />
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
