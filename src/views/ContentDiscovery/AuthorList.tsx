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
  HStack, 
  Avatar 
} from '@chakra-ui/react';
import { IconChevronLeft, IconSearch } from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const AuthorList: React.FC = () => {
  const navigate = useNavigate();
  const [, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const authors = [
    {
      "name": "St. Augustine",
      "description": "4th-5th century Church Father",
      "works": 124,
      "image": "https://images.unsplash.com/photo-1585066699728-a56ef32a992b?q=80&w=100&h=100&fit=crop"
    },
    {
      "name": "St. Thomas Aquinas",
      "description": "13th century Dominican theologian",
      "works": 89,
      "image": "https://images.unsplash.com/photo-1591457089426-2930544ebb91?q=80&w=100&h=100&fit=crop"
    },
    {
      "name": "St. Josemaría Escrivá",
      "description": "20th century, Opus Dei founder",
      "works": 45,
      "image": "https://images.unsplash.com/photo-1544384944-f2039ced85ca?q=80&w=100&h=100&fit=crop"
    }
  ];

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        h="100vh"
        bg="background"
      >
        <Flex
          p={4}
          alignItems="center"
          borderBottomWidth="1px"
          borderColor="borderColor"
        >
          <Button
            variant="ghost"
            p={0}
            mr={4}
            onClick={() => navigate('/library')}
          >
            <IconChevronLeft size={24} />
          </Button>
          <Text
            fontSize="lg"
            fontWeight="medium"
          >
            Library
          </Text>
        </Flex>
        <Flex
          p={4}
          direction="column"
          gap={4}
        >
          <Text
            fontSize="2xl"
            fontWeight="bold"
          >
            Authors
          </Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<IconSearch color="gray.400" />}
              pl={4}
            />
            <Input
              pl={12}
              placeholder="Search authors"
              borderRadius="xl"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
          <Flex
            overflowX="auto"
            pb={2}
            css={{
              "&::-webkit-scrollbar": {
                "display": "none"
              }
            }}
          >
            <HStack spacing={3}>
              {["All", "Saints", "Church Fathers", "Modern", "Opus Dei"].map(filter => (
                <Button
                  key={filter}
                  size="sm"
                  variant={filter === selectedFilter ? "primary" : "secondary"}
                  onClick={() => setSelectedFilter(filter)}
                >
                  <Text>{filter}</Text>
                </Button>
              ))}
            </HStack>
          </Flex>
          <Flex
            direction="column"
            gap={3}
            flex={1}
            overflowY="auto"
          >
            {authors.map(author => (
              <Button
                key={author.name}
                variant="secondary"
                h="auto"
                p={4}
                onClick={() => navigate('/reading-content')}
              >
                <Flex
                  alignItems="center"
                  gap={4}
                  width="100%"
                >
                  <Avatar
                    size="md"
                    src={author.image}
                    name={author.name}
                  />
                  <Flex
                    direction="column"
                    align="start"
                    flex={1}
                  >
                    <Text
                      fontWeight="bold"
                      fontSize="md"
                    >
                      {author.name}
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.400"
                    >
                      {author.description}
                    </Text>
                    <Text
                      fontSize="xs"
                      color="primary.100"
                    >
                      {`${author.works} works available`}
                    </Text>
                  </Flex>
                </Flex>
              </Button>
            ))}
          </Flex>
        </Flex>
        <Flex
          position="fixed"
          right={2}
          top="50%"
          transform="translateY(-50%)"
          direction="column"
          spacing={1}
          bg="cardColor"
          p={2}
          borderRadius="xl"
        >
          {Array(26).fill('1').map((_, i) => (
            <Button
              key={i}
              variant="ghost"
              size="xs"
              height={6}
              minW={6}
              p={0}
            >
              <Text
                fontSize="xs"
              >
                {String.fromCharCode(65 + i)}
              </Text>
            </Button>
          ))}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default AuthorList;
