export interface Project {
  title: string;
  description: string;
  language: string;
  languageColor: string;
  stars?: number;
  visibility: 'Public' | 'Private';
  link: string;
}

export interface SocialLink {
  platform: string;
  username: string;
  url: string;
  icon: 'github' | 'instagram' | 'mail' | 'linkedin';
}

export interface TechItem {
  name: string;
  iconName: string; // mapping to Lucide icon
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}