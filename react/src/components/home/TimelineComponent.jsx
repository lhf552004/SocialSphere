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
import MarketplaceCardComponent from "./MarketplaceCardComponent";

export const TimelineComponent = () => {
  const images = [
    "marketplace/playstationportal/pic1.jpg",
    "marketplace/playstationportal/pic2.jpg",
    "marketplace/playstationportal/pic3.jpg",
    "marketplace/playstationportal/pic4.jpg",
    "marketplace/playstationportal/pic5.jpg",
  ];
  return (
    <VStack>
      <HStack>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>
      </HStack>
      <VStack>
        <MarketplaceCardComponent images={images}></MarketplaceCardComponent>
      </VStack>
    </VStack>
  );
};
