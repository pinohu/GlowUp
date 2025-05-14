//@ts-nocheck

import React from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Box, 
  Text, 
  Button, 
  IconButton, 
  Progress 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  IconPray, 
  IconBook, 
  IconBuildingChurch, 
  IconBook2,
  IconBriefcase,
  IconShare 
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { kStyleGlobal } from '../../theme';

const Today: React.FC = () => {
  const navigate = useNavigate();
  const currentDate = new Date();
  const hours = currentDate.getHours();
  
  const getGreeting = () => {
    if (hours >= 12 && hours < 17) return "Good afternoon";
    if (hours >= 17) return "Good evening";
    return "Good morning";
  };

  const userName = "Michael";
  const glowScore = 85;

  const dailyRoutines = {
    prayer: 75,
    reading: 50,
    reflection: 30
  };

  const quickActions = [
    { icon: "prayer", label: "Prayer Timer", route: "/prayer-timer" },
    { icon: "book", label: "Reflection Journal", route: "/reflection-journal" },
    { icon: "church", label: "Mass Preparation", route: "/mass-preparation" },
    { icon: "confessional", label: "Confession Guide", route: "/confession-guide" },
    { icon: "briefcase", label: "Work Sanctification", route: "/work-sanctification" }
  ];

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case "prayer": return <IconPray size={24} />;
      case "book": return <IconBook size={24} />;
      case "church": return <IconBuildingChurch size={24} />;
      case "confessional": return <IconBook2 size={24} />;
      case "briefcase": return <IconBriefcase size={24} />;
      default: return null;
    }
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex 
        direction="column" 
        bg="background"
        p={6}
        h="100%"
        gap={6}
      >
        <Flex justify="space-between" align="center">
          <Flex direction="column" gap={1}>
            <Text
              fontSize="lg"
              color="gray.400"
            >
              {`${getGreeting()}, ${userName}`}
            </Text>
            <Flex align="center" gap={2}>
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="white"
              >
                Glow Score:
              </Text>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              >
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color={kStyleGlobal.colors.primary[100]}
                >
                  {glowScore}
                </Text>
              </motion.div>
            </Flex>
          </Flex>
        </Flex>

        <Box 
          bg="cardColor"
          borderRadius="xl"
          p={6}
        >
          <Flex direction="column" gap={4}>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color="white"
            >
              Daily Spiritual Progress
            </Text>
            <Flex direction="column" gap={3}>
              {Object.entries(dailyRoutines).map(([key, value]) => (
                <Flex key={key} direction="column" gap={2}>
                  <Flex justify="space-between">
                    <Text color="gray.300">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Text>
                    <Text color={kStyleGlobal.colors.primary[100]}>
                      {`${value}%`}
                    </Text>
                  </Flex>
                  <Progress
                    value={value}
                    size="sm"
                    colorScheme="primary"
                    borderRadius="full"
                  />
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Box>

        <Box
          bg="cardColor"
          borderRadius="xl"
          p={6}
        >
          <Flex direction="column" gap={4}>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color="white"
            >
              Today's Reflection
            </Text>
            <Text
              color="gray.300"
              fontSize="md"
            >
              'The goal of the spiritual life is union with God, and the secret of this union is prayer.' - St. Augustine
            </Text>
            <Button
              variant="ghost"
              onClick={() => navigate("/reflection-journal")}
              rightIcon={<IconShare size={20} />}
            >
              Share Reflection
            </Button>
          </Flex>
        </Box>

        <Flex
          overflowX="auto"
          gap={4}
          css={{
            "&::-webkit-scrollbar": {
              display: "none"
            }
          }}
        >
          {quickActions.map((action) => (
            <Box
              key={action.label}
              bg="cardColor"
              p={4}
              borderRadius="xl"
              minW="120px"
              onClick={() => navigate(action.route)}
              cursor="pointer"
              _hover={{
                bg: "rgba(255,255,255,0.1)"
              }}
            >
              <Flex direction="column" align="center" gap={3}>
                <IconButton
                  variant="ghost"
                  color="primary.100"
                  icon={renderIcon(action.icon)}
                  aria-label={action.label}
                />
                <Text
                  fontSize="sm"
                  color="gray.300"
                  textAlign="center"
                >
                  {action.label}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default Today;
