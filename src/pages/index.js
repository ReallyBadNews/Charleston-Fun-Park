/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "theme-ui";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Hero from "../components/HomeSections/Hero";
import ArrowDivider from "../components/Dividers/ArrowDivider";
import BirthdaySection from "../components/HomeSections/BirthdaySection";
import FeaturedAttractions from "../components/HomeSections/FeaturedAttractions";
import SectionDivider from "../components/Dividers/SectionDivider";
import MoreAttractions from "../components/HomeSections/MoreAttractions";
import SEO from "../components/seo";
import MobileWelcome from "../components/HomeSections/MobileWelcome";

const IndexPage = () => {
  const breakpoints = useBreakpoint();

  return (
    <>
      <SEO title="Home" />
      <Hero />
      <ArrowDivider />
      {!breakpoints.tablet && <MobileWelcome />}
      <BirthdaySection />
      <SectionDivider bg="green.light" />
      <FeaturedAttractions />
      <MoreAttractions />
    </>
  );
};

export default IndexPage;
