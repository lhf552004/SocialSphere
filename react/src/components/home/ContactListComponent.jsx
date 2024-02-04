import {
  List,
  ListItem,
  Avatar,
  Text,
  Box,
  VStack,
  HStack,
  Divider,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon, SettingsIcon } from "@chakra-ui/icons";

function ContactListComponent() {
  const contacts = [
    { name: "Dan Fu", avatarUrl: "Dan.jpg" },
    { name: "Jacee Gehring", avatarUrl: "Jacee.jpg" },
    { name: "Noel Gutierrez", avatarUrl: "Noel.jpg" },
    { name: "Andrew Kim", avatarUrl: "Andrew.jpg" },
    { name: "Crystal", avatarUrl: "Crystal.jpg" },
  ];

  return (
    <Box>
      <VStack divider={<Divider />} spacing={4}>
        <Box width="100%">
          <Text fontSize="lg" fontWeight="bold" p={4}>
            Contacts
          </Text>
          <HStack p={4}>
            <Input placeholder="Search" />
            <IconButton aria-label="Search database" icon={<SearchIcon />} />
            <IconButton aria-label="Settings" icon={<SettingsIcon />} />
          </HStack>
        </Box>

        <List spacing={3} width="100%">
          {contacts.map((contact, index) => (
            <ListItem key={index} p={2}>
              <HStack>
                <Avatar size="sm" name={contact.name} src={contact.avatarUrl} />
                <Text fontWeight="medium">{contact.name}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
}

export default ContactListComponent;
