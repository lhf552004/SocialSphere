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
import CreateStoryCard from "./CreateStoryCard";
import MarketplaceCardComponent from "./MarketplaceCardComponent";
import StoryCard from "./StoryCard";
import TellNewsCard from "./TellNewsCard";

export const TimelineComponent = () => {
  const stories = [
    {
      imageUrl: "sushi-roll1.jpg",
      avatarUrl: "Vanessa-Coish.png",
      name: "Vanessa Coish",
      title: "Fitness Enthusiast",
    },
    {
      imageUrl: "sushi-roll2.webp",
      avatarUrl: "Vanessa-Coish.png",
      name: "Vanessa Coish",
      title: "Fitness Enthusiast",
    },
    {
      imageUrl: "sushi-roll3.jpeg",
      avatarUrl: "Vanessa-Coish.png",
      name: "Vanessa Coish",
      title: "Fitness Enthusiast",
    },
  ];

  return (
    <VStack>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={5}>
        <CreateStoryCard></CreateStoryCard>
        {stories.map((item, index) => (
          <StoryCard imgUrl={item.imageUrl} key={item.name + index} {...item} />
        ))}
      </SimpleGrid>
      <TellNewsCard avatarUrl={"profile.jpg"} name={"Yawen"}></TellNewsCard>
      <VStack>
        <MarketplaceCardComponent></MarketplaceCardComponent>
        <MarketplaceCardComponent></MarketplaceCardComponent>
        <MarketplaceCardComponent></MarketplaceCardComponent>
        <MarketplaceCardComponent></MarketplaceCardComponent>
      </VStack>
    </VStack>
  );
};
