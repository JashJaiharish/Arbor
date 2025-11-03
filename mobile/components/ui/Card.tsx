import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../constants/colors';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  shadow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = 16,
  shadow = true,
}) => {
  const cardStyle: ViewStyle = {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding,
    ...(shadow && {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    }),
  };

  return <View style={[cardStyle, style]}>{children}</View>;
};