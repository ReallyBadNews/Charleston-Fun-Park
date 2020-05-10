/** @jsx jsx */
import { jsx } from "theme-ui";
import MainLayout from "../templates/MainLayout";
import Hero from "../components/Hero";
import SectionTitle from "../components/Header/SectionDivider/SectionTitle";

const IndexPage = () => (
  <MainLayout title="Home">
    <Hero />
    <SectionTitle />
  </MainLayout>
);

export default IndexPage;
