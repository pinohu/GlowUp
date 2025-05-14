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
  Grid, 
  Box 
} from '@chakra-ui/react';
import { 
  IconChevronLeft, 
  IconSearch, 
  IconBook, 
  IconPray, 
  IconBookmark, 
  IconBuildingChurch, 
  IconHeart, 
  IconCross, 
  IconChevronRight 
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const BrowseCategories: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { "icon": "book", "name": "Sacred Texts", "items": 145 },
    { "icon": "pray", "name": "Prayer Guides", "items": 89 },
    { "icon": "rosary", "name": "Devotionals", "items": 234 },
    { "icon": "church", "name": "Church History", "items": 167 },
    { "icon": "heart", "name": "Saints Lives", "items": 198 },
    { "icon": "cross", "name": "Theology", "items": 256 }
  ];

  const renderIcon = (icon: string) => {
    const iconProps = { 
      size: 32, 
      color: kStyleGlobal.colors.primary[100] 
    };

    switch(icon) {
      case 'book': return <IconBook {...iconProps} />;
      case 'pray': return <IconPray {...iconProps} />;
      case 'rosary': return <IconBookmark {...iconProps} />;
      case 'church': return <IconBuildingChurch {...iconProps} />;
      case 'heart': return <IconHeart {...iconProps} />;
      case 'cross': return <IconCross {...iconProps} />;
      default: return null;
    }
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        bg="background"
        minH="100vh"
        px={6}
        py={4}
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
              onClick={() => navigate(-1)}
            >
              <IconChevronLeft size={24} />
            </Button>
            <Text
              fontSize="xl"
              fontWeight="bold"
            >
              Library
            </Text>
          </Flex>
        </Flex>
        
        <Text
          fontSize="2xl"
          fontWeight="bold"
          mb={6}
        >
          Categories
        </Text>
        
        <InputGroup mb={8}>
          <InputLeftElement
            pointerEvents="none"
            children={<IconSearch size={20} />}
            pl={4}
          />
          <Input
            pl={12}
            placeholder="Search categories"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
        
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={4}
          mb={8}
        >
          {categories.slice(0, 6).map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Box
                bg="cardColor"
                p={6}
                borderRadius="xl"
                cursor="pointer"
                onClick={() => navigate('/library')}
              >
                {renderIcon(category.icon)}
                
                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  mt={3}
                  mb={1}
                >
                  {category.name}
                </Text>
                
                <Text
                  fontSize="sm"
                  color="whiteAlpha.700"
                >
                  {category.items} items
                </Text>
              </Box>
            </motion.div>
          ))}
        </Grid>
        
        <Flex
          direction="column"
          gap={3}
        >
          {categories.slice(6).map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Box
                bg="cardColor"
                p={4}
                borderRadius="lg"
                cursor="pointer"
                onClick={() => navigate('/library')}
              >
                <Flex
                  justify="space-between"
                  align="center"
                >
                  <Flex
                    align="center"
                    gap={4}
                  >
                    <Flex
                      p={2}
                      borderRadius="md"
                      bg="whiteAlpha.100"
                    >
                      {renderIcon(category.icon)}
                    </Flex>
                    
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                    >
                      {category.name}
                    </Text>
                  </Flex>
                  
                  <Flex
                    align="center"
                    gap={4}
                  >
                    <Text
                      fontSize="sm"
                      color="whiteAlpha.700"
                    >
                      {category.items} items
                    </Text>
                    <IconChevronRight size={20} />
                  </Flex>
                </Flex>
              </Box>
            </motion.div>
          ))}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default BrowseCategories;
