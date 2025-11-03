import { Plant, Crop, MarketplaceItem, CommunityPost, Badge } from './types';

export const MOCK_PLANTS: Plant[] = [
  {
    id: 1,
    name: 'Tomato',
    image: '🍅',
    soil: 'Loamy',
    water: 'Moderate',
    sunlight: 'Full Sun',
    season: 'Spring/Summer'
  },
  {
    id: 2,
    name: 'Basil',
    image: '🌿',
    soil: 'Well-drained',
    water: 'Regular',
    sunlight: 'Partial Shade',
    season: 'Spring'
  },
  {
    id: 3,
    name: 'Aloe Vera',
    image: '🪴',
    soil: 'Sandy',
    water: 'Minimal',
    sunlight: 'Bright Indirect',
    season: 'Year-round'
  },
  {
    id: 4,
    name: 'Mint',
    image: '🌱',
    soil: 'Moist',
    water: 'Frequent',
    sunlight: 'Partial Sun',
    season: 'Spring/Fall'
  }
];

export const MOCK_CROPS: Crop[] = [
  {
    id: 1,
    name: 'Cherry Tomato',
    image: '🍅',
    stage: 'Mature',
    progress: 90,
    nextAction: 'Ready to Harvest!'
  },
  {
    id: 2,
    name: 'Basil',
    image: '🌿',
    stage: 'Sprout',
    progress: 45,
    nextAction: 'Add Water'
  },
  {
    id: 3,
    name: 'Mint',
    image: '🌱',
    stage: 'Seed',
    progress: 15,
    nextAction: 'Move to Sunlight'
  }
];

export const MOCK_MARKETPLACE: MarketplaceItem[] = [
  {
    id: 1,
    name: 'Fresh Mint',
    type: 'Swap',
    seller: 'Priya K.',
    distance: '2.3 km',
    price: null,
    image: '🌱'
  },
  {
    id: 2,
    name: 'Organic Tomato',
    type: 'Sale',
    seller: 'Raj M.',
    distance: '5.1 km',
    price: '₹50',
    image: '🍅'
  },
  {
    id: 3,
    name: 'Aloe Vera Plant',
    type: 'Swap',
    seller: 'Anita S.',
    distance: '1.8 km',
    price: null,
    image: '🪴'
  },
  {
    id: 4,
    name: 'Fresh Basil Bundle',
    type: 'Sale',
    seller: 'Kumar V.',
    distance: '3.5 km',
    price: '₹30',
    image: '🌿'
  }
];

export const MOCK_POSTS: CommunityPost[] = [
  {
    id: 1,
    user: 'Meera P.',
    avatar: '👩',
    text: 'My basil leaves are turning yellow 😕 Any tips?',
    likes: 12,
    comments: 8
  },
  {
    id: 2,
    user: 'Arun K.',
    avatar: '👨',
    text: 'Harvested my first batch of tomatoes 🍅! So proud!',
    likes: 45,
    comments: 15
  },
  {
    id: 3,
    user: 'Divya S.',
    avatar: '👩',
    text: 'Started my rooftop garden today! Excited for this journey 🌱',
    likes: 23,
    comments: 6
  }
];

export const MOCK_BADGES: Badge[] = [
  {
    id: 1,
    name: 'Green Guru',
    icon: '🌱',
    progress: 100,
    earned: true
  },
  {
    id: 2,
    name: 'Disease-Free Grower',
    icon: '🩺',
    progress: 75,
    earned: false
  },
  {
    id: 3,
    name: 'Eco Contributor',
    icon: '🌍',
    progress: 60,
    earned: false
  },
  {
    id: 4,
    name: 'Community Helper',
    icon: '🤝',
    progress: 40,
    earned: false
  }
];