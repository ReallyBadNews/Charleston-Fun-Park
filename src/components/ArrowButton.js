/** @jsx jsx */
import { jsx, Box, Button } from "theme-ui";
import PropTypes from "prop-types";
import Arrow from "./Images/Arrow";
import useSiteMetadata from "../hooks/use-site-metadata";

const ArrowButton = ({ children }) => {
  const { giftCardLink } = useSiteMetadata();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "7",
      }}
    >
      <Arrow
        sx={{
          display: "inline-block",
          width: "24",
          transform: "rotate(180deg)",
        }}
      />
      <Button as="a" href={giftCardLink} variant="bookNow">
        {children}
      </Button>
      <Arrow
        sx={{
          display: "inline-block",
          width: "24",
        }}
      />
    </Box>
  );
};

ArrowButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArrowButton;
