//@ts-nocheck

import React from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Button, 
  Box, 
  Text, 
  Image, 
  Avatar 
} from '@chakra-ui/react';
import { 
  IconArrowLeft, 
  IconShare, 
  IconAddressBook, 
  IconMail, 
  IconCoin 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const InviteFriends = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleShareInvite = () => {
    // setAnimateShare(true);
    // setIsShareModalOpen(true);
  };

  const handleInviteContacts = () => {
    navigate('/contacts');
  };

  const handleEmailInvite = () => {
    navigate('/email-invite');
  };

  const handleSkip = () => {
    navigate('/ready-to-glow');
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        h="100vh"
        bg="background"
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
            onClick={handleGoBack}
          >
            <IconArrowLeft size={24} />
          </Button>
          <Text
            fontSize="2xl"
            fontWeight="bold"
          >
            Invite Friends
          </Text>
          <Box w={10} />
        </Flex>
        
        <Flex
          direction="column"
          align="center"
          gap={3}
        >
          <Image
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800"
            width="200px"
            height="200px"
            borderRadius="20px"
            objectFit="cover"
          />
          <Text
            fontSize="lg"
            opacity={0.8}
          >
            Grow together in faith
          </Text>
        </Flex>
        
        <Flex
          direction="column"
          gap={4}
        >
          <Button
            onClick={handleShareInvite}
            leftIcon={<IconShare size={20} />}
            bg="primary.100"
            color="dark"
            h="54px"
          >
            Share Invite Link
          </Button>
          
          <Button
            onClick={handleInviteContacts}
            leftIcon={<IconAddressBook size={20} />}
            variant="secondary"
            h="54px"
          >
            Invite from Contacts
          </Button>
          
          <Button
            onClick={handleEmailInvite}
            leftIcon={<IconMail size={20} />}
            variant="secondary"
            h="54px"
          >
            Send Email Invitation
          </Button>
        </Flex>
        
        <Flex
          bg="cardColor"
          p={4}
          borderRadius="xl"
          align="center"
          gap={3}
        >
          <IconCoin
            size={24}
            color={kStyleGlobal.colors.primary[100]}
          />
          <Text
            fontSize="md"
            fontWeight="medium"
          >
            Earn 50 Glow Coins for each friend who joins!
          </Text>
        </Flex>
        
        <Flex
          direction="column"
          gap={4}
        >
          <Text
            fontSize="lg"
            fontWeight="semibold"
          >
            Friends using GlowUp
          </Text>
          
          <Flex
            overflowX="auto"
            gap={4}
            pb={2}
            css={{
              "&::-webkit-scrollbar": {
                display: "none"
              }
            }}
          >
            {["https://images.unsplash.com/photo-1534528741775-53994a69daeb", 
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6", 
              "https://images.unsplash.com/photo-1517841905240-472988babdf9"].map((avatar, index) => (
              <Avatar
                key={index}
                size="lg"
                src={avatar}
                border="2px solid"
                borderColor="primary.100"
              />
            ))}
          </Flex>
          
          <Text
            fontSize="sm"
            opacity={0.8}
          >
            3 friends already using GlowUp
          </Text>
        </Flex>
        
        <Button
          variant="ghost"
          onClick={handleSkip}
          mt="auto"
        >
          Skip for now
        </Button>
      </Flex>
    </ChakraProvider>
  );
};

export default InviteFriends;
