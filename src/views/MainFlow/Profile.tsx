//@ts-nocheck

import React from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Box, 
  Avatar, 
  Text, 
  Grid, 
  Button 
} from '@chakra-ui/react';
import { 
  IconStarFilled, 
  IconPray, 
  IconBook, 
  IconUsers, 
  IconClock, 
  IconTrophy, 
  IconSettings, 
  IconUserPlus 
} from '@tabler/icons-react';
import Chart from 'react-apexcharts';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const userData = {
    name: "John Smith",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    glowScore: 785
  };

  const spiritualJourney = {
    streak: 21,
    growth: [30, 45, 60, 75, 85, 90, 95]
  };

  const badges = [
    { name: "Prayer Warrior", icon: "pray", level: "Gold" },
    { name: "Bible Scholar", icon: "book", level: "Silver" },
    { name: "Community Leader", icon: "users", level: "Bronze" }
  ];

  const stats = {
    prayerTime: "5h 30m",
    booksRead: 12,
    challengesCompleted: 8
  };

  const renderBadgeIcon = (icon: string) => {
    const iconProps = {
      size: 24,
      color: kStyleGlobal.colors.primary[100]
    };

    switch (icon) {
      case "pray": return <IconPray {...iconProps} />;
      case "book": return <IconBook {...iconProps} />;
      case "users": return <IconUsers {...iconProps} />;
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
        <Flex align="center" gap={4}>
          <Avatar
            size="xl"
            src={userData.profileImage}
            border="2px"
            borderColor="primary.100"
          />
          <Flex direction="column" flex={1}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="white"
            >
              {userData.name}
            </Text>
            <Flex align="center" gap={2}>
              <IconStarFilled
                size={20}
                color={kStyleGlobal.colors.primary[100]}
              />
              <Text
                color={kStyleGlobal.colors.primary[100]}
                fontWeight="medium"
              >
                {`Glow Score: ${userData.glowScore}`}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Box bg="cardColor" p={6} borderRadius="xl">
          <Flex justify="space-between" align="center" mb={4}>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="white"
            >
              Spiritual Journey
            </Text>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/personalized-journey")}
            >
              View Journey
            </Button>
          </Flex>
          <Chart
            type="line"
            height={120}
            series={[{ data: spiritualJourney.growth }]}
            options={{
              chart: {
                toolbar: { show: false },
                sparkline: { enabled: true }
              },
              stroke: {
                curve: "smooth",
                width: 3,
                colors: [kStyleGlobal.colors.primary[100]]
              },
              fill: {
                type: "gradient",
                gradient: {
                  shadeIntensity: 1,
                  opacityFrom: 0.7,
                  opacityTo: 0.3
                }
              }
            }}
          />
          <Flex justify="center" mt={4}>
            <Text color="white" fontWeight="medium">
              {`${spiritualJourney.streak} Day Streak`}
            </Text>
          </Flex>
        </Box>

        <Box>
          <Flex justify="space-between" align="center" mb={4}>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="white"
            >
              Holy Habit Badges
            </Text>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/holy-habit-badges")}
            >
              View All
            </Button>
          </Flex>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {badges.map((badge, index) => (
              <Flex
                key={index}
                direction="column"
                align="center"
                bg="cardColor"
                p={4}
                borderRadius="lg"
                gap={2}
              >
                {renderBadgeIcon(badge.icon)}
                <Text
                  fontSize="sm"
                  color="white"
                  textAlign="center"
                >
                  {badge.name}
                </Text>
                <Text
                  fontSize="xs"
                  color={kStyleGlobal.colors.primary[100]}
                >
                  {badge.level}
                </Text>
              </Flex>
            ))}
          </Grid>
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {[
            { icon: <IconClock size={24} color={kStyleGlobal.colors.primary[100]} />, 
              value: stats.prayerTime, 
              label: "Prayer Time" 
            },
            { icon: <IconBook size={24} color={kStyleGlobal.colors.primary[100]} />, 
              value: stats.booksRead.toString(), 
              label: "Books Read" 
            },
            { icon: <IconTrophy size={24} color={kStyleGlobal.colors.primary[100]} />, 
              value: stats.challengesCompleted.toString(), 
              label: "Challenges" 
            }
          ].map((stat, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              bg="cardColor"
              p={4}
              borderRadius="lg"
              gap={2}
            >
              {stat.icon}
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="white"
              >
                {stat.value}
              </Text>
              <Text
                fontSize="sm"
                color="whiteAlpha.700"
              >
                {stat.label}
              </Text>
            </Flex>
          ))}
        </Grid>

        <Flex gap={4}>
          <Button
            flex={1}
            variant="secondary"
            onClick={() => navigate("/settings")}
            leftIcon={<IconSettings size={20} />}
          >
            Settings
          </Button>
          <Button
            flex={1}
            onClick={() => navigate("/invite-friends")}
            leftIcon={<IconUserPlus size={20} />}
          >
            Invite Friends
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Profile;
