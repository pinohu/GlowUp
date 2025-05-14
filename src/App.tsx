import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TabbarLayout from './views/layouts/TabbarLayout';

// Onboarding Flow
import Welcome from './views/OnboardingFlow/Welcome';
import SpiritualRhythm from './views/OnboardingFlow/SpiritualRhythm';
import InviteFriends from './views/OnboardingFlow/InviteFriends';
import GlowGoal from './views/OnboardingFlow/GlowGoal';
import ReadyToGlow from './views/OnboardingFlow/ReadyToGlow';

// Main Flow
import Today from './views/MainFlow/Today';
import Community from './views/MainFlow/Community';
import Library from './views/MainFlow/Library';
import Profile from './views/MainFlow/Profile';

// Content Discovery
import AuthorList from './views/ContentDiscovery/AuthorList';
import BrowseCategories from './views/ContentDiscovery/BrowseCategories';
import ReadingContent from './views/ContentDiscovery/ReadingContent';

// Habit Building
import DailyRoutine from './views/HabitBuilding/DailyRoutine';
import PrayerTimer from './views/HabitBuilding/PrayerTimer';
import ReflectionJournal from './views/HabitBuilding/ReflectionJournal';

// User Profile
import Settings from './views/UserProfile/Settings';
import HolyHabitBadges from './views/UserProfile/HolyHabitBadges';
import GlowScore from './views/UserProfile/GlowScore';
import PersonalizedJourney from './views/UserProfile/PersonalizedJourney';

// Community Engagement
import GroupFeed from './views/CommunityEngagement/GroupFeed';
import Challenges from './views/CommunityEngagement/Challenges';
import SpiritualCompanions from './views/CommunityEngagement/SpiritualCompanions';

// Sacramental Life
import MassPreparation from './views/SacramentalLife/MassPreparation';
import ConfessionGuide from './views/SacramentalLife/ConfessionGuide';

// Daily Life
import WorkSanctification from './views/DailyLife/WorkSanctification';

// Spiritual Practices
import MentalPrayer from './views/SpiritualPractices/MentalPrayer';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Redirect root to welcome page */}
      <Route path="/" element={<Navigate to="/welcome" replace />} />
      
      {/* Onboarding Flow */}
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/spiritual-rhythm" element={<SpiritualRhythm />} />
      <Route path="/invite-friends" element={<InviteFriends />} />
      <Route path="/glow-goal" element={<GlowGoal />} />
      <Route path="/ready-to-glow" element={<ReadyToGlow />} />
      
      {/* Main Flow with TabbarLayout */}
      <Route element={<TabbarLayout />}>
        <Route path="/today" element={<Today />} />
        <Route path="/community" element={<Community />} />
        <Route path="/library" element={<Library />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      
      {/* Content Discovery */}
      <Route path="/author-list" element={<AuthorList />} />
      <Route path="/browse-categories" element={<BrowseCategories />} />
      <Route path="/reading-content" element={<ReadingContent />} />
      
      {/* Habit Building */}
      <Route path="/daily-routine" element={<DailyRoutine />} />
      <Route path="/prayer-timer" element={<PrayerTimer />} />
      <Route path="/reflection-journal" element={<ReflectionJournal />} />
      
      {/* User Profile */}
      <Route path="/settings" element={<Settings />} />
      <Route path="/holy-habit-badges" element={<HolyHabitBadges />} />
      <Route path="/glow-score" element={<GlowScore />} />
      <Route path="/personalized-journey" element={<PersonalizedJourney />} />
      
      {/* Community Engagement */}
      <Route path="/group-feed" element={<GroupFeed />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/spiritual-companions" element={<SpiritualCompanions />} />
      
      {/* Sacramental Life */}
      <Route path="/mass-preparation" element={<MassPreparation />} />
      <Route path="/confession-guide" element={<ConfessionGuide />} />
      
      {/* Daily Life */}
      <Route path="/work-sanctification" element={<WorkSanctification />} />
      
      {/* Spiritual Practices */}
      <Route path="/mental-prayer" element={<MentalPrayer />} />
    </Routes>
  );
};

export default App;
