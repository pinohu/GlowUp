//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Box, 
  Button, 
  Text, 
  VStack, 
  IconButton, 
  Textarea 
} from '@chakra-ui/react';
import { 
  IconChevronLeft, 
  IconBook, 
  IconPlayerPlay, 
  IconChevronDown, 
  IconCalendarPlus, 
  IconBell 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const MassPreparation = () => {
  const navigate = useNavigate();
  const [isExpandedReading, setIsExpandedReading] = useState(false);

  const readings = [
    {
      "title": "First Reading",
      "text": "A reading from the Book of Isaiah...",
      "audio": "first-reading.mp3"
    },
    {
      "title": "Responsorial Psalm",
      "text": "The Lord is my shepherd...",
      "audio": "psalm.mp3"
    },
    {
      "title": "Second Reading",
      "text": "A reading from the Letter of Saint Paul...",
      "audio": "second-reading.mp3"
    },
    {
      "title": "Gospel",
      "text": "A reading from the holy Gospel according to Mark...",
      "audio": "gospel.mp3"
    }
  ];

  const reflectionQuestions = [
    "How does today's Gospel speak to your life?",
    "What is God calling you to do through these readings?", 
    "How can you apply these teachings in your daily life?"
  ];

  const handleReadingToggle = (index: number) => {
    setIsExpandedReading(!isExpandedReading);
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        bg="background"
        minH="100vh"
        p={6}
        gap={6}
      >
        <Flex
          align="center"
          gap={4}
        >
          <Button
            p={0}
            variant="ghost"
            onClick={() => navigate(-1)}
          >
            <IconChevronLeft size={24} />
          </Button>
          <Text
            fontSize="2xl"
            fontWeight="bold"
          >
            Mass Preparation
          </Text>
        </Flex>

        <Box
          bg="cardColor"
          p={6}
          borderRadius="xl"
        >
          <Flex
            direction="column"
            gap={4}
          >
            <Text
              fontSize="lg"
              fontWeight="semibold"
            >
              Next Mass
            </Text>
            <Flex
              justify="space-between"
              align="center"
            >
              <Flex
                direction="column"
                gap={2}
              >
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                >
                  Sunday, 10:30 AM
                </Text>
                <Text
                  color="gray.400"
                >
                  St. Mary's Cathedral
                </Text>
              </Flex>
              <Button
                leftIcon={<IconCalendarPlus size={20} />}
                variant="secondary"
              >
                Add to Calendar
              </Button>
            </Flex>
          </Flex>
        </Box>

        <Flex
          direction="column"
          gap={4}
        >
          <Text
            fontSize="lg"
            fontWeight="semibold"
          >
            Today's Readings
          </Text>
          <VStack gap={4}>
            {readings.map((reading, index) => (
              <Box
                key={index}
                bg="cardColor"
                p={4}
                borderRadius="lg"
              >
                <Flex
                  justify="space-between"
                  align="center"
                  onClick={() => handleReadingToggle(index)}
                >
                  <Flex
                    gap={3}
                    align="center"
                  >
                    <IconBook size={20} />
                    <Text
                      fontWeight="medium"
                    >
                      {reading.title}
                    </Text>
                  </Flex>
                  <Flex gap={2}>
                    <IconButton
                      size="sm"
                      variant="ghost"
                      icon={<IconPlayerPlay size={18} />}
                      aria-label="Play"
                    />
                    <IconChevronDown size={20} />
                  </Flex>
                </Flex>
              </Box>
            ))}
          </VStack>
        </Flex>

        <Box
          bg="cardColor"
          p={6}
          borderRadius="xl"
        >
          <Flex
            direction="column"
            gap={4}
          >
            <Text
              fontSize="lg"
              fontWeight="semibold"
            >
              Pre-Mass Prayer
            </Text>
            <Text
              color="gray.400"
            >
              Lord, prepare my heart to receive your Word and Sacrament...
            </Text>
            <Button
              leftIcon={<IconBell size={20} />}
              variant="secondary"
            >
              Set Reminder
            </Button>
          </Flex>
        </Box>

        <Box
          bg="cardColor"
          p={6}
          borderRadius="xl"
        >
          <Flex
            direction="column"
            gap={4}
          >
            <Text
              fontSize="lg"
              fontWeight="semibold"
            >
              Reflection Questions
            </Text>
            <VStack gap={4}>
              {reflectionQuestions.map((question, index) => (
                <Flex
                  key={index}
                  direction="column"
                  gap={2}
                >
                  <Text
                    color="gray.400"
                  >
                    {question}
                  </Text>
                  <Textarea
                    placeholder="Write your thoughts..."
                    rows={2}
                    bg="input.bg"
                    border="none"
                    _focus={{
                      border: "none",
                      ring: 1,
                      ringColor: "primary.100"
                    }}
                  />
                </Flex>
              ))}
            </VStack>
          </Flex>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default MassPreparation;
