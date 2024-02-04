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
import ContactListComponent from "./ContactListComponent";

const ContactsCompoent = () => {
  return (
    <VStack>
      <Text>Contacts</Text>
      <ContactListComponent></ContactListComponent>
    </VStack>
  );
};

export default ContactsCompoent;
