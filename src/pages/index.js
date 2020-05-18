/** @jsx jsx */
import { jsx } from "theme-ui";
import MainLayout from "../templates/MainLayout";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionDivider/SectionTitle";
import BirthdaySection from "../components/BirthdaySection";
import FeaturedAttractions from "../components/Attractions/Featured/FeaturedAttractions";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import MoreAttractions from "../components/MoreAttractions";

const IndexPage = () => (
  <MainLayout title="Home">
    <Hero />
    <SectionTitle title="The Party Starts Here" />
    <BirthdaySection />
    <SectionDivider bg="green.light" />
    <FeaturedAttractions />
    <MoreAttractions />
  </MainLayout>
);

export default IndexPage;
