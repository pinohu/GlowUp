//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Button, 
  Text, 
  Box, 
  Tabs, 
  TabList, 
  Tab, 
  TabPanels, 
  TabPanel, 
  Progress, 
  Checkbox, 
  Circle 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  IconChevronLeft, 
  IconPlayerPlay, 
  IconChevronRight 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';

const ConfessionGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sins, setSins] = useState([
    {
      "id": 1,
      "commandment": "1st Commandment",
      "text": "Have I put other things before God?",
      "checked": false
    },
    {
      "id": 2,
      "commandment": "2nd Commandment",
      "text": "Have I used God's name in vain?",
      "checked": false
    },
    {
      "id": 3,
      "commandment": "3rd Commandment",
      "text": "Have I missed Mass on Sunday?",
      "checked": false
    }
  ]);
  const [progress, setProgress] = useState(0);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleSinCheck = (id) => {
    const updatedSins = sins.map(sin => 
      sin.id === id ? { ...sin, checked: !sin.checked } : sin
    );
    setSins(updatedSins);
    setProgress((updatedSins.filter(s => s.checked).length / sins.length) * 100);
  };

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
            onClick={() => window.history.back()}
          >
            <IconChevronLeft size={24} />
          </Button>
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            Confession Guide
          </Text>
        </Flex>
        <Flex p={4} mb={2}>
          <Text
            fontSize="md"
            opacity={0.8}
          >
            Prepare your heart for the Sacrament of Reconciliation
          </Text>
        </Flex>
        <Tabs>
          <TabList
            borderBottom="1px"
            borderColor="borderColor"
            px={4}
          >
            <Tab onClick={() => setSelectedTab("examination")}>
              <Text>Examination</Text>
            </Tab>
            <Tab onClick={() => setSelectedTab("prayer")}>
              <Text>Prayer</Text>
            </Tab>
            <Tab onClick={() => setSelectedTab("steps")}>
              <Text>Steps</Text>
            </Tab>
          </TabList>
          <TabPanels p={4}>
            <TabPanel>
              <Flex direction="column" gap={4}>
                <Progress
                  value={progress}
                  colorScheme="primary"
                  mb={4}
                  borderRadius="full"
                />
                {sins.map(sin => (
                  <motion.div
                    key={sin.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      p={4}
                      bg="cardColor"
                      borderRadius="lg"
                      borderWidth="1px"
                      borderColor="borderColor"
                    >
                      <Flex justify="space-between" align="center">
                        <Flex direction="column">
                          <Text fontWeight="bold" mb={2}>
                            {sin.commandment}
                          </Text>
                          <Text opacity={0.8}>
                            {sin.text}
                          </Text>
                        </Flex>
                        <Checkbox
                          isChecked={sin.checked}
                          onChange={() => handleSinCheck(sin.id)}
                        />
                      </Flex>
                    </Box>
                  </motion.div>
                ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Box p={6} bg="cardColor" borderRadius="lg">
                <Flex direction="column" gap={4}>
                  <Text fontSize="xl" fontWeight="bold">
                    Act of Contrition
                  </Text>
                  <Text opacity={0.8} lineHeight="tall">
                    O my God, I am heartily sorry for having offended Thee...
                  </Text>
                  <Button leftIcon={<IconPlayerPlay />}>
                    <Text>Play Prayer Audio</Text>
                  </Button>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Flex direction="column" gap={4}>
                {["Greeting", "Confession", "Penance", "Absolution", "Conclusion"].map((step, index) => (
                  <Box
                    key={index}
                    p={4}
                    bg="cardColor"
                    borderRadius="lg"
                    onClick={toggleDrawer}
                    cursor="pointer"
                  >
                    <Flex justify="space-between" align="center">
                      <Flex gap={3} align="center">
                        <Circle
                          size="24px"
                          bg="primary.100"
                          color="dark"
                        >
                          <Text>{index + 1}</Text>
                        </Circle>
                        <Text fontWeight="medium">
                          {step}
                        </Text>
                      </Flex>
                      <IconChevronRight size={20} />
                    </Flex>
                  </Box>
                ))}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </ChakraProvider>
  );
};

export default ConfessionGuide;
