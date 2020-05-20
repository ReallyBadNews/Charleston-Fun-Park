/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx, Card, Heading, Text } from "theme-ui";
import { motion } from "framer-motion";
import Img from "gatsby-image";
import { Stack } from "raam";
import StyledLink from "../Link.styled";

const AttractionsCard = ({ description, image, title, textAlign }) => (
  <motion.div whileHover={{ y: -16 }}>
    <StyledLink to={`/attractions/${title.toLowerCase().replace(/\s/g, "-")}`}>
      <Card variant="attraction">
        <Img
          alt={title}
          fluid={image}
          sx={{
            height: "xs",
            borderTopLeftRadius: "lg",
            borderTopRightRadius: "lg",
          }}
        />
        <Stack gap="2" p="3">
          <Heading
            as="h5"
            sx={{ transform: "translateY(-0.25rem)", textAlign }}
            variant="heading.title"
          >
            {title}
          </Heading>
          {description && <Text variant="body.normal">{description}</Text>}
        </Stack>
      </Card>
    </StyledLink>
  </motion.div>
);

AttractionsCard.propTypes = {
  image: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  textAlign: PropTypes.string,
};

AttractionsCard.defaultProps = {
  description: null,
  textAlign: "left",
};

export default AttractionsCard;
