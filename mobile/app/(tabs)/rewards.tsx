import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from '../../components/ui';
import { MOCK_BADGES } from '../../data/mockData';
import { colors, spacing, typography } from '../../constants';

export default function RewardsScreen() {
  const renderBadge = ({ item }: { item: any }) => (
    <Card style={[
      styles.badgeCard,
      { backgroundColor: item.earned ? colors.primary : colors.surface }
    ]}>
      <View style={styles.badgeHeader}>
        <View style={styles.badgeInfo}>
          <Text style={styles.badgeEmoji}>{item.icon}</Text>
          <View style={styles.badgeDetails}>
            <Text style={[
              styles.badgeName,
              { color: item.earned ? colors.surface : colors.text }
            ]}>
              {item.name}
            </Text>
            <Text style={[
              styles.badgeStatus,
              { color: item.earned ? colors.primaryLight : colors.textLight }
            ]}>
              {item.earned ? 'Earned!' : `${item.progress}% complete`}
            </Text>
          </View>
        </View>
        {item.earned && (
          <View style={styles.earnedBadge}>
            <Text style={styles.earnedText}>✓ Unlocked</Text>
          </View>
        )}
      </View>
      {!item.earned && (
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${item.progress}%` }]}
            />
          </View>
        </View>
      )}
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rewards</Text>
      </View>

      <LinearGradient
        colors={[colors.warning, colors.warningDark || '#d97706']}
        style={styles.pointsCard}
      >
        <Text style={styles.pointsLabel}>Your Points</Text>
        <Text style={styles.pointsValue}>2,450 🌟</Text>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Your Badges</Text>
        <FlatList
          data={MOCK_BADGES}
          renderItem={renderBadge}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />

        <Card style={styles.milestoneCard}>
          <View style={styles.milestoneContent}>
            <Text style={styles.milestoneEmoji}>🏆</Text>
            <Text style={styles.milestoneTitle}>Next Milestone</Text>
            <Text style={styles.milestoneDescription}>
              Reach 3,000 points to unlock Master Gardener badge!
            </Text>
          </View>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    ...typography.h2,
    color: colors.text,
  },
  pointsCard: {
    margin: spacing.lg,
    padding: spacing.lg,
    borderRadius: 16,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  pointsLabel: {
    ...typography.caption,
    color: colors.surface,
    opacity: 0.9,
    marginBottom: spacing.sm,
  },
  pointsValue: {
    ...typography.h1,
    color: colors.surface,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  listContent: {
    paddingBottom: spacing.lg,
  },
  badgeCard: {
    marginBottom: spacing.lg,
    padding: spacing.lg,
  },
  badgeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  badgeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  badgeEmoji: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  badgeDetails: {
    flex: 1,
  },
  badgeName: {
    ...typography.bodyMedium,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  badgeStatus: {
    ...typography.caption,
  },
  earnedBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },
  earnedText: {
    ...typography.caption,
    color: colors.surface,
    fontWeight: '600',
  },
  progressContainer: {
    marginTop: spacing.sm,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  milestoneCard: {
    backgroundColor: colors.warningLight,
    borderColor: colors.warning,
    borderWidth: 1,
    alignItems: 'center',
  },
  milestoneContent: {
    alignItems: 'center',
    padding: spacing.lg,
  },
  milestoneEmoji: {
    fontSize: 32,
    marginBottom: spacing.md,
  },
  milestoneTitle: {
    ...typography.bodyMedium,
    color: colors.warning,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  milestoneDescription: {
    ...typography.caption,
    color: colors.warning,
    textAlign: 'center',
  },
});