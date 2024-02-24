import React, { useRef } from "react";
import { VStack, Avatar, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Box, Button } from "@chakra-ui/react";

function StoryCard({ imgUrl, avatarUrl, name, title, videoUrl }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <VStack
        maxW="150px"
        width="100%"
        height="300px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        align="center"
        spacing={0} // Remove the space between Image and Button+Text
        backgroundImage={`url(${imgUrl})`}
        backgroundSize="cover" // This ensures that the image fits without stretching
        backgroundRepeat="no-repeat" // This ensures the image does not repeat
        backgroundPosition="center"
        className="clickable"
        onClick={onOpen} // Add this line to trigger the modal on click
      >
        <Avatar
          position="relative"
          src={avatarUrl}
          alt="Profile avatar"
          left="-10%"
          transform="translateX(-50%) translateY(-50%)" // Center the button and move it up 50% of its height
          top="8"
        />
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <video onContextMenu={handleContextMenu} ref={videoRef} width="100%" controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Box textAlign="center" my={2}>
              <Button onClick={playVideo} mx={2}>
                Play
              </Button>
              <Button onClick={pauseVideo} mx={2}>
                Pause
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default StoryCard;
