//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Button, 
  Text, 
  Slider, 
  SliderTrack, 
  SliderFilledTrack, 
  SliderThumb 
} from '@chakra-ui/react';
import { 
  IconChevronLeft, 
  IconMoon, 
  IconDownload, 
  IconPlayerPlay, 
  IconPlus, 
  IconHighlight, 
  IconNote, 
  IconShare, 
  IconStar 
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { kStyleGlobal } from '../../theme';

const ReadingContent = () => {
  const [currentArticle] = useState({
    "title": "The Power of Daily Prayer",
    "author": "Fr. Michael Smith",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "readingTime": "8 min read",
    "audioAvailable": true
  });

  const [isNightMode, setIsNightMode] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(35);
  const [showInteractionMenu, setShowInteractionMenu] = useState(false);

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        h="100vh"
        bg="background"
      >
        <Flex
          py={4}
          px={6}
          justify="space-between"
          align="center"
          borderBottom="1px"
          borderColor="borderColor"
        >
          <Button
            variant="ghost"
            onClick={() => {/* Implement goBack logic */}}
            p={0}
          >
            <IconChevronLeft size={24} />
          </Button>
          <Text
            fontSize="lg"
            fontWeight="bold"
          >
            {currentArticle.title}
          </Text>
          <Flex gap={4}>
            <Button
              variant="ghost"
              p={0}
              onClick={() => setIsNightMode(!isNightMode)}
            >
              <IconMoon size={24} />
            </Button>
            <Button
              variant="ghost"
              p={0}
            >
              <IconDownload size={24} />
            </Button>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          flex={1}
          overflowY="auto"
          px={6}
          py={4}
          gap={6}
        >
          <Flex
            direction="column"
            gap={2}
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
            >
              {currentArticle.title}
            </Text>
            <Flex
              gap={4}
              align="center"
            >
              <Text
                fontSize="sm"
                color="gray.400"
              >
                {currentArticle.author}
              </Text>
              <Text
                fontSize="sm"
                color="gray.400"
              >
                {currentArticle.readingTime}
              </Text>
            </Flex>
          </Flex>
          <Text
            lineHeight="tall"
          >
            {currentArticle.content}
          </Text>
        </Flex>
        {currentArticle.audioAvailable && (
          <Flex
            p={4}
            bg="cardColor"
            borderTop="1px"
            borderColor="borderColor"
            gap={4}
            align="center"
          >
            <Button
              variant="ghost"
              p={0}
            >
              <IconPlayerPlay size={24} />
            </Button>
            <Slider
              flex={1}
              value={currentProgress}
              onChange={(val) => setCurrentProgress(val)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text
              fontSize="sm"
              color="gray.400"
            >
              2:45 / 8:00
            </Text>
          </Flex>
        )}
        <Flex
          position="fixed"
          bottom={8}
          right={6}
        >
          <Button
            onClick={() => setShowInteractionMenu(!showInteractionMenu)}
            bg="primary.500"
            color="dark"
            w={12}
            h={12}
            borderRadius="full"
          >
            <IconPlus size={24} />
          </Button>
        </Flex>
        {showInteractionMenu && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            style={{
              position: 'fixed',
              bottom: '5rem',
              right: '1.5rem',
              background: kStyleGlobal.colors.cardColor,
              borderRadius: '1rem',
              padding: '1rem'
            }}
          >
            <Flex
              direction="column"
              gap={2}
            >
              <Button
                variant="ghost"
                leftIcon={<IconHighlight size={20} />}
              >
                Highlight
              </Button>
              <Button
                variant="ghost"
                leftIcon={<IconNote size={20} />}
              >
                Add Note
              </Button>
              <Button
                variant="ghost"
                leftIcon={<IconShare size={20} />}
              >
                Share
              </Button>
              <Button
                variant="ghost"
                leftIcon={<IconStar size={20} />}
              >
                Favorite
              </Button>
            </Flex>
          </motion.div>
        )}
      </Flex>
    </ChakraProvider>
  );
};

export default ReadingContent;
