//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Button, 
  Box, 
  Text, 
  CircularProgress, 
  CircularProgressLabel, 
  Switch 
} from '@chakra-ui/react';
import { 
  IconChevronLeft, 
  IconPlayerPlay, 
  IconPlayerPause, 
  IconMusic 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const MentalPrayer = () => {
  const [isGuidedEnabled, setIsGuidedEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleEndPrayer = () => {
    navigate('/reflection-journal');
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        h="100vh"
        bg="background"
        p={6}
        gap={6}
      >
        <Flex
          justify="space-between"
          align="center"
        >
          <Button
            p={0}
            variant="ghost"
            onClick={handleGoBack}
          >
            <IconChevronLeft size={24} />
          </Button>
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            Mental Prayer
          </Text>
          <Box w={6} />
        </Flex>
        
        <Text
          textAlign="center"
          opacity={0.8}
        >
          Deepen your connection with God
        </Text>
        
        <Flex
          direction="column"
          align="center"
          flex={1}
          justify="center"
          gap={8}
        >
          <Box
            position="relative"
            w="300px"
            h="300px"
          >
            <CircularProgress
              value={75}
              size="300px"
              thickness="4px"
              color="primary.100"
            >
              <CircularProgressLabel>
                <Flex
                  direction="column"
                  align="center"
                >
                  <Text
                    fontSize="4xl"
                    fontWeight="bold"
                  >
                    12:45
                  </Text>
                  <Text opacity={0.6}>
                    remaining
                  </Text>
                </Flex>
              </CircularProgressLabel>
            </CircularProgress>
          </Box>
          
          <Flex
            gap={4}
            align="center"
          >
            <Button
              size="lg"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {!isPlaying ? (
                <IconPlayerPlay size={24} />
              ) : (
                <IconPlayerPause size={24} />
              )}
            </Button>
            <Button
              variant="ghost"
              onClick={() => setDuration(15)}
            >
              <Text>Reset</Text>
            </Button>
          </Flex>
          
          <Flex
            direction="column"
            w="full"
            gap={6}
          >
            <Flex
              justify="space-between"
              align="center"
            >
              <Text>Guided Meditation</Text>
              <Switch
                isChecked={isGuidedEnabled}
                onChange={() => setIsGuidedEnabled(!isGuidedEnabled)}
                colorScheme="primary"
              />
            </Flex>
            
            {isGuidedEnabled && (
              <Flex
                bg="cardColor"
                p={4}
                borderRadius="xl"
                align="center"
                justify="space-between"
              >
                <Flex
                  gap={3}
                  align="center"
                >
                  <IconMusic size={20} />
                  <Text>God's Love</Text>
                </Flex>
                <IconPlayerPlay size={20} />
              </Flex>
            )}
            
            <Box
              bg="cardColor"
              p={4}
              borderRadius="xl"
            >
              <Text
                fontSize="md"
                fontStyle="italic"
              >
                'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' - John 3:16
              </Text>
            </Box>
            
            <Flex
              direction="column"
              gap={3}
            >
              <Text
                fontWeight="semibold"
              >
                Reflection Prompts
              </Text>
              <Box
                bg="cardColor"
                p={4}
                borderRadius="xl"
              >
                <Text>How do you experience God's love in your daily life?</Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        
        <Button
          size="lg"
          onClick={handleEndPrayer}
        >
          <Text>End Prayer</Text>
        </Button>
      </Flex>
    </ChakraProvider>
  );
};

export default MentalPrayer;
