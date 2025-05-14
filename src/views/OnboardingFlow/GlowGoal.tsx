//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Text, 
  Button, 
  Box 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  IconPray, 
  IconCalendar, 
  IconHeart, 
  IconCompass, 
  IconBriefcase, 
  IconCircleCheck 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const GlowGoal: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const navigate = useNavigate();

  const goalOptions = [
    {
      name: 'Build Habit',
      icon: 'pray',
      description: 'Establish daily spiritual practices'
    },
    {
      name: 'Stay Consistent',
      icon: 'calendar',
      description: 'Maintain regular prayer and meditation'
    },
    {
      name: 'Prepare for Confession',
      icon: 'heart',
      description: 'Guide for spiritual cleansing'
    },
    {
      name: 'Just Explore',
      icon: 'compass',
      description: 'Discover your spiritual path'
    },
    {
      name: 'Sanctify My Work',
      icon: 'briefcase',
      description: 'Find meaning in daily work'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'pray': return <IconPray size={28} />;
      case 'calendar': return <IconCalendar size={28} />;
      case 'heart': return <IconHeart size={28} />;
      case 'compass': return <IconCompass size={28} />;
      case 'briefcase': return <IconBriefcase size={28} />;
      default: return null;
    }
  };

  const handleGoalSelect = (goalName: string) => {
    setSelectedGoal(goalName);
  };

  const handleNext = () => {
    navigate('/spiritual-rhythm');
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        h="100vh"
        bg="background"
        p={6}
        gap={8}
      >
        <Flex
          direction="column"
          gap={2}
        >
          <Text
            fontSize="2.5rem"
            fontWeight="bold"
            textAlign="center"
          >
            What's Your Glow Goal?
          </Text>
          <Text
            fontSize="1rem"
            opacity={0.8}
            textAlign="center"
          >
            Choose your primary focus for spiritual growth
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap={4}
          flex={1}
          overflowY="auto"
        >
          {goalOptions.map(goal => (
            <motion.div
              key={goal.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                w="full"
                h="auto"
                p={6}
                bg={selectedGoal === goal.name ? 'primary.100' : 'cardColor'}
                color={selectedGoal === goal.name ? 'dark' : 'white'}
                onClick={() => handleGoalSelect(goal.name)}
                position="relative"
                overflow="hidden"
              >
                <Flex
                  gap={4}
                  align="center"
                >
                  {renderIcon(goal.icon)}
                  <Flex
                    direction="column"
                    align="start"
                    gap={1}
                  >
                    <Text
                      fontSize="1.2rem"
                      fontWeight="600"
                    >
                      {goal.name}
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      opacity={0.8}
                    >
                      {goal.description}
                    </Text>
                  </Flex>
                </Flex>
                {selectedGoal === goal.name && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      position="absolute"
                      right={4}
                      top="50%"
                      transform="translateY(-50%)"
                    >
                      <IconCircleCheck size={24} />
                    </Box>
                  </motion.div>
                )}
              </Button>
            </motion.div>
          ))}
        </Flex>
        <Flex
          direction="column"
          gap={4}
        >
          <Button
            size="lg"
            isDisabled={!selectedGoal}
            onClick={handleNext}
          >
            Next
          </Button>
          <Flex
            justify="center"
            gap={2}
          >
            <Box
              w={2}
              h={2}
              borderRadius="full"
              bg="primary.100"
            />
            <Box
              w={2}
              h={2}
              borderRadius="full"
              bg="rgba(174, 255, 0, 0.3)"
            />
            <Box
              w={2}
              h={2}
              borderRadius="full"
              bg="rgba(174, 255, 0, 0.3)"
            />
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default GlowGoal;
