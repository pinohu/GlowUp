//@ts-nocheck

import React from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Box, 
  Button, 
  Text, 
  Progress, 
  Grid 
} from '@chakra-ui/react';
import { 
  IconChevronLeft, 
  IconUsers, 
  IconPray, 
  IconBook, 
  IconHeart, 
  IconCross, 
  IconBookmarks,
  IconPlus 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const Challenges: React.FC = () => {
  const navigate = useNavigate();

  const activeChallenge = [
    {
      "name": "30 Days of Prayer",
      "progress": 60,
      "participants": 245,
      "daysLeft": 12
    },
    {
      "name": "Bible Reading Plan",
      "progress": 45,
      "participants": 189,
      "daysLeft": 15
    },
    {
      "name": "Daily Rosary",
      "progress": 75,
      "participants": 156,
      "daysLeft": 8
    }
  ];

  const categories = [
    {
      "name": "Prayer",
      "icon": "pray",
      "count": 12
    },
    {
      "name": "Scripture Reading",
      "icon": "book",
      "count": 8
    },
    {
      "name": "Acts of Kindness",
      "icon": "heart",
      "count": 15
    },
    {
      "name": "Sacraments",
      "icon": "cross",
      "count": 6
    },
    {
      "name": "Spiritual Reading",
      "icon": "bookmarks",
      "count": 10
    }
  ];

  const featuredChallenge = {
    "name": "Advent Prayer Challenge",
    "description": "Join our community in daily prayer and reflection during the Advent season",
    "startDate": "Dec 1, 2023"
  };

  const renderCategoryIcon = (icon: string) => {
    switch(icon) {
      case "pray": return <IconPray size={24} />;
      case "book": return <IconBook size={24} />;
      case "heart": return <IconHeart size={24} />;
      case "cross": return <IconCross size={24} />;
      case "bookmarks": return <IconBookmarks size={24} />;
      default: return null;
    }
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        h="100vh"
        bg="background"
        p={4}
      >
        <Flex
          justify="space-between"
          align="center"
          mb={6}
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
              fontSize="24px"
              fontWeight="bold"
            >
              Community Challenges
            </Text>
          </Flex>
        </Flex>

        <Text
          fontSize="18px"
          fontWeight="600"
          mb={3}
        >
          Active Challenges
        </Text>

        <Flex
          overflowX="auto"
          gap={4}
          mb={8}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none"
            }
          }}
        >
          {activeChallenge.map((challenge, index) => (
            <Box
              key={index}
              bg="cardColor"
              p={4}
              borderRadius="xl"
              minW="280px"
              onClick={() => navigate("/challenge-details")}
            >
              <Flex
                direction="column"
                gap={3}
              >
                <Text
                  fontSize="16px"
                  fontWeight="600"
                >
                  {challenge.name}
                </Text>
                <Progress
                  value={challenge.progress}
                  colorScheme="primary"
                  borderRadius="full"
                />
                <Flex justify="space-between">
                  <Flex
                    align="center"
                    gap={2}
                  >
                    <IconUsers size={18} />
                    <Text>{challenge.participants}</Text>
                  </Flex>
                  <Text color="gray.400">
                    {challenge.daysLeft} days left
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Flex>

        <Text
          fontSize="18px"
          fontWeight="600"
          mb={3}
        >
          Categories
        </Text>

        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={4}
          mb={8}
        >
          {categories.map((category, index) => (
            <Box
              key={index}
              bg="cardColor"
              p={4}
              borderRadius="xl"
              onClick={() => navigate("/category-challenges")}
            >
              <Flex
                align="center"
                gap={3}
              >
                {renderCategoryIcon(category.icon)}
                <Flex direction="column">
                  <Text
                    fontSize="14px"
                    fontWeight="500"
                  >
                    {category.name}
                  </Text>
                  <Text
                    fontSize="12px"
                    color="gray.400"
                  >
                    {category.count} challenges
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Grid>

        <Box
          bg="primary.100"
          p={6}
          borderRadius="xl"
          mb={6}
        >
          <Flex
            direction="column"
            gap={3}
          >
            <Text
              fontSize="12px"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Featured Challenge
            </Text>
            <Text
              fontSize="20px"
              fontWeight="bold"
            >
              {featuredChallenge.name}
            </Text>
            <Text
              fontSize="14px"
              opacity={0.8}
            >
              {featuredChallenge.description}
            </Text>
            <Flex
              justify="space-between"
              align="center"
              mt={2}
            >
              <Text fontSize="14px">
                Starts {featuredChallenge.startDate}
              </Text>
              <Button
                bg="dark"
                onClick={() => navigate("/join-challenge")}
              >
                Join Challenge
              </Button>
            </Flex>
          </Flex>
        </Box>

        <Button
          position="fixed"
          bottom={24}
          right={4}
          borderRadius="full"
          w={12}
          h={12}
          onClick={() => navigate("/create-challenge")}
        >
          <IconPlus size={24} />
        </Button>
      </Flex>
    </ChakraProvider>
  );
};

export default Challenges;
