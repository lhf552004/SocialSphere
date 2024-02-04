import {
  Box,
  Image,
  Text,
  Button,
  HStack,
  VStack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

function FriendRequestCard() {
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <HStack
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      borderColor={borderColor}
      alignItems="center"
      spacing={4}
      divider={<StackDivider borderColor={borderColor} />}
    >
      <Image
        borderRadius="full"
        boxSize="50px"
        src="Eli.jpg" // Replace with your image path
        alt="Profile image"
      />
      <VStack alignItems="start" spacing={1}>
        <Text fontWeight="bold">Eli Neff</Text>
        <Text fontSize="sm">1 mutual friend</Text>
        <Text fontSize="xs" color="gray.500">
          4d
        </Text>
      </VStack>
      <HStack spacing={2}>
        <Button colorScheme="blue" size="sm">
          Confirm
        </Button>
        <Button variant="outline" size="sm">
          Delete
        </Button>
      </HStack>
    </HStack>
  );
}

export default FriendRequestCard;
