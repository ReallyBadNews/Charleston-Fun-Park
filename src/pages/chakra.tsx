import React, { FC } from "react";
import {
  Box,
  Container,
  Stack,
  Button,
  SimpleGrid,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Chakra: FC = () => {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.200", "gray.900");
  const color = useColorModeValue("gray.900", "gray.200");
  const containerBg = useColorModeValue("gray.100", "gray.800");

  return (
    <Box bg={containerBg}>
      <Container maxW="7xl" py="12" centerContent>
        <SimpleGrid minChildWidth="248px" width="full" spacing="4">
          <Box p="4" borderRadius="lg" bg={bg} color={color}>
            This box style will change based on the color mode.
          </Box>
          <Box p="4" borderRadius="lg" bg={bg} color={color}>
            This box style will change based on the color mode.
          </Box>
          <Box p="4" borderRadius="lg" bg={bg} color={color}>
            This box style will change based on the color mode.
          </Box>
          <Box p="4" borderRadius="lg" bg={bg} color={color}>
            This box style will change based on the color mode.
          </Box>
          <Box p="4" borderRadius="lg" bg={bg} color={color}>
            This box style will change based on the color mode.
          </Box>
          <Box p="4" borderRadius="lg" bg={bg} color={color}>
            This box style will change based on the color mode.
          </Box>
          <Box p="4" borderRadius="lg" bg={bg} color={color}>
            This box style will change based on the color mode.
          </Box>
          <Box p="4" borderRadius="lg" bg={bg} color={color}>
            This box style will change based on the color mode.
          </Box>
        </SimpleGrid>
        <Stack direction="row" spacing="4" mt="4">
          <Popover>
            <PopoverTrigger>
              <Button>Trigger</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>
                Are you sure you want to have that milkshake?
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
            Toggle Mode
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Chakra;
