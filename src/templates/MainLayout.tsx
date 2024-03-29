import { FC } from "react";
import { Box, Flex } from "theme-ui";
import GlobalStyles from "../../static/GlobalStyles";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

const MainLayout: FC = ({ children }) => (
  <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
    <GlobalStyles />
    <Header />
    <Box as="main" sx={{ flex: "1 1 auto" }}>
      {children}
    </Box>
    <Footer />
  </Flex>
);

export default MainLayout;
