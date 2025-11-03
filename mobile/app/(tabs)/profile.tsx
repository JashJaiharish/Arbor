import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../hooks/useAuth';
import { Card, Button } from '../../components/ui';
import { MOCK_CROPS, MOCK_BADGES } from '../../data/mockData';
import { colors, spacing, typography } from '../../constants';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('crops');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'crops':
        return (
          <View style={styles.cropsGrid}>
            {MOCK_CROPS.map(crop => (
              <View key={crop.id} style={styles.cropCard}>
                <Text style={styles.cropEmoji}>{crop.image}</Text>
                <Text style={styles.cropName}>{crop.name}</Text>
                <Text style={styles.cropStage}>{crop.stage}</Text>
              </View>
            ))}
          </View>
        );
      case 'posts':
        return (
          <View style={styles.postsContainer}>
            <Card style={styles.postCard}>
              <Text style={styles.postText}>
                Just harvested my first tomatoes! 🍅
              </Text>
              <Text style={styles.postMeta}>3 days ago · 34 likes</Text>
            </Card>
            <Card style={styles.postCard}>
              <Text style={styles.postText}>
                Any tips for dealing with aphids?
              </Text>
              <Text style={styles.postMeta}>1 week ago · 18 likes</Text>
            </Card>
          </View>
        );
      case 'settings':
        return (
          <View style={styles.settingsContainer}>
            <Card style={styles.settingsCard}>
              <View style={styles.settingItem}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>Dark Mode</Text>
                  <Text style={styles.settingDescription}>
                    Switch to dark theme
                  </Text>
                </View>
                <Switch
                  value={isDarkMode}
                  onValueChange={setIsDarkMode}
                  trackColor={{ false: colors.border, true: colors.primary }}
                  thumbColor={colors.surface}
                />
              </View>

              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemTitle}>Notifications</Text>
                  <Text style={styles.menuItemDescription}>Manage your alerts</Text>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={colors.textLight} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemTitle}>Privacy</Text>
                  <Text style={styles.menuItemDescription}>Control your data</Text>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={colors.textLight} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemTitle}>Language</Text>
                  <Text style={styles.menuItemDescription}>English (Default)</Text>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={colors.textLight} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemTitle}>About Arbor</Text>
                  <Text style={styles.menuItemDescription}>Version 1.0.0</Text>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={colors.textLight} />
              </TouchableOpacity>
            </Card>

            <Button
              title="Logout"
              onPress={handleLogout}
              variant="outline"
              style={styles.logoutButton}
              textStyle={{ color: colors.error }}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[colors.primary, colors.primaryDark]}
        style={styles.headerGradient}
      >
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{user?.name || 'User'}</Text>
            <Text style={styles.userStatus}>Member</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Crops</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>45</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>82</Text>
            <Text style={styles.statLabel}>Eco Score</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'crops' && styles.activeTab
            ]}
            onPress={() => setActiveTab('crops')}
          >
            <Text style={[
              styles.tabText,
              activeTab === 'crops' && styles.activeTabText
            ]}>
              My Crops
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'posts' && styles.activeTab
            ]}
            onPress={() => setActiveTab('posts')}
          >
            <Text style={[
              styles.tabText,
              activeTab === 'posts' && styles.activeTabText
            ]}>
              My Posts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'settings' && styles.activeTab
            ]}
            onPress={() => setActiveTab('settings')}
          >
            <Text style={[
              styles.tabText,
              activeTab === 'settings' && styles.activeTabText
            ]}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>

        {renderContent()}
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  avatar: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    ...typography.h3,
    color: colors.surface,
    marginBottom: spacing.xs,
  },
  userStatus: {
    ...typography.caption,
    color: colors.primaryLight,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: spacing.md,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    ...typography.h2,
    color: colors.surface,
    marginBottom: spacing.xs,
  },
  statLabel: {
    ...typography.caption,
    color: colors.primaryLight,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.border,
    borderRadius: 12,
    padding: spacing.xs,
    marginBottom: spacing.lg,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.sm,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: colors.surface,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  tabText: {
    ...typography.caption,
    color: colors.textLight,
    fontWeight: '500',
  },
  activeTabText: {
    color: colors.primary,
  },
  cropsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cropCard: {
    width: '30%',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    alignItems: 'center',
    marginBottom: spacing.md,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  cropEmoji: {
    fontSize: 24,
    marginBottom: spacing.sm,
  },
  cropName: {
    ...typography.caption,
    color: colors.text,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  cropStage: {
    ...typography.small,
    color: colors.textLight,
    textAlign: 'center',
  },
  postsContainer: {
    gap: spacing.md,
  },
  postCard: {
    padding: spacing.md,
  },
  postText: {
    ...typography.body,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  postMeta: {
    ...typography.caption,
    color: colors.textLight,
  },
  settingsContainer: {
    gap: spacing.lg,
  },
  settingsCard: {
    padding: spacing.lg,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  settingDescription: {
    ...typography.caption,
    color: colors.textLight,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemTitle: {
    ...typography.bodyMedium,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  menuItemDescription: {
    ...typography.caption,
    color: colors.textLight,
  },
  logoutButton: {
    borderColor: colors.error,
  },
});