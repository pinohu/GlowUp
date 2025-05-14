//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Button, 
  Text, 
  InputGroup, 
  InputLeftElement, 
  Input, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Select, 
  CheckboxGroup, 
  VStack, 
  Checkbox 
} from '@chakra-ui/react';
import { 
  IconChevronLeft, 
  IconFilter, 
  IconSearch, 
  IconPencil 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const ReflectionJournal: React.FC = () => {
  const navigate = useNavigate();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const journalEntries = [
    {
      "date": "Today",
      "entries": [
        {
          "title": "Morning Reflection",
          "preview": "I felt God's presence during prayer...",
          "time": "8:30 AM"
        },
        {
          "title": "Gratitude",
          "preview": "Thankful for the small moments...",
          "time": "2:15 PM"
        }
      ]
    },
    {
      "date": "Yesterday",
      "entries": [
        {
          "title": "Evening Prayer",
          "preview": "Found peace in silence...",
          "time": "9:45 PM"
        }
      ]
    }
  ];

  const quickPrompts = [
    "What am I grateful for today?",
    "How did I see God's presence?", 
    "What virtue do I want to grow in?",
    "Where did I find peace today?",
    "What challenged my faith today?"
  ];

  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goToNewEntry = () => {
    navigate('/new-entry');
  };

  const goToEntryDetail = () => {
    navigate('/entry-detail');
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        h="100vh"
        bg="background"
        p={6}
        gap={4}
      >
        <Flex
          justify="space-between"
          align="center"
        >
          <Button
            variant="ghost"
            p={0}
            onClick={goBack}
          >
            <IconChevronLeft size={24} />
          </Button>
          <Text
            fontSize="24px"
            fontWeight="bold"
          >
            Reflection Journal
          </Text>
          <Button
            variant="ghost"
            p={0}
            onClick={toggleFilterModal}
          >
            <IconFilter size={24} />
          </Button>
        </Flex>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<IconSearch size={20} />}
          />
          <Input
            placeholder="Search entries..."
            variant="filled"
          />
        </InputGroup>

        <Flex
          overflowX="auto"
          css={{
            "&::-webkit-scrollbar": {
              display: "none"
            }
          }}
        >
          <Flex
            gap={3}
            pb={2}
          >
            {quickPrompts.map((prompt, index) => (
              <Button
                key={index}
                bg="cardColor"
                px={4}
                py={2}
                borderRadius="full"
                onClick={goToNewEntry}
              >
                <Text>{prompt}</Text>
              </Button>
            ))}
          </Flex>
        </Flex>

        <Flex
          direction="column"
          flex={1}
          overflowY="auto"
          gap={6}
        >
          {journalEntries.map((group, index) => (
            <Flex
              key={index}
              direction="column"
              gap={3}
            >
              <Text
                fontSize="16px"
                fontWeight="600"
                opacity={0.8}
              >
                {group.date}
              </Text>
              {group.entries.map((entry, entryIndex) => (
                <Button
                  key={entryIndex}
                  bg="cardColor"
                  p={4}
                  borderRadius="xl"
                  onClick={goToEntryDetail}
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Flex
                    justify="space-between"
                    w="100%"
                    mb={2}
                  >
                    <Text
                      fontSize="18px"
                      fontWeight="600"
                    >
                      {entry.title}
                    </Text>
                    <Text
                      fontSize="14px"
                      opacity={0.6}
                    >
                      {entry.time}
                    </Text>
                  </Flex>
                  <Text
                    fontSize="14px"
                    opacity={0.8}
                  >
                    {entry.preview}
                  </Text>
                </Button>
              ))}
            </Flex>
          ))}
        </Flex>

        <Button
          position="fixed"
          bottom={24}
          right={6}
          w="60px"
          h="60px"
          borderRadius="full"
          bg="primary.100"
          onClick={goToNewEntry}
        >
          <IconPencil size={24} />
        </Button>

        <Modal
          isOpen={isFilterModalOpen}
          onClose={toggleFilterModal}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text
                fontSize="20px"
                fontWeight="bold"
              >
                Filter Entries
              </Text>
            </ModalHeader>
            <ModalBody>
              <Select mb={4}>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </Select>
              <CheckboxGroup>
                <VStack spacing={3}>
                  <Checkbox>Show Gratitude Entries</Checkbox>
                  <Checkbox>Show Prayer Notes</Checkbox>
                  <Checkbox>Show Reflections</Checkbox>
                </VStack>
              </CheckboxGroup>
            </ModalBody>
            <ModalFooter>
              <Button onClick={toggleFilterModal}>
                Apply Filters
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};

export default ReflectionJournal;
