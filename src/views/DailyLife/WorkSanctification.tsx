//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Box, 
  Button, 
  Text, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Switch 
} from '@chakra-ui/react';
import { IconChevronLeft } from '@tabler/icons-react';
import Chart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';
import { kStyleGlobal } from '../../theme';

const WorkSanctification = () => {
  const [isOfferingModalOpen, setIsOfferingModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOfferingModal = () => {
    setIsOfferingModalOpen(!isOfferingModalOpen);
  };

  const reflectionPrompts = [
    "How can I serve others through my work today?",
    "What challenge at work can I offer up as a sacrifice?", 
    "How can I bring more patience to my tasks?"
  ];

  const [virtues] = useState([]);

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        bg="background"
        minH="100vh"
        p={6}
        gap={6}
      >
        <Flex
          justify="space-between"
          align="center"
        >
          <Button
            variant="ghost"
            p={0}
            onClick={() => navigate(-1)}
          >
            <IconChevronLeft size={24} />
          </Button>
          <Text
            fontSize="24px"
            fontWeight="bold"
          >
            Work Sanctification
          </Text>
          <Box w="24px" />
        </Flex>
        <Flex
          direction="column"
          gap={4}
        >
          <Button
            size="lg"
            onClick={toggleOfferingModal}
          >
            Offer My Work
          </Button>
          <Flex
            overflowX="auto"
            pb={4}
            css={{
              "&::-webkit-scrollbar": {
                display: "none"
              }
            }}
          >
            <Flex gap={4}>
              {reflectionPrompts.map((prompt, index) => (
                <Box
                  key={index}
                  bg="cardColor"
                  p={6}
                  borderRadius="xl"
                  minW="280px"
                >
                  <Text
                    fontSize="16px"
                    color="white"
                  >
                    {prompt}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Flex>
          <Box
            bg="cardColor"
            p={6}
            borderRadius="xl"
          >
            <Text
              fontSize="20px"
              fontWeight="bold"
              mb={4}
            >
              Virtues in Action
            </Text>
            <Flex
              direction="column"
              gap={4}
            >
              {virtues.map(virtue => (
                <Flex
                  key={virtue.name}
                  justify="space-between"
                  align="center"
                >
                  <Text>{virtue.name}</Text>
                  <Switch
                    colorScheme="green"
                    size="lg"
                  />
                </Flex>
              ))}
            </Flex>
          </Box>
          <Box
            bg="cardColor"
            p={6}
            borderRadius="xl"
          >
            <Text
              fontSize="20px"
              fontWeight="bold"
              mb={4}
            >
              Work-Life Balance
            </Text>
            <Chart
              type="radialBar"
              height={200}
              series={[75]}
              options={{
                chart: {
                  foreColor: "#fff"
                },
                plotOptions: {
                  radialBar: {
                    hollow: {
                      size: "70%"
                    },
                    track: {
                      background: "#2A2A2A"
                    },
                    dataLabels: {
                      value: {
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: "600"
                      }
                    }
                  }
                },
                colors: [kStyleGlobal.colors.primary[100]]
              }}
            />
          </Box>
        </Flex>
        <Modal
          isOpen={isOfferingModalOpen}
          onClose={toggleOfferingModal}
        >
          <ModalOverlay />
          <ModalContent bg="background">
            <ModalHeader>
              <Text
                fontSize="20px"
                fontWeight="bold"
              >
                Daily Work Offering
              </Text>
            </ModalHeader>
            <ModalBody>
              <Text
                fontSize="16px"
                lineHeight="1.6"
              >
                Lord, I offer you my work today. Help me to perform it with love and dedication, for your greater glory.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={toggleOfferingModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};

export default WorkSanctification;
