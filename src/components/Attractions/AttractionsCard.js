/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Box, Card, Divider, Heading, Text, jsx } from "theme-ui";
import { motion } from "framer-motion";
import Img from "gatsby-image";
import { Stack, Flex } from "raam";
import StyledLink from "../Link.styled";

const AttractionsCard = ({
  description,
  image,
  pricePoint1Price,
  pricePoint1Title,
  pricePoint1Unit,
  pricePoint2Price,
  pricePoint2Title,
  pricePoint2Unit,
  title,
  textAlign,
}) => (
  <motion.div whileHover={{ y: -8 }}>
    <StyledLink to={`/attractions/${title.toLowerCase().replace(/\s/g, "-")}`}>
      <Card variant="attraction">
        <Img
          alt={title}
          fluid={image}
          sx={{
            height: "xs",
            flex: "0 0 auto",
            borderTopLeftRadius: "lg",
            borderTopRightRadius: "lg",
          }}
        />
        <Flex
          flexDirection="column"
          gap="3"
          justifyContent="space-between"
          p="3"
          sx={{ height: "full" }}
        >
          <Stack gap="3">
            <Heading as="h5" sx={{ textAlign }} variant="heading.title">
              {title}
            </Heading>
            {description && <Text variant="body.normal">{description}</Text>}
          </Stack>
          {pricePoint1Price && (
            <Box>
              <Divider mb="3" />
              <Flex gap="3">
                <Box
                  gap="0"
                  pr="3"
                  sx={{
                    borderRight: pricePoint2Price && "1px solid",
                    borderRightColor: "black.border",
                  }}
                >
                  <Text variant="text.cardPricing">{pricePoint1Title}</Text>
                  <Text variant="text.cardPricing">
                    {`$${pricePoint1Price}`}
                    <span> / </span>
                    {pricePoint1Unit}
                  </Text>
                </Box>
                {pricePoint2Price && (
                  <Box>
                    <Text variant="text.cardPricing">{pricePoint2Title}</Text>
                    <Text variant="text.cardPricing">
                      {`$${pricePoint2Price}`}
                      <span> / </span>
                      {pricePoint2Unit}
                    </Text>
                  </Box>
                )}
              </Flex>
            </Box>
          )}
        </Flex>
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
  pricePoint2Price: PropTypes.number,
  pricePoint2Title: PropTypes.string,
  pricePoint2Unit: PropTypes.string,
  textAlign: PropTypes.string,
};

AttractionsCard.defaultProps = {
  description: null,
  pricePoint1Price: null,
  pricePoint1Title: null,
  pricePoint1Unit: null,
  pricePoint2Price: null,
  pricePoint2Title: null,
  pricePoint2Unit: null,
  textAlign: "left",
};

export default AttractionsCard;
