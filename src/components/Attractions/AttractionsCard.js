/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Card, Divider, Heading, Text, jsx } from "theme-ui";
import { motion } from "framer-motion";
import Img from "gatsby-image";
import { Stack } from "raam";
import StyledLink from "../Link.styled";

const AttractionsCard = ({
  description,
  image,
  pricePoint1Price,
  pricePoint1Title,
  pricePoint1Unit,
  title,
  textAlign,
}) => (
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
        <Stack gap="3" p="3">
          <Heading
            as="h5"
            sx={{ transform: "translateY(-0.25rem)", textAlign }}
            variant="heading.title"
          >
            {title}
          </Heading>
          {description && <Text variant="body.normal">{description}</Text>}
          {pricePoint1Price && <Divider />}
          {pricePoint1Price && (
            <>
              <Text variant="text.cardPricing">{pricePoint1Title}</Text>
              <Text variant="text.cardPricing">
                {`$${pricePoint1Price}`}
                <span> / </span>
                {pricePoint1Unit}
              </Text>
            </>
          )}
        </Stack>
      </Card>
    </StyledLink>
  </motion.div>
);

AttractionsCard.propTypes = {
  image: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  pricePoint1Price: PropTypes.number,
  pricePoint1Title: PropTypes.string,
  pricePoint1Unit: PropTypes.string,
  textAlign: PropTypes.string,
};

AttractionsCard.defaultProps = {
  description: null,
  pricePoint1Price: null,
  pricePoint1Title: null,
  pricePoint1Unit: null,
  textAlign: "left",
};

export default AttractionsCard;
