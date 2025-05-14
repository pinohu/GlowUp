//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Box, 
  Button, 
  Text 
} from '@chakra-ui/react';
import { 
  IconChevronLeft, 
  IconChevronRight, 
  IconPray, 
  IconBook, 
  IconPencil 
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const SpiritualRhythm: React.FC = () => {
  const [selectedTime] = useState('morning');
  const navigate = useNavigate();

  const practices = [
    {
      icon: "pray",
      title: "Mental Prayer",
      description: "Quiet contemplation and dialogue with God"
    },
    {
      icon: "book",
      title: "Scripture Reading",
      description: "Read and reflect on sacred texts"
    },
    {
      icon: "write",
      title: "Spiritual Journaling",
      description: "Document your spiritual journey"
    }
  ];

  const renderPracticeIcon = (icon: string) => {
    switch(icon) {
      case "pray": return <IconPray size={24} color="dark" />;
      case "book": return <IconBook size={24} color="dark" />;
      case "write": return <IconPencil size={24} color="dark" />;
      default: return null;
    }
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex 
        direction="column" 
        h="100vh" 
        p={6} 
        bg="background"
      >
        <Flex 
          justify="space-between" 
          mb={8}
        >
          <Button 
            variant="ghost" 
            p={0} 
            onClick={() => navigate(-1)}
          >
            <IconChevronLeft size={24} />
          </Button>
          <Text 
            fontSize="24px" 
            fontWeight="bold"
          >
            Set Your Spiritual Rhythm
          </Text>
          <Box w={6} />
        </Flex>

        <Text 
          fontSize="16px" 
          textAlign="center" 
          mb="32px" 
          opacity={0.8}
        >
          Choose how many minutes you'd like to dedicate each day
        </Text>

        <Flex 
          justify="center" 
          align="center" 
          position="relative" 
          mb={8}
        >
          {/* Circular Slider would need a custom implementation */}
          <Text 
            fontSize="32px" 
            fontWeight="bold"
          >
            {selectedTime} min
          </Text>
        </Flex>

        <Text 
          fontSize="20px" 
          fontWeight="600" 
          mb="16px"
        >
          Suggested Practices
        </Text>

        <Flex 
          direction="column" 
          gap={4} 
          overflowY="auto" 
          flex={1}
        >
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Box 
                bg="cardColor" 
                p={4} 
                borderRadius="xl" 
                onClick={() => setIsModalOpen(true)}
              >
                <Flex 
                  gap={4} 
                  align="center"
                >
                  <Flex 
                    bg="primary.100" 
                    p={3} 
                    borderRadius="lg"
                  >
                    {renderPracticeIcon(practice.icon)}
                  </Flex>
                  <Flex 
                    direction="column" 
                    flex={1}
                  >
                    <Text 
                      fontWeight="600" 
                      mb="4px"
                    >
                      {practice.title}
                    </Text>
                    <Text 
                      fontSize="14px" 
                      opacity={0.8}
                    >
                      {practice.description}
                    </Text>
                  </Flex>
                  <IconChevronRight size={20} />
                </Flex>
              </Box>
            </motion.div>
          ))}
        </Flex>

        <Button 
          mt={6} 
          onClick={() => navigate("/invite-friends")}
        >
          Continue
        </Button>

        <Flex 
          justify="center" 
          mt={4} 
          gap={2}
        >
          {Array(5).fill(null).map((_, i) => (
            <Box
              key={i}
              w={2}
              h={2}
              borderRadius="full"
              bg={i === 2 ? "primary.100" : "cardColor"}
            />
          ))}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default SpiritualRhythm;
