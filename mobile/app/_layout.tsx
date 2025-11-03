import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from '../context/AuthContext';
import { colors } from '../constants';

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="index" redirect={true} />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/signup" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="grow-guide" />
        <Stack.Screen name="crop-tracker" />
        <Stack.Screen name="disease-detection" />
      </Stack>
    </AuthProvider>
  );
}