import React from "react";
// import { Box, Image, Text, Avatar, Flex } from "@chakra-ui/react";

import { Box, Image, Text, IconButton, VStack, Avatar } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function StoryCard({ imgUrl, avatarUrl, name, title }) {
  return (
    <VStack
      maxW="150px"
      width="100%"
      height="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      align="center"
      spacing={0} // Remove the space between Image and Button+Text
      backgroundImage={`url(${imgUrl})`}
      backgroundSize="cover" // This ensures that the image fits without stretching
      backgroundRepeat="no-repeat" // This ensures the image does not repeat
      backgroundPosition="center"
      className="clickable"
    >
      <Avatar
        position="relative"
        src={avatarUrl}
        alt="Profile avatar"
        left="-10%"
        transform="translateX(-50%) translateY(-50%)" // Center the button and move it up 50% of its height
        top="8"
      />
    </VStack>
  );
}

export default StoryCard;
