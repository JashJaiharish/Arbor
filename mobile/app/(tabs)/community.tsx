import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from '../../components/ui';
import { MOCK_POSTS } from '../../data/mockData';
import { colors, spacing, typography } from '../../constants';

export default function CommunityScreen() {
  const renderPost = ({ item }: { item: any }) => (
    <Card style={styles.postCard}>
      <View style={styles.postHeader}>
        <Text style={styles.avatar}>{item.avatar}</Text>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.user}</Text>
          <Text style={styles.postTime}>2 hours ago</Text>
        </View>
      </View>
      <Text style={styles.postText}>{item.text}</Text>
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="favorite-border" size={16} color={colors.textLight} />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="comment" size={16} color={colors.textLight} />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Community</Text>
        <TouchableOpacity style={styles.askButton}>
          <Text style={styles.askButtonText}>Ask GrowBot 🤖</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={MOCK_POSTS}
        renderItem={renderPost}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    ...typography.h2,
    color: colors.text,
  },
  askButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
  },
  askButtonText: {
    ...typography.caption,
    color: colors.surface,
    fontWeight: '600',
  },
  listContent: {
    padding: spacing.lg,
  },
  postCard: {
    marginBottom: spacing.lg,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  avatar: {
    fontSize: 24,
    marginRight: spacing.md,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '600',
  },
  postTime: {
    ...typography.caption,
    color: colors.textLight,
  },
  postText: {
    ...typography.body,
    color: colors.text,
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  postActions: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  actionText: {
    ...typography.caption,
    color: colors.textLight,
  },
});