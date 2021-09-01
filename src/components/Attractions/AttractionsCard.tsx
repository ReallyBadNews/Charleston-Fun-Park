/** @jsxImportSource theme-ui */

import { FC, ReactText } from "react";
import CSS from "csstype";
import { Box, Card, Divider, Heading, Text } from "theme-ui";
import { motion } from "framer-motion";
import { Stack, Flex } from "raam";
import StyledLink from "@/components/Link.styled";
import { MediaItem } from "@/components/MediaItem";
import { MediaObject } from "@/types/types";

interface AttractionCardProps {
  description?: string;
  media: MediaObject;
  pricePoint1Price?: string;
  pricePoint1Title?: string;
  pricePoint1Unit?: string;
  pricePoint2Price?: string;
  pricePoint2Title?: string;
  pricePoint2Unit?: string;
  title: string;
  textAlign?: CSS.Properties<ReactText>["textAlign"];
}

const AttractionCard: FC<AttractionCardProps> = ({
  description,
  media,
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
    {/* @ts-expect-error TODO: Refactor link component */}
    <StyledLink to={`/attractions/${title.toLowerCase().replace(/\s/g, "-")}`}>
      <Card variant="attraction">
        <MediaItem
          alt={title}
          media={media}
          sx={{
            height: "xs",
            flex: "0 0 auto",
            borderTopLeftRadius: "lg",
            borderTopRightRadius: "lg",
            width: "full",
            objectFit: "cover",
            backgroundColor: "blue.dark",
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

export default AttractionCard;

AttractionCard.defaultProps = {
  description: undefined,
  pricePoint1Price: undefined,
  pricePoint1Title: undefined,
  pricePoint1Unit: undefined,
  pricePoint2Price: undefined,
  pricePoint2Title: undefined,
  pricePoint2Unit: undefined,
  textAlign: "left",
};
