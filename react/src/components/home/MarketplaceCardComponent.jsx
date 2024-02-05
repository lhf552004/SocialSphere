import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
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

export default ImageGalleryCard;
