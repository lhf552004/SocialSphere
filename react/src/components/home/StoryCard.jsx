import { Box, Image, Text, IconButton, VStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function StoryCard() {
  return (
    <VStack
      maxW="150px"
      height="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      align="center"
      spacing={0} // Remove the space between Image and Button+Text
      className="clickable"
    >
      <Image
        src="/profile.jpg" // Replace with the path to your image
        alt="Story image"
        width="100%"
        height="70%"
        boxSize="100%" // This will make the image responsive to the container's size
        objectFit="cover" // This will cover the area without distorting the aspect ratio
        style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} // Match the borderRadius of VStack
      />
      <Box position="relative" width="100%" pt={2} pb={6} textAlign="center">
        <IconButton
          icon={<AddIcon />}
          isRound
          size="sm"
          borderColor="white"
          borderWidth="4px"
          colorScheme="blue"
          aria-label="Create story"
          position="absolute"
          left="50%"
          transform="translateX(-50%) translateY(-50%)" // Center the button and move it up 50% of its height
          top="0" // Align the button top with the Box container
        />
        <Text mt={2} fontSize="md" fontWeight="bold" color="blue.500">
          Create story
        </Text>
      </Box>
    </VStack>
  );
}

export default StoryCard;
