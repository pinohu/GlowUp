//@ts-nocheck

import React from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Box, 
  Text, 
  Button, 
  Avatar 
} from '@chakra-ui/react';
import { 
  IconChevronLeft, 
  IconHeart, 
  IconMessageCircle, 
  IconShare, 
  IconPlus 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const Community: React.FC = () => {
  const navigate = useNavigate();

  const posts = [{
    "id": 1,
    "author": {
     "name": "Sarah Chen",
     "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
     "isOnline": true
    },
    "content": "Just finished my morning meditation session. Starting the day with peace and gratitude 🙏",
    "timestamp": "2h ago",
    "likes": 24,
    "comments": 8
   },{
    "id": 2,
    "author": {
     "name": "Michael Brown",
     "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
     "isOnline": true
    },
    "content": "Today's challenge: Practice mindfulness during work meetings. Anyone want to join?",
    "timestamp": "4h ago",
    "likes": 45,
    "comments": 12
   }];

  const spiritualCompanions = [{
    "id": 1,
    "name": "Emma",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "isOnline": true
   },{
    "id": 2,
    "name": "James",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "isOnline": false
   }];

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
          <Flex direction="column">
            <Text
              fontSize="2xl"
              fontWeight="bold"
            >
              Community
            </Text>
            <Text
              fontSize="md"
              color="gray.400"
            >
              Connect and grow together
            </Text>
          </Flex>
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
          >
            <IconChevronLeft size={24} />
          </Button>
        </Flex>

        <Box overflowX="auto" mb={6}>
          <Flex gap={4}>
            <Flex
              direction="column"
              align="center"
              cursor="pointer"
              onClick={() => navigate("/spiritual-companions")}
            >
              <Avatar
                size="lg"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                borderWidth={2}
                borderColor="primary.100"
              />
              <Text
                fontSize="sm"
                mt={2}
              >
                Add New
              </Text>
            </Flex>
            {spiritualCompanions.map(companion => (
              <Flex
                key={companion.id}
                direction="column"
                align="center"
              >
                <Avatar
                  size="lg"
                  src={companion.avatar}
                  borderWidth={2}
                  borderColor={companion.isOnline ? "primary.100" : "gray.400"}
                />
                <Text
                  fontSize="sm"
                  mt={2}
                >
                  {companion.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>

        <Box mb={6}>
          {posts.map(post => (
            <Box
              key={post.id}
              bg="cardColor"
              borderRadius="xl"
              p={4}
              mb={4}
            >
              <Flex
                justify="space-between"
                mb={4}
              >
                <Flex gap={3}>
                  <Avatar src={post.author.avatar} />
                  <Flex direction="column">
                    <Text fontWeight="bold">
                      {post.author.name}
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.400"
                    >
                      {post.timestamp}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Text mb={4}>
                {post.content}
              </Text>
              <Flex gap={6}>
                <Button
                  variant="ghost"
                  leftIcon={<IconHeart />}
                >
                  {post.likes}
                </Button>
                <Button
                  variant="ghost"
                  leftIcon={<IconMessageCircle />}
                >
                  {post.comments}
                </Button>
                <Button
                  variant="ghost"
                  leftIcon={<IconShare />}
                />
              </Flex>
            </Box>
          ))}
        </Box>

        <Box
          position="fixed"
          bottom={20}
          right={4}
          onClick={() => navigate("/create-post")}
        >
          <Button
            size="lg"
            borderRadius="full"
            boxShadow="lg"
            bg="primary.100"
            color="dark"
          >
            <IconPlus size={24} />
          </Button>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Community;
