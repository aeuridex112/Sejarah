
export interface SubTopic {
  title: string;
  content: (string | { type: 'list'; items: string[] })[];
}

export interface TimelinePeriod {
  id: string;
  title: string;
  date: string;
  badgeColor: string;
  subTopics: SubTopic[];
}

export interface MapLocation {
  id: string;
  name: string;
  coords: { top: string; left: string };
  description: string;
  imageUrl?: string;
  keyEvents?: string[];
  quote?: {
    text: string;
    author: string;
  };
}
