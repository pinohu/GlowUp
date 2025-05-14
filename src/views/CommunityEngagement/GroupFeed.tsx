//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Box, 
  Text, 
  Button, 
  Input, 
  InputGroup, 
  InputLeftElement, 
  Avatar, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Textarea 
} from '@chakra-ui/react';
import { 
  IconFilter, 
  IconBell, 
  IconSearch, 
  IconDotsVertical, 
  IconHeart, 
  IconMessageCircle, 
  IconShare, 
  IconPlus, 
  IconPhoto, 
  IconLink 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const GroupFeed = () => {
  const navigate = useNavigate();
  const [posts] = useState([
    {
      "id": 1,
      "author": {
        "name": "Sarah Chen",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
      },
      "timestamp": "2h ago",
      "content": "Just finished reading an amazing book on contemplative prayer. Anyone else exploring this practice? Would love to share insights!",
      "likes": 24,
      "comments": 8
    },
    {
      "id": 2,
      "author": {
        "name": "Michael Rodriguez",
        "avatar": "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100"
      },
      "timestamp": "4h ago",
      "content": "Sharing some photos from our community service project this weekend. Blessed to serve alongside such amazing people! #FaithInAction",
      "image": "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=500",
      "likes": 56,
      "comments": 12
    }
  ]);
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleCreatePost = () => {
    setIsCreatePostOpen(!isCreatePostOpen);
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        bg="background"
        minH="100vh"
        px={4}
        py={2}
      >
        <Flex
          justify="space-between"
          align="center"
          mb={4}
        >
          <Text
            fontSize="24px"
            fontWeight="bold"
            color="white"
          >
            Group Feed
          </Text>
          <Flex gap={2}>
            <Button
              variant="ghost"
              onClick={toggleFilter}
            >
              <IconFilter size={24} />
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/notifications")}
            >
              <IconBell size={24} />
            </Button>
          </Flex>
        </Flex>
        
        <InputGroup mb={6}>
          <InputLeftElement>
            <IconSearch
              size={20}
              color="gray.400"
            />
          </InputLeftElement>
          <Input
            placeholder="Search posts..."
            pl={10}
          />
        </InputGroup>
        
        <Flex
          direction="column"
          gap={4}
        >
          {posts.map(post => (
            <Box
              key={post.id}
              bg="cardColor"
              p={4}
              borderRadius="xl"
            >
              <Flex
                justify="space-between"
                mb={3}
              >
                <Flex
                  gap={3}
                  align="center"
                >
                  <Avatar
                    src={post.author.avatar}
                    size="md"
                  />
                  <Flex direction="column">
                    <Text
                      fontWeight="600"
                      color="white"
                    >
                      {post.author.name}
                    </Text>
                    <Text
                      fontSize="14px"
                      color="gray.400"
                    >
                      {post.timestamp}
                    </Text>
                  </Flex>
                </Flex>
                <Button variant="ghost">
                  <IconDotsVertical size={20} />
                </Button>
              </Flex>
              
              <Text
                color="white"
                marginBottom={post.image ? "12px" : "16px"}
              >
                {post.content}
              </Text>
              
              {post.image && (
                <img
                  src={post.image}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginBottom: "16px"
                  }}
                  alt="Post"
                />
              )}
              
              <Flex justify="space-between">
                <Flex gap={6}>
                  <Button
                    variant="ghost"
                    leftIcon={<IconHeart size={20} />}
                  >
                    {post.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    leftIcon={<IconMessageCircle size={20} />}
                  >
                    {post.comments}
                  </Button>
                </Flex>
                <Button variant="ghost">
                  <IconShare size={20} />
                </Button>
              </Flex>
            </Box>
          ))}
        </Flex>
        
        <Button
          position="fixed"
          bottom={24}
          right={4}
          w="56px"
          h="56px"
          borderRadius="full"
          onClick={toggleCreatePost}
        >
          <IconPlus size={24} />
        </Button>
        
        <Modal
          isOpen={isCreatePostOpen}
          onClose={toggleCreatePost}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text
                fontSize="20px"
                fontWeight="bold"
              >
                Create Post
              </Text>
            </ModalHeader>
            <ModalBody>
              <Textarea
                placeholder="What's on your mind?"
                rows={4}
                mb={4}
              />
              <Button
                leftIcon={<IconPhoto size={20} />}
                variant="secondary"
                w="full"
                mb={2}
              >
                Add Photo
              </Button>
              <Button
                leftIcon={<IconLink size={20} />}
                variant="secondary"
                w="full"
              >
                Add Link
              </Button>
            </ModalBody>
            <ModalFooter>
              <Button onClick={toggleCreatePost}>
                Post
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};

export default GroupFeed;
