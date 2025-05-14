//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Button, 
  Text, 
  CircularProgress, 
  CircularProgressLabel, 
  Box, 
  Grid, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter 
} from '@chakra-ui/react';
import { 
  IconChevronLeft, 
  IconPray, 
  IconBuildingChurch, 
  IconBook 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';

const HolyHabitBadges: React.FC = () => {
  const badges = [
    {
      "name": "Prayer Warrior",
      "icon": "pray",
      "progress": "5/7 days",
      "tier": "gold",
      "category": "Prayer"
    },
    {
      "name": "Mass Regular",
      "icon": "church",
      "progress": "4/4 weeks",
      "tier": "silver",
      "category": "Mass Attendance"
    },
    {
      "name": "Scripture Scholar",
      "icon": "book",
      "progress": "3/5 chapters",
      "tier": "bronze",
      "category": "Scripture Reading"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState<any>(null);

  const renderBadgeIcon = (icon: string) => {
    switch(icon) {
      case "pray": return <IconPray size={24} />;
      case "church": return <IconBuildingChurch size={24} />;
      case "book": return <IconBook size={24} />;
      default: return null;
    }
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
          justify="space-between"
          mb={6}
        >
          <Flex
            align="center"
            gap={4}
          >
            <Button
              p={0}
              variant="ghost"
              onClick={() => window.history.back()}
            >
              <IconChevronLeft size={24} />
            </Button>
            <Text
              fontSize="24px"
              fontWeight="bold"
            >
              Holy Habit Badges
            </Text>
          </Flex>
        </Flex>

        <Flex mb={6} justifyContent="center">
          <CircularProgress
            value={75}
            size="120px"
            thickness="8px"
            color="primary.100"
          >
            <CircularProgressLabel>
              <Text
                fontSize="20px"
                fontWeight="bold"
              >
                15/20
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>

        <Flex
          overflowX="auto"
          mb={6}
          sx={{
            "scrollbarWidth": "none",
            "&::-webkit-scrollbar": {
              "display": "none"
            }
          }}
        >
          <Flex gap={3}>
            {["All","Prayer","Mass Attendance","Confession","Scripture Reading","Work Sanctification","Community"].map(category => (
              <Button
                key={category}
                bg={category === selectedCategory ? "primary.100" : "cardColor"}
                color={category === selectedCategory ? "dark" : "white"}
                px={6}
                py={3}
                borderRadius="full"
                onClick={() => setSelectedCategory(category)}
              >
                <Text>{category}</Text>
              </Button>
            ))}
          </Flex>
        </Flex>

        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={4}
          overflow="auto"
        >
          {badges.map((badge, index) => (
            <Flex
              key={index}
              direction="column"
              bg="cardColor"
              p={4}
              borderRadius="xl"
              align="center"
              onClick={() => {
                setIsModalOpen(true);
                setSelectedBadge(badge);
              }}
            >
              <Box
                bg={badge.tier === "gold" ? "#FFD700" : badge.tier === "silver" ? "#C0C0C0" : "#CD7F32"}
                p={3}
                borderRadius="full"
                mb={3}
              >
                {renderBadgeIcon(badge.icon)}
              </Box>
              <Text
                fontWeight="bold"
                mb={1}
              >
                {badge.name}
              </Text>
              <Text
                fontSize="14px"
                opacity={0.8}
              >
                {badge.progress}
              </Text>
            </Flex>
          ))}
        </Grid>

        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
        >
          <ModalOverlay />
          <ModalContent bg="background">
            <ModalHeader>
              <Text
                fontSize="20px"
                fontWeight="bold"
              >
                {selectedBadge?.name}
              </Text>
            </ModalHeader>
            <ModalBody>
              <Flex
                direction="column"
                gap={4}
              >
                <Text opacity={0.8}>
                  Complete daily prayers for 7 consecutive days
                </Text>
                <Text
                  fontStyle="italic"
                  opacity={0.7}
                >
                  'Prayer is the raising of one's mind and heart to God.'
                </Text>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setIsModalOpen(false)}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};

export default HolyHabitBadges;
