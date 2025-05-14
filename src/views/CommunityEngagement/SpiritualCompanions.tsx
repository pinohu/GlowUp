//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Button, 
  Text, 
  Avatar, 
  Badge, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  FormControl, 
  FormLabel, 
  Select 
} from '@chakra-ui/react';
import { IconChevronLeft, IconPlus } from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const SpiritualCompanions = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedCompanionType, setSelectedCompanionType] = useState("one-on-one");
  const navigate = useNavigate();

  const companions = [{
    name: "Sarah Miller",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Focusing on contemplative prayer and Ignatian spirituality",
    streak: 15,
    goals: ["Daily Prayer","Scripture Study"]
  },{
    name: "John Davis",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Journeying through the Liturgical Year",
    streak: 8,
    goals: ["Mass Attendance","Sacred Reading"]
  }];

  const groups = [{
    name: "Lectio Divina Circle",
    members: 8,
    focus: "Scripture Meditation",
    nextMeeting: "Tomorrow, 7 PM"
  },{
    name: "Prayer Warriors",
    members: 12,
    focus: "Intercessory Prayer",
    nextMeeting: "Friday, 6 PM"
  }];

  const handleGoBack = () => {
    navigate(-1);
  };

  return(
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        h="100vh"
        bg="background"
        overflow="hidden"
      >
        <Flex
          px={6}
          py={4}
          justify="space-between"
          align="center"
          borderBottom="1px"
          borderColor="borderColor"
        >
          <Flex
            align="center"
            gap={4}
          >
            <Button
              variant="ghost"
              onClick={handleGoBack}
            >
              <IconChevronLeft size={24} />
            </Button>
            <Text
              fontSize="xl"
              fontWeight="bold"
            >
              Spiritual Companions
            </Text>
          </Flex>
        </Flex>
        
        <Flex
          px={6}
          py={2}
        >
          <Select
            value={selectedCompanionType}
            onChange={(e) => setSelectedCompanionType(e.target.value)}
          >
            <option value="one-on-one">One-on-One</option>
            <option value="group">Groups</option>
          </Select>
        </Flex>
        
        <Flex
          flex={1}
          direction="column"
          overflow="auto"
          px={6}
          py={4}
          gap={4}
        >
          {selectedCompanionType === "one-on-one" && companions.map((companion, index) => (
            <Flex
              key={index}
              bg="cardColor"
              p={4}
              borderRadius="xl"
              gap={4}
              onClick={() => navigate("/companion-detail")}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{
                transform: "translateY(-2px)"
              }}
            >
              <Avatar
                size="lg"
                src={companion.image}
              />
              <Flex
                flex={1}
                direction="column"
                gap={2}
              >
                <Text fontWeight="bold">
                  {companion.name}
                </Text>
                <Text
                  fontSize="sm"
                  opacity={0.8}
                >
                  {companion.bio}
                </Text>
                <Flex gap={2}>
                  <Text
                    fontSize="sm"
                    color="primary.100"
                  >
                    {`${companion.streak} day streak`}
                  </Text>
                </Flex>
              </Flex>
              <Button size="sm">
                Message
              </Button>
            </Flex>
          ))}
          
          {selectedCompanionType === "group" && groups.map((group, index) => (
            <Flex
              key={index}
              bg="cardColor"
              p={4}
              borderRadius="xl"
              direction="column"
              gap={3}
            >
              <Flex
                justify="space-between"
                align="center"
              >
                <Text fontWeight="bold">
                  {group.name}
                </Text>
                <Badge>
                  {`${group.members} members`}
                </Badge>
              </Flex>
              <Text
                fontSize="sm"
                opacity={0.8}
              >
                {group.focus}
              </Text>
              <Text
                fontSize="sm"
                color="primary.100"
              >
                {`Next meeting: ${group.nextMeeting}`}
              </Text>
            </Flex>
          ))}
        </Flex>
        
        <Button
          position="fixed"
          bottom={24}
          right={6}
          leftIcon={<IconPlus />}
          onClick={() => setIsFilterModalOpen(true)}
        >
          Find a Companion
        </Button>
        
        <Modal
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text fontWeight="bold">
                Find a Companion
              </Text>
            </ModalHeader>
            <ModalBody>
              <Flex
                direction="column"
                gap={4}
              >
                <FormControl>
                  <FormLabel>Spiritual Goals</FormLabel>
                  <Select>
                    <option>Prayer Life</option>
                    <option>Scripture Study</option>
                    <option>Spiritual Reading</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Meeting Frequency</FormLabel>
                  <Select>
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                    <option>Monthly</option>
                  </Select>
                </FormControl>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setIsFilterModalOpen(false)}>
                Match Me
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};

export default SpiritualCompanions;
