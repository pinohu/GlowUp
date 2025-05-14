//@ts-nocheck

import React from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Box, 
  Button, 
  Text 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  IconSparkles, 
  IconCalendar, 
  IconPray 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const ReadyToGlow: React.FC = () => {
  const navigate = useNavigate();

  const initial = {
    opacity: 0,
    y: 20
  };

  const animate = {
    opacity: 1,
    y: 0
  };

  const transition = {
    duration: 0.5
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        h="100vh"
        bg="background"
        p={6}
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          flex={1}
          gap={8}
        >
          <motion.div
            style={{
              width: "100%",
              textAlign: "center"
            }}
            initial={initial}
            animate={animate}
            transition={transition}
          >
            <Flex
              direction="column"
              alignItems="center"
              gap={4}
            >
              <Box
                p={4}
                borderRadius="full"
                bg="primary.100"
              >
                <IconSparkles
                  size={40}
                  color={kStyleGlobal.colors.dark}
                />
              </Box>
              <Text
                fontSize="2.5rem"
                fontWeight="bold"
                bgGradient="linear(to-r, #AEFF00, #2E7F00)"
                bgClip="text"
              >
                You're Ready to Glow!
              </Text>
              <Text
                fontSize="1.2rem"
                color="white"
                opacity={0.8}
              >
                Your daily streak begins now
              </Text>
            </Flex>
          </motion.div>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
          >
            <Flex
              bg="cardColor"
              p={6}
              borderRadius="xl"
              direction="column"
              gap={4}
              w="100%"
              maxW="400px"
            >
              <Flex
                alignItems="center"
                gap={3}
              >
                <Box
                  bg="primary.100"
                  p={2}
                  borderRadius="lg"
                >
                  <IconCalendar
                    size={24}
                    color={kStyleGlobal.colors.dark}
                  />
                </Box>
                <Flex direction="column">
                  <Text
                    fontSize="1.2rem"
                    fontWeight="bold"
                    color="white"
                  >
                    Day 1
                  </Text>
                  <Text
                    fontSize="0.9rem"
                    color="white"
                    opacity={0.7}
                  >
                    Consistency is key to spiritual growth
                  </Text>
                </Flex>
              </Flex>
              <Flex
                bg="rgba(174, 255, 0, 0.1)"
                p={4}
                borderRadius="lg"
                alignItems="center"
                gap={3}
              >
                <IconPray
                  size={24}
                  color={kStyleGlobal.colors.primary[100]}
                />
                <Text
                  color="white"
                  fontSize="1rem"
                >
                  5-minute morning prayer
                </Text>
              </Flex>
            </Flex>
          </motion.div>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            style={{
              width: "100%"
            }}
          >
            <Button
              size="lg"
              w="100%"
              onClick={() => navigate("/today")}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg"
              }}
              transition="all 0.2s"
            >
              <Flex
                gap={2}
                alignItems="center"
              >
                <IconSparkles size={20} />
                <Text>Start My GlowUp</Text>
              </Flex>
            </Button>
          </motion.div>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default ReadyToGlow;
