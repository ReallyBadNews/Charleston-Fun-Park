/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx, Card, Heading, Text } from "theme-ui";
import { Link } from "gatsby";
import Img from "gatsby-image";

const AttractionsCard = ({ description, image, title }) => (
  <Link
    sx={{
      textDecoration: "none",
      color: "inherit",
      "&:hover h5": {
        textDecoration: "underline",
        textDecorationThickness: "0.25rem",
      },
    }}
    to={`/attractions/${title.toLowerCase().replace(/\s/g, "-")}`}
  >
    <Card variant="summary">
      <Img
        alt={title}
        fluid={image}
        sx={{
          height: "48",
          borderTopLeftRadius: "lg",
          borderTopRightRadius: "lg",
        }}
      />
      <Heading
        as="h5"
        py="3"
        sx={{ transform: "translateY(-0.25rem)" }}
        variant="heading.title"
      >
        {title}
      </Heading>
      {description && <Text variant="description">{description}</Text>}
    </Card>
  </Link>
);

AttractionsCard.propTypes = {
  image: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

AttractionsCard.defaultProps = {
  description: null,
};

export default AttractionsCard;
