/** @jsxImportSource theme-ui */

import { ReactNode } from "react";
import { Box, Button } from "theme-ui";
import Arrow from "./Images/Arrow";

type ArrowButtonProps = {
  children?: ReactNode;
  href?: string;
};

const ArrowButton = ({ children, href }: ArrowButtonProps) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: ["3", null, "7"],
      mb: ["4", null, "0"],
    }}
  >
    <Arrow
      sx={{
        display: "inline-block",
        width: "24",
        transform: "rotate(180deg)",
      }}
    />
    <Button as="div" variant="bookNow">
      <a
        href={href}
        rel="noreferrer"
        sx={{ color: "inherit", textDecoration: "none" }}
        target="_blank"
      >
        {children}
      </a>
    </Button>
    <Arrow
      sx={{
        display: "inline-block",
        width: "24",
      }}
    />
  </Box>
);

ArrowButton.defaultProps = {
  href: "#",
};

export default ArrowButton;
