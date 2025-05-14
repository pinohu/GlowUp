// Define common types for the application
export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
}

export interface Content {
  id: string;
  title: string;
  description: string;
  author: string;
  category: string;
  imageUrl?: string;
  contentUrl: string;
}

export interface Habit {
  id: string;
  name: string;
  description: string;
  frequency: string;
  completed: boolean;
  streak: number;
}

export interface Prayer {
  id: string;
  title: string;
  content: string;
  duration: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  participants: number;
  startDate: string;
  endDate: string;
  imageUrl?: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  earned: boolean;
  earnedDate?: string;
}
