import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
  } from 'react-icons/fi';

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>LOGO</DrawerHeader>

          <DrawerBody>
            
              <Button
                leftIcon={<FiHome />}
                fontSize='20px'
                background='white'
                color="#535760"
                _hover={{
                  background: "#3182ce",
                  color: "white",
                }}
                justifyContent='left'
                variant="solid"
                height='50px'
                width='95%'
                margin='0 0 20px 0'
              >
                Home
              </Button>
              
              <Button
                leftIcon={<FiTrendingUp />}
                fontSize='20px'
                color="#535760"
                background='white'
                _hover={{
                  background: "#3182ce",
                  color: "white",
                }}
                justifyContent='left'
                variant="solid"
                height='50px'
                width='95%'
                margin='0 0 20px 0'
              >
                Trending
              </Button>

              <Button
                leftIcon={<FiCompass />}
                fontSize='20px'
                color="#535760"
                background='white'
                _hover={{
                  background: "#3182ce",
                  color: "white",
                }}
                justifyContent='left'
                variant="solid"
                height='50px'
                width='95%'
                margin='0 0 20px 0'
              >
                Explore
              </Button>

              <Button
                leftIcon={<FiStar />}
                fontSize='20px'
                color="#535760"
                background='white'
                _hover={{
                  background: "#3182ce",
                  color: "white",
                }}
                justifyContent='left'
                variant="solid"
                height='50px'
                width='95%'
                margin='0 0 20px 0'
              >
                Favourites
              </Button>

              <Button
                leftIcon={<FiSettings />}
                fontSize='20px'
                color="#535760"
                background='white'
                _hover={{
                  background: "#3182ce",
                  color: "white",
                }}
                justifyContent='left'
                variant="solid"
                height='50px'
                width='95%'
                margin='0 0 20px 0'
              >
                Settings
              </Button>

          </DrawerBody>

         
        </DrawerContent>
      </Drawer>
    </>
  );
};
