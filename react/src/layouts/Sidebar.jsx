import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  VStack,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSigninCheck } from "reactfire";

function Sidebar({ children }) {
  const { status, data: signInCheckResult } = useSigninCheck();
  const isSignedIn = signInCheckResult && signInCheckResult.signedIn;
  const [showMore, setShowMore] = useState(false);

  return (
    <VStack
      as="nav"
      bg="white"
      padding={5}
      width="250px"
      spacing={4}
      alignItems="start"
    >
      <Box>
        <Link
          as={RouterLink}
          color="gray"
          fontSize="xl"
          fontWeight="bold"
          _hover={{ textDecoration: "underline" }}
        >
          Yawen Li
        </Link>
      </Box>
      <Box>
        <Link
          as={RouterLink}
          color="gray"
          fontSize="xl"
          fontWeight="bold"
          _hover={{ textDecoration: "underline" }}
        >
          Friends
        </Link>
      </Box>
      <Box>
        <Link
          as={RouterLink}
          color="gray"
          fontSize="xl"
          fontWeight="bold"
          _hover={{ textDecoration: "underline" }}
        >
          Market
        </Link>
      </Box>
      <Box>
        <Link
          as={RouterLink}
          color="gray"
          fontSize="xl"
          fontWeight="bold"
          _hover={{ textDecoration: "underline" }}
        >
          Groups
        </Link>
      </Box>
      <Box>
        <Link
          as={RouterLink}
          color="gray"
          fontSize="xl"
          fontWeight="bold"
          _hover={{ textDecoration: "underline" }}
        >
          Ads Manager
        </Link>
      </Box>
      <Box>
        <Link
          as={RouterLink}
          color="gray"
          fontSize="xl"
          fontWeight="bold"
          _hover={{ textDecoration: "underline" }}
        >
          Memories
        </Link>
      </Box>
      {showMore ? (
        <>
          <Box>
            <Link
              as={RouterLink}
              color="gray"
              fontSize="xl"
              fontWeight="bold"
              _hover={{ textDecoration: "underline" }}
            >
              Groups
            </Link>
          </Box>
          <Box>
            <Link
              as={RouterLink}
              color="gray"
              fontSize="xl"
              fontWeight="bold"
              _hover={{ textDecoration: "underline" }}
            >
              Ads Manager
            </Link>
          </Box>
          <Box>
            <Link
              as={RouterLink}
              color="gray"
              fontSize="xl"
              fontWeight="bold"
              _hover={{ textDecoration: "underline" }}
            >
              Memories
            </Link>
          </Box>
          <Button onClick={() => setShowMore(false)}>Show Less</Button>
        </>
      ) : (
        <Button onClick={() => setShowMore(true)}>Show more</Button>
      )}
    </VStack>
  );
}

export default Sidebar;
