/** @jsx jsx */
/** @jsxFrag */

import React, { FC } from "react";
import { jsx } from "theme-ui";
import { PageProps } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Hero from "@/components/HomeSections/Hero";
import ArrowDivider from "@/components/Dividers/ArrowDivider";
import BirthdaySection from "@/src/components/HomeSections/BirthdaySection.tsx";
import FeaturedAttractions from "@/components/HomeSections/FeaturedAttractions";
import SectionDivider from "@/components/Dividers/SectionDivider";
import MoreAttractions from "@/components/HomeSections/MoreAttractions";
import SEO from "@/components/seo";
import MobileWelcome from "@/components/HomeSections/MobileWelcome";
import EventsSection from "@/components/HomeSections/EventsSection";

const IndexPage: FC<PageProps> = ({ location: { pathname } }) => {
  const breakpoints = useBreakpoint();

  return (
    <>
      <SEO pathname={pathname} title="Home" description="REPLACE ME" />
      <Hero />
      <ArrowDivider />
      {typeof window !== "undefined" && !breakpoints.tablet && (
        <MobileWelcome />
      )}
      <BirthdaySection id="birthdays" />
      <SectionDivider bg="green.light" />
      <FeaturedAttractions />
      <EventsSection />
      <MoreAttractions />
    </>
  );
};

export default IndexPage;
