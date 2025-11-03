import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../../hooks/useAuth';
import { Card, Button } from '../../components/ui';
import { MOCK_CROPS } from '../../data/mockData';
import { colors, spacing, typography } from '../../constants';

export default function DashboardScreen() {
  const { user } = useAuth();

  const navigateToScreen = (screen: string) => {
    router.push(`/${screen}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[colors.primary, colors.primaryDark]}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome Back! 🌿</Text>
            <Text style={styles.userName}>{user?.name || 'User'}</Text>
          </View>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>🌿</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <Card style={styles.ecoScoreCard}>
          <View style={styles.ecoScoreHeader}>
            <Text style={styles.ecoScoreLabel}>Eco-Score</Text>
            <MaterialIcons name="trending-up" size={20} color={colors.surface} />
          </View>
          <Text style={styles.ecoScoreValue}>82 🌎</Text>
          <Text style={styles.ecoScoreMessage}>Keep up the great work!</Text>
        </Card>

        <Card style={styles.activeCropsCard}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="local-florist" size={18} color={colors.primary} />
            <Text style={styles.sectionTitle}>Active Crops</Text>
          </View>
          <View style={styles.cropsGrid}>
            {MOCK_CROPS.map(crop => (
              <View key={crop.id} style={styles.cropItem}>
                <Text style={styles.cropEmoji}>{crop.image}</Text>
                <Text style={styles.cropName}>{crop.name}</Text>
              </View>
            ))}
          </View>
          <Button
            title="View All Crops"
            onPress={() => navigateToScreen('crop-tracker')}
            variant="ghost"
            textStyle={styles.viewAllText}
          />
        </Card>

        <Card style={styles.tipCard}>
          <View style={styles.tipContent}>
            <MaterialIcons name="wb-sunny" size={24} color={colors.warning} />
            <View style={styles.tipText}>
              <Text style={styles.tipTitle}>Today's Tip</Text>
              <Text style={styles.tipDescription}>
                Don't overwater during cloudy days! Your plants need less water when there's limited sunlight.
              </Text>
            </View>
          </View>
        </Card>

        <View style={styles.quickActionsGrid}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigateToScreen('grow-guide')}
          >
            <MaterialIcons name="menu-book" size={28} color={colors.primary} />
            <Text style={styles.actionTitle}>Grow Guide</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigateToScreen('disease-detection')}
          >
            <MaterialIcons name="photo-camera" size={28} color={colors.primary} />
            <Text style={styles.actionTitle}>Scan Plant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerGradient: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    ...typography.h2,
    color: colors.surface,
    marginBottom: spacing.xs,
  },
  userName: {
    ...typography.body,
    color: colors.primaryLight,
    opacity: 0.9,
  },
  avatarContainer: {
    backgroundColor: colors.primaryLight,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    fontSize: 24,
  },
  content: {
    padding: spacing.lg,
    paddingTop: 0,
  },
  ecoScoreCard: {
    marginBottom: spacing.lg,
    padding: spacing.lg,
  },
  ecoScoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  ecoScoreLabel: {
    ...typography.caption,
    color: colors.surface,
    opacity: 0.9,
  },
  ecoScoreValue: {
    ...typography.h1,
    color: colors.surface,
    marginBottom: spacing.xs,
  },
  ecoScoreMessage: {
    ...typography.caption,
    color: colors.surface,
    opacity: 0.9,
  },
  activeCropsCard: {
    marginBottom: spacing.lg,
    padding: spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
    marginLeft: spacing.sm,
  },
  cropsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.md,
  },
  cropItem: {
    alignItems: 'center',
  },
  cropEmoji: {
    fontSize: 32,
    marginBottom: spacing.xs,
  },
  cropName: {
    ...typography.caption,
    color: colors.textLight,
  },
  viewAllText: {
    color: colors.primary,
    fontWeight: '600',
  },
  tipCard: {
    backgroundColor: colors.warningLight,
    borderColor: colors.warning,
    borderWidth: 1,
    marginBottom: spacing.lg,
    padding: spacing.md,
  },
  tipContent: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  tipText: {
    flex: 1,
  },
  tipTitle: {
    ...typography.bodyMedium,
    color: colors.warning,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  tipDescription: {
    ...typography.caption,
    color: colors.warning,
    lineHeight: 16,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  actionCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.lg,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  actionTitle: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '600',
    marginTop: spacing.sm,
  },
});