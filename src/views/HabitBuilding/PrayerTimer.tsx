//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Box, 
  Button, 
  Text, 
  CircularProgress, 
  Switch, 
  Select, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  IconChevronLeft, 
  IconSettings, 
  IconRotateClockwise2, 
  IconPlayerPlay, 
  IconPlayerPause, 
  IconPlayerStop, 
  IconChevronRight, 
  IconVolume2, 
  IconHistory 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const PrayerTimer: React.FC = () => {
  const [isTimerRunning] = useState(false);
  const [elapsedTime] = useState(0);
  const [totalDuration] = useState(900);
  const [currentPrayerFocus] = useState("Peace and gratitude");
  const [isAmbientSoundEnabled, setIsAmbientSoundEnabled] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [, setIsHistoryOpen] = useState(false);

  const navigate = useNavigate();

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
            variant="ghost"
            p={0}
            onClick={() => navigate("/today")}
          >
            <IconChevronLeft size={24} />
          </Button>
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            Prayer Timer
          </Text>
          <Button
            variant="ghost"
            p={0}
            onClick={() => setIsSettingsOpen(true)}
          >
            <IconSettings size={24} />
          </Button>
        </Flex>
        <Box
          position="relative"
          w="full"
          maxW="400px"
          mx="auto"
          aspectRatio={1}
        >
          <CircularProgress
            value={(elapsedTime / totalDuration) * 100}
            size="full"
            thickness="4px"
            color="primary.100"
            trackColor="cardColor"
          >
            <Flex
              position="absolute"
              direction="column"
              align="center"
              justify="center"
              w="full"
              h="full"
            >
              <Text
                fontSize="4xl"
                fontWeight="bold"
                mb={2}
              >
                05:23
              </Text>
              <Text
                fontSize="lg"
                opacity={0.7}
              >
                15:00
              </Text>
            </Flex>
          </CircularProgress>
        </Box>
        <Flex
          gap={4}
          justify="center"
          align="center"
        >
          <Button
            variant="secondary"
            w="50px"
            h="50px"
            borderRadius="full"
            p={0}
          >
            <IconRotateClockwise2 size={24} />
          </Button>
          <Button
            variant="primary"
            w="70px"
            h="70px"
            borderRadius="full"
            p={0}
          >
            {!isTimerRunning ? (
              <IconPlayerPlay size={32} />
            ) : (
              <IconPlayerPause size={32} />
            )}
          </Button>
          <Button
            variant="secondary"
            w="50px"
            h="50px"
            borderRadius="full"
            p={0}
          >
            <IconPlayerStop size={24} />
          </Button>
        </Flex>
        <Box
          bg="cardColor"
          p={4}
          borderRadius="xl"
        >
          <Flex
            justify="space-between"
            mb={3}
          >
            <Text fontWeight="semibold">
              Prayer Focus
            </Text>
            <IconChevronRight size={20} />
          </Flex>
          <Text>{currentPrayerFocus}</Text>
        </Box>
        <Box
          bg="cardColor"
          p={4}
          borderRadius="xl"
        >
          <Flex
            justify="space-between"
            align="center"
          >
            <Text>Ambient Sound</Text>
            <Switch
              colorScheme="primary"
              isChecked={isAmbientSoundEnabled}
              onChange={() => setIsAmbientSoundEnabled(!isAmbientSoundEnabled)}
            />
          </Flex>
          {isAmbientSoundEnabled && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0
              }}
              animate={{
                height: "auto",
                opacity: 1
              }}
              transition={{
                duration: 0.3
              }}
            >
              <Flex
                direction="column"
                mt={4}
                gap={4}
              >
                <Select bg="background">
                  <option>Nature Sounds</option>
                  <option>Gregorian Chants</option>
                  <option>Soft Piano</option>
                </Select>
                <Flex
                  align="center"
                  gap={3}
                >
                  <IconVolume2 size={20} />
                  <input 
                    type="range"
                    min={0}
                    max={100}
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                  />
                </Flex>
              </Flex>
            </motion.div>
          )}
        </Box>
        <Button
          variant="ghost"
          onClick={() => setIsHistoryOpen(true)}
        >
          <Flex
            align="center"
            gap={2}
          >
            <IconHistory size={20} />
            <Text>View Session History</Text>
          </Flex>
        </Button>
        <Modal
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
        >
          <ModalOverlay />
          <ModalContent bg="background">
            <ModalHeader>
              <Text>Quick Settings</Text>
            </ModalHeader>
            <ModalBody>
              <Flex
                direction="column"
                gap={4}
              >
                <Flex
                  direction="column"
                  gap={2}
                >
                  <Text>Session Duration</Text>
                  <Select>
                    <option>15 minutes</option>
                    <option>30 minutes</option>
                    <option>45 minutes</option>
                  </Select>
                </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};

export default PrayerTimer;
