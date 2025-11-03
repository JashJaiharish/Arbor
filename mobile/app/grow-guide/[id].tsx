import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from '../../components/ui';
import { colors, spacing, typography } from '../../constants';

const tips: { [key: string]: string } = {
  'Tomato': 'Plant in well-drained soil with full sun exposure. Water deeply but infrequently.',
  'Basil': 'Pinch off flower buds to promote leaf growth. Harvest regularly.',
  'Aloe Vera': 'Allow soil to dry completely between waterings. Perfect for beginners!',
  'Mint': 'Mint spreads rapidly! Consider container growing. Keep soil moist.'
};

export default function PlantDetailScreen() {
  const { plant } = useLocalSearchParams<{ plant: string }>();
  const plantData = plant ? JSON.parse(plant) : null;

  if (!plantData) {
    return (
      <View style={styles.container}>
        <Text>Plant not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[colors.primary, colors.primaryDark]}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <Text style={styles.plantEmoji}>{plantData.image}</Text>
          <Text style={styles.plantName}>{plantData.name}</Text>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <Card style={styles.infoCard}>
          <View style={styles.infoItem}>
            <View style={[styles.iconContainer, { backgroundColor: colors.warningLight }]}>
              <MaterialIcons name="wb-sunny" size={20} color={colors.warning} />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>Sunlight</Text>
              <Text style={styles.infoValue}>{plantData.sunlight}</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <View style={[styles.iconContainer, { backgroundColor: '#dbeafe' }]}>
              <MaterialIcons name="water-drop" size={20} color="#3b82f6" />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>Watering</Text>
              <Text style={styles.infoValue}>{plantData.water}</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <View style={[styles.iconContainer, { backgroundColor: colors.primaryLight }]}>
              <MaterialIcons name="local-florist" size={20} color={colors.primary} />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>Soil Type</Text>
              <Text style={styles.infoValue}>{plantData.soil}</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <View style={[styles.iconContainer, { backgroundColor: '#f3e8ff' }]}>
              <MaterialIcons name="trending-up" size={20} color="#9333ea" />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>Best Season</Text>
              <Text style={styles.infoValue}>{plantData.season}</Text>
            </View>
          </View>
        </Card>

        <Card style={[styles.tipsCard, { backgroundColor: colors.primaryLight }]}>
          <Text style={styles.tipsTitle}>AI Growing Tips</Text>
          <Text style={styles.tipsText}>
            🤖 {tips[plantData.name] || 'Follow care instructions for best results.'}
          </Text>
        </Card>
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
    padding: spacing.xl,
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  plantEmoji: {
    fontSize: 80,
    marginBottom: spacing.md,
  },
  plantName: {
    ...typography.h2,
    color: colors.surface,
  },
  content: {
    padding: spacing.lg,
  },
  infoCard: {
    marginBottom: spacing.lg,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.lg,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  infoText: {
    flex: 1,
  },
  infoLabel: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  infoValue: {
    ...typography.body,
    color: colors.textLight,
  },
  tipsCard: {
    padding: spacing.lg,
  },
  tipsTitle: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  tipsText: {
    ...typography.body,
    color: colors.primaryDark,
    lineHeight: 22,
  },
});