import React, { useEffect } from "react";
// CHAKRA
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";

const AnnounceModal = (props) => {
  const { gameState } = props;
  const { gameOver, gameWinner } = gameState;

  // CHAKRA MODAL
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (gameState.gameOver) {
      onOpen();
    }
  }, [gameState]);

  const AnnounceModalJSX = (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Testing</ModalBody>

        <ModalFooter>
          <Button variantColor="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

  return AnnounceModalJSX;
};

export default AnnounceModal;
