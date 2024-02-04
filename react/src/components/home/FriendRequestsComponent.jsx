import React, { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  useToast,
  Image,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon, LinkIcon, AtSignIcon } from "@chakra-ui/icons";
import Sidebar from "../../layouts/Sidebar";
import { TimelineComponent } from "./TimelineComponent";
import FriendRequestCard from "./FriendRequestCard";
import { NavLink } from "react-router-dom";

const FriendRequestsComponent = () => {
  return (
    <VStack spacing={4}>
      <Box width="100%">
        <Flex p={4} justifyContent={"space-between"}>
          <Text fontSize="lg" fontWeight="bold">
            Friend Request
          </Text>
          <NavLink>See all</NavLink>
        </Flex>
      </Box>

      <FriendRequestCard></FriendRequestCard>
    </VStack>
  );
};

export default FriendRequestsComponent;
