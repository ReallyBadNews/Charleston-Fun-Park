import React, { FC, ReactText } from "react";
import CSS from "csstype";
// import { Box, Card, Divider, Heading, Text, jsx } from "theme-ui";
import { Heading, Box, Divider, Text, Stack } from "@chakra-ui/react";
import StyledLink from "@/components/Link.styled";
import { MediaItem } from "@/components/MediaItem";
import { MediaObject } from "@/src/types";
import { MotionBox } from "../MotionBox";

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
  <MotionBox whileHover={{ y: -8 }}>
    <StyledLink to={`/attractions/${title.toLowerCase().replace(/\s/g, "-")}`}>
      <Stack
        spacing="0"
        bg="white.light"
        borderRadius="lg"
        layerStyle="dropShadow"
        color="black.dark"
        height="full"
      >
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
        <Stack
          spacing="4"
          direction="column"
          justifyContent="space-between"
          padding="4"
          pb="6"
          height="full"
        >
          <Stack spacing="2">
            <Heading
              as="h5"
              lineHeight="none"
              textAlign={textAlign}
              fontFamily="body"
              fontWeight="black"
            >
              {title}
            </Heading>
            {description && (
              <Text
                fontSize="1"
                lineHeight="shorter"
                fontWeight="normal"
                color="black"
              >
                {description}
              </Text>
            )}
          </Stack>
          {pricePoint1Price && (
            <Box>
              <Divider mb="3" />
              <Stack spacing="4">
                <Box
                  pr="3"
                  sx={{
                    borderRight: pricePoint2Price && "1px solid",
                    borderRightColor: "black.border",
                  }}
                >
                  <Text variant="text.StackPricing">{pricePoint1Title}</Text>
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
              </Stack>
            </Box>
          )}
        </Stack>
      </Stack>
    </StyledLink>
  </MotionBox>
);

export default AttractionCard;

AttractionCard.defaultProps = {
  textAlign: "left",
};
