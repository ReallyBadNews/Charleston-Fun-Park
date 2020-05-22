/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "theme-ui";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionDivider/SectionTitle";
import BirthdaySection from "../components/BirthdaySection";
import FeaturedAttractions from "../components/Attractions/Featured/FeaturedAttractions";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import MoreAttractions from "../components/MoreAttractions";
import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <SectionTitle title="The Party Starts Here" />
    <BirthdaySection />
    <SectionDivider bg="green.light" />
    <FeaturedAttractions />
    <MoreAttractions />
  </>
);

export default IndexPage;
