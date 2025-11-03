# Arbor Mobile - React Native App

A mobile gardening companion app built with React Native and Expo, converted from the original web version.

## Features

- 🌱 **Smart Grow Guide** - Detailed plant care instructions
- 📊 **Crop Tracking** - Monitor your plants' growth progress
- 🔍 **Disease Detection** - AI-powered plant health analysis
- 🛒 **Marketplace** - Trade and sell plants with local community
- 💬 **Community Forum** - Share tips and ask questions
- 🏆 **Rewards System** - Earn badges and points for your gardening activities
- 👤 **User Profile** - Track your gardening journey

## Tech Stack

- **React Native** with **Expo**
- **TypeScript** for type safety
- **Expo Router** for navigation
- **NativeWind** for styling
- **Expo Secure Store** for secure authentication
- **Expo Image Picker** for camera functionality

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your device (iOS/Android)

### Installation

1. Clone the repository
2. Navigate to the mobile directory:
   ```bash
   cd Arbor/mobile
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the development server:
   ```bash
   npm start
   ```

2. Scan the QR code with the Expo Go app on your device

3. Or run on a simulator:
   ```bash
   # iOS
   npm run ios

   # Android
   npm run android
   ```

## Project Structure

```
mobile/
├── app/                    # App screens and navigation
│   ├── (tabs)/            # Bottom tab screens
│   ├── auth/              # Authentication screens
│   ├── grow-guide/        # Plant guide screens
│   ├── crop-tracker/      # Crop tracking screen
│   └── disease-detection/ # Plant health analysis
├── components/            # Reusable UI components
│   ├── ui/                # Basic UI components
│   ├── features/          # Feature-specific components
│   └── auth/              # Authentication components
├── context/               # React Context providers
├── data/                  # Mock data and types
├── constants/             # App constants (colors, typography, etc.)
├── hooks/                 # Custom React hooks
└── utils/                 # Utility functions
```

## Key Components

### Authentication
- Secure login/logout functionality
- User session persistence with Expo Secure Store
- Quick login options (Google, Guest)

### Navigation
- Tab-based navigation using Expo Router
- Stack navigation for detailed screens
- Modal navigation for forms and overlays

### UI Components
- Reusable Button, Card, Input, Modal components
- Consistent color scheme and typography
- Mobile-optimized layouts with proper spacing

### Screens Overview

1. **Login/Signup** - User authentication with form validation
2. **Dashboard** - Home screen with eco-score and quick actions
3. **Grow Guide** - Plant library with detailed care instructions
4. **Crop Tracker** - Monitor growing crops with progress tracking
5. **Disease Detection** - Photo-based plant health analysis
6. **Marketplace** - Local plant trading and selling
7. **Community** - Social features and discussion forum
8. **Rewards** - Achievement system with badges and points
9. **Profile** - User profile and settings management

## Mock Data

The app uses mock data for demonstration purposes:
- **Plants Database** - Care information for common plants
- **User Crops** - Sample crop tracking data
- **Marketplace** - Example listings for trading
- **Community Posts** - Sample social content
- **Badges System** - Achievement tracking

## Styling Approach

- **NativeWind** for utility-first styling
- **Consistent Design System** with predefined colors and typography
- **Responsive Design** optimized for mobile devices
- **Platform-specific** styling for iOS and Android

## Future Enhancements

- [ ] Real backend integration
- [ ] Push notifications for plant care reminders
- [ ] Camera integration for real-time plant scanning
- [ ] Offline support for critical features
- [ ] Social features expansion
- [ ] Weather integration for care recommendations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on both iOS and Android
5. Submit a pull request

## Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear the cache with `npx expo start -c`
2. **Node modules issues**: Delete `node_modules` and run `npm install`
3. **Expo Go connection issues**: Ensure your device and computer are on the same network

### Development Tips

- Use Expo DevTools for debugging
- Test on both iOS and Android if possible
- Check the Expo documentation for specific API usage
- Use the preview app for testing on devices without installing Expo Go