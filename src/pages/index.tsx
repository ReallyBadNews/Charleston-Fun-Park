/** @jsxImportSource theme-ui */

import { PageProps } from "gatsby";
import { FC } from "react";
import ArrowDivider from "@/components/Dividers/ArrowDivider";
import EventsSection from "@/components/HomeSections/EventsSection";
import FeaturedAttractions from "@/components/HomeSections/FeaturedAttractions";
import Hero from "@/components/HomeSections/Hero";
import MobileWelcome from "@/components/HomeSections/MobileWelcome";
import MoreAttractions from "@/components/HomeSections/MoreAttractions";
import SEO from "@/components/seo";
import BirthdaySection from "@/src/components/HomeSections/BirthdaySection";

const IndexPage: FC<PageProps> = ({ location: { pathname } }) => (
  <>
    <SEO pathname={pathname} title="Home" description="Charleston Fun Park" />
    <Hero />
    <ArrowDivider />
    <MobileWelcome sx={{ display: ["block", null, "none"] }} />
    <BirthdaySection id="birthdays" />
    <EventsSection />
    <FeaturedAttractions />
    <MoreAttractions />
  </>
);

export default IndexPage;
