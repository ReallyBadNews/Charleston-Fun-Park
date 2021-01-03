import React, { FC } from "react";
import GlobalStyles from "../../static/GlobalStyles";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

const MainLayout: FC = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
