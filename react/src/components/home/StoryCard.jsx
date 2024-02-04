import { Box, Image, Text, IconButton, VStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function StoryCard() {
  return (
    <VStack
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      align="center"
      spacing={0} // Remove the space between Image and Button+Text
    >
      <Image
        src="/profile.jpg" // Replace with the path to your image
        alt="Story image"
        width="100%"
        height="auto"
        style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} // Match the borderRadius of VStack
      />
      <Box position="relative" width="100%" p={2}>
        <VStack>
          <IconButton
            icon={<AddIcon />}
            isRound
            size="sm"
            colorScheme="blue"
            aria-label="Create story"
            position="absolute"
            transform=" translateY(-110%)"
            bottom={-3} // Adjust as needed to match your design
          />
          <Text
            fontSize="md"
            fontWeight="bold"
            // position="absolute"

            bottom={-1}
            color="blue.500"
          >
            Create story
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
}

export default StoryCard;
