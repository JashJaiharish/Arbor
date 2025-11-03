export interface Plant {
  id: number;
  name: string;
  image: string;
  soil: string;
  water: string;
  sunlight: string;
  season: string;
}

export interface Crop {
  id: number;
  name: string;
  image: string;
  stage: string;
  progress: number;
  nextAction: string;
}

export interface MarketplaceItem {
  id: number;
  name: string;
  type: 'Sale' | 'Swap';
  seller: string;
  distance: string;
  price: string | null;
  image: string;
}

export interface CommunityPost {
  id: number;
  user: string;
  avatar: string;
  text: string;
  likes: number;
  comments: number;
}

export interface Badge {
  id: number;
  name: string;
  icon: string;
  progress: number;
  earned: boolean;
}

export interface AuthUser {
  name: string;
  email?: string;
}