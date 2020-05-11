/** @jsx jsx */
import { jsx } from "theme-ui";
import MainLayout from "../templates/MainLayout";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionDivider/SectionTitle";
import BirthdaySection from "../components/BirthdaySection";

const IndexPage = () => (
  <MainLayout title="Home">
    <Hero />
    <SectionTitle />
    <BirthdaySection />
  </MainLayout>
);

export default IndexPage;
