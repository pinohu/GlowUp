//@ts-nocheck

import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex, 
  Button, 
  Avatar, 
  Text, 
  Select, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  Switch 
} from '@chakra-ui/react';
import { 
  IconChevronLeft, 
  IconEdit, 
  IconPalette, 
  IconLanguage, 
  IconBell, 
  IconChevronRight, 
  IconShieldLock, 
  IconHelpCircle, 
  IconLogout 
} from '@tabler/icons-react';
import { kStyleGlobal } from '../../theme';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [currentTheme] = useState('system');
  const [language, setLanguage] = useState("English");
  const [notificationSettings, setNotificationSettings] = useState({
    dailyReminders: true,
    communityUpdates: true,
    newContent: false
  });

  const navigate = useNavigate();

  const toggleModal = (modal: string) => {
    switch(modal) {
      case "account":
        setIsAccountModalOpen(!isAccountModalOpen);
        break;
      case "theme":
        setIsThemeModalOpen(!isThemeModalOpen);
        break;
      case "notifications":
        setIsNotificationModalOpen(!isNotificationModalOpen);
        break;
      case "privacy":
        setIsPrivacyModalOpen(!isPrivacyModalOpen);
        break;
    }
  };

  return (
    <ChakraProvider theme={kStyleGlobal}>
      <Flex
        direction="column"
        bg="background"
        minH="100vh"
        color="textColor"
      >
        <Flex
          px={6}
          py={4}
          borderBottom="1px"
          borderColor="borderColor"
          align="center"
        >
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            mr={4}
          >
            <IconChevronLeft size={24} />
          </Button>
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            Settings
          </Text>
        </Flex>
        <Flex
          direction="column"
          p={6}
          gap={6}
          flex={1}
        >
          <Flex
            direction="column"
            bg="cardColor"
            p={4}
            borderRadius="xl"
            gap={4}
          >
            <Flex
              align="center"
              gap={4}
            >
              <Avatar
                size="lg"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"
              />
              <Flex
                direction="column"
                flex={1}
              >
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                >
                  Sarah Mitchell
                </Text>
                <Text
                  opacity={0.7}
                >
                  sarah@example.com
                </Text>
              </Flex>
              <Button
                variant="ghost"
                onClick={() => toggleModal("account")}
              >
                <IconEdit size={20} />
              </Button>
            </Flex>
          </Flex>
          <Flex
            direction="column"
            bg="cardColor"
            p={4}
            borderRadius="xl"
            gap={4}
          >
            <Text
              fontWeight="bold"
              fontSize="md"
            >
              App Preferences
            </Text>
            <Flex
              align="center"
              justify="space-between"
              onClick={() => toggleModal("theme")}
            >
              <Flex
                align="center"
                gap={3}
              >
                <IconPalette size={20} />
                <Text>Theme</Text>
              </Flex>
              <Text
                opacity={0.7}
              >
                {currentTheme}
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
            >
              <Flex
                align="center"
                gap={3}
              >
                <IconLanguage size={20} />
                <Text>Language</Text>
              </Flex>
              <Select
                value={language}
                size="sm"
                variant="ghost"
                width="auto"
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </Select>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              onClick={() => toggleModal("notifications")}
            >
              <Flex
                align="center"
                gap={3}
              >
                <IconBell size={20} />
                <Text>Notifications</Text>
              </Flex>
              <IconChevronRight
                size={20}
                opacity={0.5}
              />
            </Flex>
          </Flex>
          <Flex
            direction="column"
            bg="cardColor"
            p={4}
            borderRadius="xl"
            gap={4}
          >
            <Text
              fontWeight="bold"
              fontSize="md"
            >
              Privacy & Support
            </Text>
            <Flex
              align="center"
              justify="space-between"
              onClick={() => toggleModal("privacy")}
            >
              <Flex
                align="center"
                gap={3}
              >
                <IconShieldLock size={20} />
                <Text>Privacy Settings</Text>
              </Flex>
              <IconChevronRight
                size={20}
                opacity={0.5}
              />
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              onClick={() => navigate("/help-center")}
            >
              <Flex
                align="center"
                gap={3}
              >
                <IconHelpCircle size={20} />
                <Text>Help Center</Text>
              </Flex>
              <IconChevronRight
                size={20}
                opacity={0.5}
              />
            </Flex>
            <Button
              variant="ghost"
              color="danger"
              leftIcon={<IconLogout size={20} />}
              width="full"
              justifyContent="flex-start"
            >
              Log Out
            </Button>
          </Flex>
        </Flex>
        <Modal
          isOpen={isNotificationModalOpen}
          onClose={() => toggleModal("notifications")}
        >
          <ModalOverlay />
          <ModalContent bg="cardColor">
            <ModalHeader>
              <Text>Notification Settings</Text>
            </ModalHeader>
            <ModalBody>
              <Flex
                direction="column"
                gap={4}
              >
                <Flex justify="space-between">
                  <Text>Daily Reminders</Text>
                  <Switch
                    isChecked={notificationSettings.dailyReminders}
                    colorScheme="primary"
                    onChange={() => setNotificationSettings(prev => ({
                      ...prev,
                      dailyReminders: !prev.dailyReminders
                    }))}
                  />
                </Flex>
                <Flex justify="space-between">
                  <Text>Community Updates</Text>
                  <Switch
                    isChecked={notificationSettings.communityUpdates}
                    colorScheme="primary"
                    onChange={() => setNotificationSettings(prev => ({
                      ...prev,
                      communityUpdates: !prev.communityUpdates
                    }))}
                  />
                </Flex>
                <Flex justify="space-between">
                  <Text>New Content</Text>
                  <Switch
                    isChecked={notificationSettings.newContent}
                    colorScheme="primary"
                    onChange={() => setNotificationSettings(prev => ({
                      ...prev,
                      newContent: !prev.newContent
                    }))}
                  />
                </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};

export default Settings;
