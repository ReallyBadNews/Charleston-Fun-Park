import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import { ReactNode } from "react";
import { Box, Flex } from "theme-ui";
import GlobalStyles from "../../static/GlobalStyles";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
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
