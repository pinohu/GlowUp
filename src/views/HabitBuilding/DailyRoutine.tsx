//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Box, 
  Button, 
  Text, 
  CircularProgress, 
  CircularProgressLabel, 
  Checkbox, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  IconChevronLeft, 
  IconClock, 
  IconHourglass, 
  IconPlus 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';

const DailyRoutine = () => {
  const currentDate = new Date();
  const [routines] = useState([
    {
      "name": "Morning Prayer",
      "time": "6:00 AM",
      "completed": true,
      "duration": "15 min"
    },
    {
      "name": "Mass",
      "time": "7:30 AM",
      "completed": true,
      "duration": "45 min"
    },
    {
      "name": "Work Sanctification",
      "time": "9:00 AM",
      "completed": false,
      "duration": "30 min"
    },
    {
      "name": "Mental Prayer",
      "time": "12:00 PM",
      "completed": false,
      "duration": "20 min"
    }
  ]);
  const progress = 50;
  const [isQuickActionOpen, setIsQuickActionOpen] = useState(false);

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        h="100vh"
        bg="background"
        p={6}
      >
        <Flex
          justify="space-between"
          align="center"
          mb={6}
        >
          <Button
            variant="ghost"
            p={0}
            onClick={() => window.history.back()}
          >
            <IconChevronLeft size={24} />
          </Button>
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            Daily Routine
          </Text>
          <Box w={6} />
        </Flex>
        <Text
          fontSize="md"
          mb={6}
          opacity={0.8}
        >
          {currentDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric"
          })}
        </Text>
        <Flex
          align="center"
          justify="center"
          mb={8}
        >
          <CircularProgress
            value={progress}
            size="120px"
            color="primary.100"
          >
            <CircularProgressLabel>
              <Text
                fontSize="xl"
                fontWeight="bold"
              >
                {`${progress}%`}
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Text
          fontSize="lg"
          textAlign="center"
          mb={8}
          color="primary.100"
        >
          Great start! Keep glowing!
        </Text>
        <Flex
          direction="column"
          gap={4}
          flex={1}
          overflowY="auto"
        >
          {routines.map((routine, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Flex
                bg="cardColor"
                p={4}
                borderRadius="xl"
                justify="space-between"
                align="center"
              >
                <Flex
                  direction="column"
                  gap={2}
                >
                  <Text
                    fontSize="md"
                    fontWeight="semibold"
                  >
                    {routine.name}
                  </Text>
                  <Flex gap={4}>
                    <Flex
                      align="center"
                      gap={1}
                    >
                      <IconClock size={16} />
                      <Text
                        fontSize="sm"
                        opacity={0.8}
                      >
                        {routine.time}
                      </Text>
                    </Flex>
                    <Flex
                      align="center"
                      gap={1}
                    >
                      <IconHourglass size={16} />
                      <Text
                        fontSize="sm"
                        opacity={0.8}
                      >
                        {routine.duration}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Checkbox
                  isChecked={routine.completed}
                  colorScheme="primary"
                  size="lg"
                />
              </Flex>
            </motion.div>
          ))}
        </Flex>
        <Button
          position="fixed"
          bottom={24}
          right={6}
          w={12}
          h={12}
          borderRadius="full"
          onClick={() => setIsQuickActionOpen(true)}
        >
          <IconPlus size={24} />
        </Button>
        <Modal
          isOpen={isQuickActionOpen}
          onClose={() => setIsQuickActionOpen(false)}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text
                fontSize="lg"
                fontWeight="bold"
              >
                Add Activity
              </Text>
            </ModalHeader>
            <ModalBody>
              <Flex
                direction="column"
                gap={4}
              >
                {["Prayer", "Mass", "Meditation", "Reading"].map(activity => (
                  <Button
                    key={activity}
                    variant="ghost"
                    justifyContent="start"
                    onClick={() => setIsQuickActionOpen(false)}
                  >
                    <Text>{activity}</Text>
                  </Button>
                ))}
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};

export default DailyRoutine;
