import {
  Box,
  Flex,
  Text,
  IconButton,
  Link,
  Stack,
  Collapse,
  Image,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HStack,
  Badge,
  Avatar,
} from "@chakra-ui/react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  MdHomeFilled,
  MdMap,
  MdOutlineAreaChart,
  MdVideoLibrary,
} from "react-icons/md";
import {
  FiShoppingCart,
  FiUsers,
  FiBell,
  FiUser,
  FiMenu,
  FiMessageCircle,
} from "react-icons/fi";
import { FaBell, FaFacebookMessenger, FaGamepad, FaTh } from "react-icons/fa";

import logo from "../assets/logo.ico";
import { useSigninCheck } from "reactfire";
import LoginButton from "../components/auth/LoginButton";
import SignupButton from "../components/auth/SignupButton";
import LogoutButton from "../components/auth/LogoutButton";
import { SearchBar } from "./SearchBar";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { status, data: signInCheckResult } = useSigninCheck();
  const isSignedIn = signInCheckResult && signInCheckResult.signedIn;
  console.log(isSignedIn);
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <HStack>
            <RouterLink to="/">
              <Image
                src={logo} // Replace with the path to your image
                alt="Logo" // Provide an appropriate alt text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                // You can add more styling as required
              />
            </RouterLink>
            <SearchBar />
          </HStack>

          <Flex display={{ base: "none", md: "flex" }} ml={20} pl={20}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <IconButton
            icon={<FaTh />}
            isRound={true}
            aria-label="Menu"
            variant="ghost"
          />

          <IconButton
            icon={<FaFacebookMessenger />}
            isRound={true}
            aria-label="Chat"
            variant="ghost"
          />

          <Box position="relative">
            <IconButton
              icon={<FaBell />}
              isRound={true}
              aria-label="Notifications"
              variant="ghost"
            />
            <Badge
              colorScheme="red"
              variant="solid"
              rounded="full"
              size="sm"
              position="absolute"
              top="-1"
              right="-1"
              zIndex="tooltip"
            >
              1
            </Badge>
          </Box>

          <Avatar size="sm" src="profile.jpg" as={RouterLink} to="/profile" />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const activeLinkColor = useColorModeValue("green", "green");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={12}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <NavLink
                to={navItem.href}
                style={({ isActive }) => {
                  console.log(isActive);
                  return {
                    display: "block", // NavLink is inline by default
                    p: 2,
                    color: isActive ? activeLinkColor : linkColor,
                    textDecoration: "none", // You can remove this if you want text decoration on hover
                    _hover: {
                      textDecoration: "none",
                      color: linkHoverColor,
                    },
                  };
                }}
              >
                <Box
                  p={2}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.icon}
                </Box>
              </NavLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "",
    icon: <Icon as={MdHomeFilled} mt={2} boxSize={10} />,
  },
  {
    label: "Video",
    href: "video",
    icon: <Icon as={MdVideoLibrary} mt={2} boxSize={10} />,
  },
  {
    label: "Market",
    href: "market",
    icon: <Icon as={FiShoppingCart} mt={2} boxSize={10} />,
  },
  {
    label: "Groups",
    href: "group",
    icon: <Icon as={FiUsers} mt={2} boxSize={10} />,
  },
  {
    label: "Gaming",
    href: "gaming",
    icon: <Icon as={FaGamepad} mt={2} boxSize={10} />,
  },
];
