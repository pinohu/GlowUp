//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Text, 
  InputGroup, 
  InputLeftElement, 
  Input, 
  IconButton, 
  Grid, 
  Stack, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Button, 
  FormControl, 
  FormLabel, 
  Select,
  Progress
} from '@chakra-ui/react';
import { 
  IconSearch, 
  IconAdjustments, 
  IconPray, 
  IconBriefcase, 
  IconHeart, 
  IconBook 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();

  const featuredBooks = [
    {
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "The Power of Prayer",
      author: "Fr. James Martin"
    },
    {
      cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
      title: "Daily Devotions",
      author: "Sr. Mary Catherine"
    },
    {
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
      title: "Finding Peace",
      author: "Thomas Merton"
    }
  ];

  const categories = [
    { icon: "pray", name: "Prayer" },
    { icon: "briefcase", name: "Work" },
    { icon: "heart", name: "Virtues" },
    { icon: "book", name: "Scripture" }
  ];

  const recentReads = [
    {
      title: "The Interior Castle",
      author: "St. Teresa of Avila",
      progress: 65,
      cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73"
    },
    {
      title: "Introduction to the Devout Life",
      author: "St. Francis de Sales",
      progress: 30,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
    }
  ];

  const renderCategoryIcon = (icon: string) => {
    switch(icon) {
      case "pray": return <IconPray size={24} color="primary.100" />;
      case "briefcase": return <IconBriefcase size={24} color="primary.100" />;
      case "heart": return <IconHeart size={24} color="primary.100" />;
      case "book": return <IconBook size={24} color="primary.100" />;
      default: return null;
    }
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        bg="background"
        minH="100vh"
        p={4}
      >
        <Flex
          justify="space-between"
          align="center"
          mb={6}
        >
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="white"
          >
            Library
          </Text>
          <InputGroup maxW="300px">
            <InputLeftElement
              pointerEvents="none"
              pl={4}
            >
              <IconSearch size={20} color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search for authors, titles, or themes"
              borderRadius="full"
              pl={12}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
        </Flex>

        <Flex
          direction="column"
          mb={8}
        >
          <Flex
            justify="space-between"
            align="center"
            mb={4}
          >
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color="white"
            >
              Featured
            </Text>
            <IconButton
              icon={<IconAdjustments size={20} />}
              variant="ghost"
              onClick={() => setIsFilterOpen(true)}
              aria-label="Open Filters"
            />
          </Flex>
          <Flex
            overflowX="auto"
            gap={4}
            css={{
              "&::-webkit-scrollbar": {
                display: "none"
              }
            }}
          >
            {featuredBooks.map((book, index) => (
              <Flex
                key={index}
                direction="column"
                minW="200px"
                onClick={() => navigate("/reading-content")}
                cursor="pointer"
              >
                <img
                  src={book.cover}
                  style={{
                    width: "200px",
                    height: "280px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: "12px"
                  }}
                  alt={book.title}
                />
                <Text
                  fontSize="md"
                  fontWeight="semibold"
                  color="white"
                  mb={1}
                >
                  {book.title}
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.400"
                >
                  {book.author}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={4}
          mb={8}
        >
          {categories.map((category, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              bg="cardColor"
              p={4}
              borderRadius="xl"
              onClick={() => navigate("/browse-categories")}
              cursor="pointer"
            >
              {renderCategoryIcon(category.icon)}
              <Text
                fontSize="sm"
                color="white"
                mt={2}
              >
                {category.name}
              </Text>
            </Flex>
          ))}
        </Grid>

        <Flex
          direction="column"
          mb={6}
        >
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color="white"
            mb={4}
          >
            Continue Reading
          </Text>
          <Stack spacing={4}>
            {recentReads.map((book, index) => (
              <Flex
                key={index}
                bg="cardColor"
                p={4}
                borderRadius="xl"
                align="center"
                gap={4}
                onClick={() => navigate("/reading-content")}
                cursor="pointer"
              >
                <img
                  src={book.cover}
                  style={{
                    width: "60px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                  alt={book.title}
                />
                <Flex
                  direction="column"
                  flex={1}
                >
                  <Text
                    fontSize="md"
                    fontWeight="semibold"
                    color="white"
                    mb={1}
                  >
                    {book.title}
                  </Text>
                  <Text
                    fontSize="sm"
                    color="gray.400"
                    mb={2}
                  >
                    {book.author}
                  </Text>
                  <Progress
                    value={book.progress}
                    size="sm"
                    colorScheme="primary"
                  />
                </Flex>
              </Flex>
            ))}
          </Stack>
        </Flex>

        <Modal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        >
          <ModalOverlay />
          <ModalContent bg="cardColor">
            <ModalHeader
              borderBottomWidth={1}
              borderColor="borderColor"
            >
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="white"
              >
                Filters
              </Text>
            </ModalHeader>
            <ModalBody>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel color="white">
                    Categories
                  </FormLabel>
                  <Select 
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    <option value="prayer">Prayer</option>
                    <option value="work">Work</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel color="white">
                    Format
                  </FormLabel>
                  <Select>
                    <option value="all">All Formats</option>
                    <option value="ebook">E-Book</option>
                    <option value="audio">Audio</option>
                  </Select>
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setIsFilterOpen(false)}>
                Apply Filters
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};

export default Library;
