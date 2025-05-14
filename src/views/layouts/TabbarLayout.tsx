//@ts-nocheck

import React from 'react';
import { 
  Box, 
  Flex, 
  Button, 
  Text 
} from '@chakra-ui/react';
import { 
  IconCalendar, 
  IconBook, 
  IconUsers, 
  IconUser 
} from '@tabler/icons-react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { kStyleGlobal } from '../../theme';

const TabbarLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname.replace('/', '').toLowerCase() || 'today';

  const routes = [
    {
      name: "Today",
      path: "/today",
      icon: IconCalendar
    },
    {
      name: "Library",
      path: "/library",
      icon: IconBook
    },
    {
      name: "Community",
      path: "/community",
      icon: IconUsers
    },
    {
      name: "Profile",
      path: "/profile",
      icon: IconUser
    }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Box
        position="relative"
        paddingBottom="80px"
        overflowY="auto"
        backgroundColor={kStyleGlobal.colors.background}
        minHeight="100vh"
      >
        {/* Render nested route content here */}
        <Outlet />
      </Box>
      <Flex
        position="fixed"
        bottom={0}
        width="100%"
        bg={kStyleGlobal.colors.gray[900]}
        justifyContent="space-around"
        alignItems="center"
        py={2}
        px={4}
        borderTop="1px solid"
        borderColor={kStyleGlobal.colors.gray[800]}
        zIndex={1000}
      >
        {routes.map((route, index) => (
          <Button
            key={index}
            onClick={() => handleNavigation(route.path)}
            variant="ghost"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py={2}
            px={4}
            color={currentRoute === route.name.toLowerCase() ? "primary.100" : "gray.400"}
            _hover={{
              color: "primary.100"
            }}
          >
            <route.icon 
              size={24} 
              style={{
                marginBottom: "4px"
              }} 
            />
            <Text
              fontSize="12px"
              fontWeight={currentRoute === route.name.toLowerCase() ? 600 : 400}
            >
              {route.name}
            </Text>
          </Button>
        ))}
      </Flex>
    </>
  );
};

export default TabbarLayout;
