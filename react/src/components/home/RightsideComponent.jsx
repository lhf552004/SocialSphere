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
import ContactsCompoent from "./ContactsCompoent";
import FriendRequestsComponent from "./FriendRequestsComponent";
import ContactListComponent from "./ContactListComponent";
import FriendRequestCard from "./FriendRequestCard";

const RightsideComponent = () => {
  return (
    <VStack>
      <FriendRequestsComponent />
      <ContactListComponent></ContactListComponent>
    </VStack>
  );
};

export default RightsideComponent;
