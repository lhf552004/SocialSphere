import {
  AtSignIcon,
  AttachmentIcon,
  ChatIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Image,
  HStack,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Flex,
  IconButton,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  AvatarGroup,
  Avatar,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";

function ImageGalleryCard({ images }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    onOpen();
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };
  // Assuming that images is an array of 5 image URLs
  const leftColumnImages = images.slice(0, 2); // First two images
  const rightColumnImages = images.slice(2); // Remaining three images

  return (
    <Box height="312px">
      <HStack spacing={2} align="start" height="100%">
        <Flex direction={"column"} height="100%">
          {leftColumnImages.map((img, index) => (
            <Box
              key={index}
              height="100px" // Set a fixed height for each thumbnail box
              overflow="hidden"
              position="relative"
              onClick={() => handleThumbnailClick(index)}
              cursor="pointer"
              display="flex"
              flex="1"
            >
              <Image
                src={img}
                alt={`Thumbnail ${index}`}
                fit="cover"
                align="center"
                w="100%"
                h="100%"
                transition="0.3s ease"
                _hover={{ transform: "scale(1.05)" }}
              />
            </Box>
          ))}
        </Flex>
        {images.length > 2 && (
          <VStack spacing={2} height="100%">
            {rightColumnImages.map((img, index) => (
              <Box
                key={index}
                height="100px" // Set a fixed height for each thumbnail box
                overflow="hidden"
                position="relative"
                onClick={() => handleThumbnailClick(2 + index)}
                cursor="pointer"
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index}`}
                  fit="cover"
                  align="center"
                  w="100%"
                  h="100%"
                  transition="0.3s ease"
                  _hover={{ transform: "scale(1.05)" }}
                />
              </Box>
            ))}
          </VStack>
        )}

        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <IconButton
                aria-label="Previous image"
                icon={<ChevronLeftIcon />}
                position="absolute"
                left={0}
                top="50%"
                transform="translateY(-50%)"
                zIndex="2"
                onClick={showPreviousImage}
              />
              <Image
                src={images[currentImageIndex]}
                alt="Product image"
                fit="cover"
                boxSize="100%"
              />
              <IconButton
                aria-label="Next image"
                icon={<ChevronRightIcon />}
                position="absolute"
                right={0}
                top="50%"
                transform="translateY(-50%)"
                zIndex="2"
                onClick={showNextImage}
              />
              {/* <Image
                src={selectedImg}
                alt="Selected image"
                maxW="100%"
                maxH="600px"
                objectFit="contain"
              /> */}
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
    </Box>
  );
}

export { ImageGalleryCard };

function SocialMediaCard() {
  // Mock data for the images and other details
  const images = [
    "marketplace/playstationportal/pic1.jpg",
    "marketplace/playstationportal/pic2.jpg",
    "marketplace/playstationportal/pic3.jpg",
    "marketplace/playstationportal/pic4.jpg",
    "marketplace/playstationportal/pic5.jpg",
  ];
  const itemDescription =
    "Never used. Order came with different colour than advertised...";
  const itemPriceLocation = "$180 - SAINT JOHN, NB";
  const itemTitle = "Coach Purse Electric Blue Mollie 25";

  return (
    <VStack
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      overflow="hidden"
    >
      {/* Header */}
      <Flex align="center" justify="space-between" p={4}>
        <HStack spacing={4}>
          <AvatarGroup size="sm">
            <Avatar src="/groups/rothesay-quispam-buy-and-sell.jpg" />{" "}
            {/* Replace with real group icon */}
            <Avatar src="/Andrew.jpg" /> {/* Replace with real user icon */}
          </AvatarGroup>
          <Text fontWeight="bold">Saint John Online Yardsale</Text>
        </HStack>
        <HStack spacing={2}>
          <IconButton aria-label="Options" icon={<HamburgerIcon />} size="sm" />
          <IconButton aria-label="Close" icon={<CloseIcon />} size="sm" />
        </HStack>
      </Flex>

      <Divider />

      {/* Body */}
      <VStack align="center" p={4}>
        <Text fontSize="sm">{itemDescription}</Text>
        <ImageGalleryCard images={images} />
        <Flex justify="space-between" align="center" pt={2}>
          <VStack align="start" spacing={0}>
            <Text fontSize="lg" fontWeight="bold">
              {itemPriceLocation}
            </Text>
            <Text fontSize="md">{itemTitle}</Text>
          </VStack>
          <Button rightIcon={<ChatIcon />} colorScheme="blue" size="sm">
            Message
          </Button>
        </Flex>
      </VStack>

      <Divider />

      <Flex p={4} justifyContent={"space-between"} width={"100%"}>
        <Avatar size="sm" src="/profile.jpg" />
        <Box
          ml={2}
          display="flex"
          flex={1}
          borderRadius={50}
          backgroundColor={"lightgray"}
        >
          <Flex align="center" flex={1}>
            <Input
              ml={2}
              flex={1}
              border={0}
              placeholder="Write a public comment..."
              size="sm"
            />
            <IconButton
              aria-label="Attach a photo"
              icon={<AttachmentIcon />}
              size="sm"
              variant="ghost"
            />
            <IconButton
              aria-label="Like"
              icon={<StarIcon />}
              size="sm"
              variant="ghost"
            />
            <IconButton
              aria-label="Comment"
              icon={<ChatIcon />}
              size="sm"
              variant="ghost"
            />
          </Flex>
        </Box>
      </Flex>
    </VStack>
  );
}

export default SocialMediaCard;
