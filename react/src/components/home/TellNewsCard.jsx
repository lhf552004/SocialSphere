import React from "react";
// import { Box, Image, Text, Avatar, Flex } from "@chakra-ui/react";

import {
  Box,
  Image,
  Text,
  IconButton,
  VStack,
  Avatar,
  HStack,
  Divider,
  Button,
  Flex,
  Input,
  Icon,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FaVideo, FaImage, FaSmile } from "react-icons/fa";
function TellNewsCard({ avatarUrl, name }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      bg="white"
      boxShadow="sm"
      maxWidth="md"
      mx="auto"
    >
      <HStack spacing={4}>
        <Avatar size="sm" name="Yawen" src={avatarUrl} />
        <Input
          placeholder={`What's on your mind, ${name}?`}
          variant="filled"
          flex="1"
        />
      </HStack>
      <HStack spacing={4} mt={4}>
        <Button
          leftIcon={<Icon as={FaVideo} color="red.500" />}
          variant="outline"
          size="sm"
        >
          Live video
        </Button>
        <Button
          leftIcon={<Icon as={FaImage} color="green.500" />}
          variant="outline"
          size="sm"
        >
          Photo/video
        </Button>
        <Button
          leftIcon={<Icon as={FaSmile} color="yellow.500" />}
          variant="outline"
          size="sm"
        >
          Feeling/activity
        </Button>
      </HStack>
    </Box>
  );
}

export default TellNewsCard;
