/** @jsxImportSource theme-ui */

import { Box, Button } from "theme-ui";
import { FC } from "react";
import Arrow from "./Images/Arrow";

type ArrowButtonProps = {
  href?: string;
};

const ArrowButton: FC<ArrowButtonProps> = ({ children, href }) => (
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
        sx={{ color: "inherit", textDecoration: "none" }}
        href={href}
        target="_blank"
        rel="noreferrer"
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
