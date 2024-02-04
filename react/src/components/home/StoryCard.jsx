import { Box, Image, Text, Button, VStack, Center } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function StoryCard() {
  return (
    <VStack
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      spacing={4}
      align="center"
    >
      <Image
        src="/profile.jpg" // Replace with the path to your image
        alt="Story image"
        boxSize="200px"
        objectFit="cover"
      />
      <Center position="relative" bottom="2rem">
        <Button size="lg" colorScheme="blue" leftIcon={<AddIcon />}>
          Create story
        </Button>
      </Center>
    </VStack>
  );
}

export default StoryCard;
