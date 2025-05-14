//@ts-nocheck

import React from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Button, 
  Text, 
  Image 
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import { kStyleGlobal } from '../../theme';

const Welcome = () => {
  const navigate = useNavigate();

  const onboardingData = [{
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80",
    title: "Welcome to GlowUp",
    subtitle: "The joy that glows in my face and heart when I am close to God.",
    description: "Your daily Catholic companion for building holy habits and living with purpose."
  }];

  const goToNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        h="100vh"
        bg="background"
        position="relative"
      >
        <Button
          position="absolute"
          right={4}
          top={4}
          variant="ghost"
          zIndex={2}
          onClick={() => goToNavigation("/glow-goal")}
        >
          <Text>Skip</Text>
        </Button>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
        >
          {onboardingData.map((item, index) => (
            <SwiperSlide key={index}>
              <Flex
                direction="column"
                align="center"
                justify="space-between"
                h="100vh"
                p={6}
                pt={16}
                pb={12}
              >
                <Image
                  src={item.image}
                  width="180px"
                  height="180px"
                  objectFit="cover"
                  borderRadius="30px"
                  mb="2rem"
                />
                <Flex
                  direction="column"
                  align="center"
                  textAlign="center"
                  gap={4}
                  maxW="320px"
                >
                  <Text
                    fontSize="2.5rem"
                    fontWeight="bold"
                    color="white"
                  >
                    {item.title}
                  </Text>
                  <Text
                    fontSize="1.1rem"
                    color="rgba(255,255,255,0.8)"
                    lineHeight="1.6"
                  >
                    {item.subtitle}
                  </Text>
                  <Text
                    fontSize="1rem"
                    color="rgba(255,255,255,0.6)"
                    mt="1rem"
                  >
                    {item.description}
                  </Text>
                </Flex>
                <Flex
                  direction="column"
                  gap={4}
                  w="100%"
                  maxW="320px"
                >
                  <Button
                    size="lg"
                    w="100%"
                    onClick={() => goToNavigation("/glow-goal")}
                  >
                    Let's Begin
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => goToNavigation("/login")}
                  >
                    Already have an account? Sign in
                  </Button>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </ChakraProvider>
  );
};

export default Welcome;
