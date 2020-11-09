import React from "react";
import PropTypes from "prop-types";
import { config } from "@fortawesome/fontawesome-svg-core";
import GlobalStyles from "../../static/GlobalStyles";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

config.autoAddCss = true;

const MainLayout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default MainLayout;
