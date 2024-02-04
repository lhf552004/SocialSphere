import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Button,
  Stack,
  AspectRatio,
  useColorModeValue,
  VStack,
  HStack,
  Card,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import StoryCard from "./StoryCard";

export const TimelineComponent = () => {
  return (
    <VStack>
      <HStack>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
      </HStack>
    </VStack>
  );
};
