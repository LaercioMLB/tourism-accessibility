import { Flex, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Flex>
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="96">
        Tourism
        <Text as="span" ml="1" color="orange.500">
          Accessibility
        </Text>
      </Text>
    </Flex>
  );
}
