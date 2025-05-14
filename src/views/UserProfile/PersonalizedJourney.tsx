//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Box, 
  Text, 
  Button, 
  Circle, 
  Progress, 
  Badge, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  FormControl, 
  FormLabel, 
  Select, 
  RadioGroup, 
  Stack, 
  Radio 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  IconArrowLeft, 
  IconPray, 
  IconHeart, 
  IconBriefcase, 
  IconSettings 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const PersonalizedJourney = () => {
  const [isAdjustModalOpen, setIsAdjustModalOpen] = useState(false);
  const [currentFocus] = useState("Prayer");
  const navigate = useNavigate();

  const milestones = [
    { "icon": "prayer", "title": "Daily Prayer", "completed": true },
    { "icon": "confession", "title": "Monthly Confession", "completed": true },
    { "icon": "work", "title": "Work Sanctification", "completed": false }
  ];

  const recommendations = [
    { "title": "Morning Prayer Routine", "description": "Start your day with 15 minutes of meditation", "difficulty": "Easy" },
    { "title": "Scripture Reading", "description": "Read one chapter from the Gospel daily", "difficulty": "Medium" },
    { "title": "Evening Examination", "description": "Reflect on your day's spiritual moments", "difficulty": "Medium" }
  ];

  const toggleAdjustModal = () => {
    setIsAdjustModalOpen(!isAdjustModalOpen);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goToNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        p={6}
        bg="background"
        minH="100vh"
        color="white"
      >
        <Flex
          justify="space-between"
          mb={8}
        >
          <Flex direction="column">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              textShadow="0 0 10px rgba(174, 255, 0, 0.3)"
            >
              Your Personalized Journey
            </Text>
            <Text
              fontSize="md"
              opacity={0.8}
            >
              Tailored spiritual growth just for you
            </Text>
          </Flex>
          <Button
            p={0}
            variant="ghost"
            onClick={goBack}
          >
            <IconArrowLeft size={24} />
          </Button>
        </Flex>

        <Box
          bg="cardColor"
          borderRadius="xl"
          p={6}
          mb={6}
        >
          <Flex
            align="center"
            justify="space-between"
            mb={4}
          >
            {milestones.map((milestone, index) => (
              <Flex
                key={index}
                direction="column"
                align="center"
                position="relative"
              >
                <motion.div
                  animate={{
                    scale: milestone.completed ? [1, 1.1, 1] : 1
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  <Circle
                    size="50px"
                    bg={milestone.completed ? "primary.100" : "whiteAlpha.200"}
                  >
                    {milestone.icon === "prayer" && <IconPray size={24} />}
                    {milestone.icon === "confession" && <IconHeart size={24} />}
                    {milestone.icon === "work" && <IconBriefcase size={24} />}
                  </Circle>
                </motion.div>
                <Text
                  fontSize="sm"
                  mt={2}
                >
                  {milestone.title}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>

        <Box
          bg="cardColor"
          borderRadius="xl"
          p={6}
          mb={6}
        >
          <Text
            fontSize="lg"
            fontWeight="semibold"
            mb={4}
          >
            Current Focus
          </Text>
          <Flex
            direction="column"
            gap={4}
          >
            <Progress
              value={65}
              colorScheme="primary"
              borderRadius="full"
            />
            <Button onClick={() => goToNavigation("/daily-routine")}>
              <Text>Continue Prayer Session</Text>
            </Button>
          </Flex>
        </Box>

        <Box mb={6}>
          <Flex
            justify="space-between"
            mb={4}
          >
            <Text
              fontSize="lg"
              fontWeight="semibold"
            >
              Recommended for You
            </Text>
          </Flex>
          <Flex
            gap={4}
            overflowX="auto"
            css={{
              "&::-webkit-scrollbar": {
                display: "none"
              }
            }}
          >
            {recommendations.map((item, index) => (
              <Box
                key={index}
                bg="cardColor"
                borderRadius="xl"
                p={4}
                minW="250px"
              >
                <Text
                  fontSize="md"
                  fontWeight="semibold"
                  mb={2}
                >
                  {item.title}
                </Text>
                <Text
                  fontSize="sm"
                  opacity={0.8}
                  mb={3}
                >
                  {item.description}
                </Text>
                <Badge colorScheme="primary">
                  {item.difficulty}
                </Badge>
              </Box>
            ))}
          </Flex>
        </Box>

        <Button
          variant="outline"
          onClick={toggleAdjustModal}
          leftIcon={<IconSettings size={20} />}
        >
          <Text>Adjust My Journey</Text>
        </Button>

        <Modal
          isOpen={isAdjustModalOpen}
          onClose={toggleAdjustModal}
        >
          <ModalOverlay />
          <ModalContent bg="cardColor">
            <ModalHeader>
              <Text
                fontSize="xl"
                fontWeight="bold"
              >
                Journey Settings
              </Text>
            </ModalHeader>
            <ModalBody>
              <Flex
                direction="column"
                gap={4}
              >
                <FormControl>
                  <FormLabel>
                    <Text>Spiritual Goals</Text>
                  </FormLabel>
                  <Select defaultValue={currentFocus}>
                    <option value="Prayer">Deepen Prayer Life</option>
                    <option value="Scripture">Scripture Study</option>
                    <option value="Service">Acts of Service</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text>Difficulty Level</Text>
                  </FormLabel>
                  <RadioGroup defaultValue="medium">
                    <Stack>
                      <Radio value="beginner">
                        <Text>Beginner</Text>
                      </Radio>
                      <Radio value="medium">
                        <Text>Intermediate</Text>
                      </Radio>
                      <Radio value="advanced">
                        <Text>Advanced</Text>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button onClick={toggleAdjustModal}>
                <Text>Save Changes</Text>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};

export default PersonalizedJourney;
