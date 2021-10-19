import { FC } from "react";
import { Box, Flex } from "theme-ui";
import { Helmet } from "react-helmet";
import GlobalStyles from "../../static/GlobalStyles";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

const MainLayout: FC = ({ children }) => (
  <>
    <Helmet>
      <script
        src="https://js.adsrvr.org/up_loader.1.1.0.js"
        type="text/javascript"
        defer
      />
    </Helmet>
    <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
      <GlobalStyles />
      <Header />
      <Box as="main" sx={{ flex: "1 1 auto" }}>
        {children}
      </Box>
      <Footer />
    </Flex>
  </>
);

export default MainLayout;
