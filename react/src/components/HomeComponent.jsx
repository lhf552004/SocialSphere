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
} from "@chakra-ui/react";
import { SearchIcon, LinkIcon, AtSignIcon } from "@chakra-ui/icons";
import Sidebar from "../layouts/Sidebar";

const HomeComponent = () => {
  const [url, setUrl] = useState("");
  const [backHalf, setBackHalf] = useState("");
  const toast = useToast();

  const handleShortenURL = () => {
    // Logic to shorten URL
    toast({
      title: "Link Shortened",
      description: "Your shortened link is ready!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <HStack>
      <VStack>
        <Sidebar></Sidebar>
      </VStack>
      <VStack></VStack>
      <VStack></VStack>
    </HStack>
  );
};

export default HomeComponent;
