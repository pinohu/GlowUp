//@ts-nocheck

import React from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Box, 
  Button, 
  Text 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  IconChevronLeft, 
  IconPray, 
  IconBook, 
  IconBuildingChurch 
} from '@tabler/icons-react';
import Chart from 'react-apexcharts';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const GlowScore: React.FC = () => {
  const navigate = useNavigate();
  const glowScore = 78;
  const scoreComponents = [
    { name: "Prayer", percentage: 85, color: "#AEFF00" },
    { name: "Mass Attendance", percentage: 70, color: "#00B8D4" },
    { name: "Confession", percentage: 60, color: "#FFB800" },
    { name: "Scripture Reading", percentage: 90, color: "#FF4444" }
  ];
  const recentActivities = [
    { activity: "Morning Prayer", date: "Today", points: "+5", icon: "pray" },
    { activity: "Sunday Mass", date: "Yesterday", points: "+10", icon: "church" },
    { activity: "Bible Reading", date: "2 days ago", points: "+3", icon: "book" }
  ];

  const renderActivityIcon = (icon: string) => {
    switch(icon) {
      case "pray": return <IconPray size={24} color={kStyleGlobal.colors.primary[100]} />;
      case "church": return <IconBuildingChurch size={24} color={kStyleGlobal.colors.primary[100]} />;
      case "book": return <IconBook size={24} color={kStyleGlobal.colors.primary[100]} />;
      default: return null;
    }
  };

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
            onClick={() => navigate(-1)}
          >
            <IconChevronLeft size={24} />
          </Button>
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            Glow Score
          </Text>
          <Box w={8} />
        </Flex>

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Flex
            direction="column"
            align="center"
            bg="cardColor"
            borderRadius="xl"
            p={8}
            position="relative"
          >
            <motion.div
              animate={{
                boxShadow: ["0px 0px 60px #AEFF00", "0px 0px 20px #AEFF00"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Text
                fontSize="6xl"
                fontWeight="bold"
                color="#AEFF00"
              >
                {glowScore}/100
              </Text>
            </motion.div>
          </Flex>
        </motion.div>

        <Box
          bg="cardColor"
          p={6}
          borderRadius="xl"
        >
          <Text
            fontSize="lg"
            fontWeight="semibold"
            mb={4}
          >
            Score Breakdown
          </Text>
          <Chart
            height={300}
            type="radialBar"
            series={scoreComponents.map((item) => item.percentage)}
            options={{
              chart: { background: "transparent" },
              colors: scoreComponents.map((item) => item.color),
              labels: scoreComponents.map((item) => item.name),
              theme: { mode: "dark" }
            }}
          />
        </Box>

        <Box
          bg="cardColor"
          p={6}
          borderRadius="xl"
        >
          <Text
            fontSize="lg"
            fontWeight="semibold"
            mb={4}
          >
            Recent Activity
          </Text>
          <Flex
            direction="column"
            gap={4}
          >
            {recentActivities.map((activity, index) => (
              <Flex
                key={index}
                justify="space-between"
                align="center"
                p={3}
                bg="#2A2A2A"
                borderRadius="lg"
              >
                <Flex
                  align="center"
                  gap={3}
                >
                  {renderActivityIcon(activity.icon)}
                  <Flex direction="column">
                    <Text fontWeight="medium">
                      {activity.activity}
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.400"
                    >
                      {activity.date}
                    </Text>
                  </Flex>
                </Flex>
                <Text
                  color={kStyleGlobal.colors.primary[100]}
                  fontWeight="bold"
                >
                  {activity.points}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>

        <Button
          onClick={() => navigate("/profile")}
          size="lg"
        >
          <Text>Share Progress</Text>
        </Button>
      </Flex>
    </ChakraProvider>
  );
};

export default GlowScore;
