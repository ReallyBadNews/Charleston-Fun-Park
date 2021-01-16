/** @jsx jsx */
import { jsx, Box, Button, Link } from "theme-ui";
import Arrow from "./Images/Arrow";
import { FC } from "react";

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
      <Link
        as="a"
        sx={{ color: "inherit", textDecoration: "none" }}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </Link>
    </Button>
    <Arrow
      sx={{
        display: "inline-block",
        width: "24",
      }}
    />
  </Box>
);

export default ArrowButton;
