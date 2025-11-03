import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from '../../components/ui';
import { MOCK_PLANTS } from '../../data/mockData';
import { colors, spacing, typography } from '../../constants';

export default function GrowGuideScreen() {
  const handlePlantPress = (plant: any) => {
    router.push({
      pathname: '/grow-guide/[id]',
      params: { id: plant.id.toString(), plant: JSON.stringify(plant) }
    });
  };

  const renderPlantItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => handlePlantPress(item)} activeOpacity={0.7}>
      <Card style={styles.plantCard}>
        <View style={styles.plantContent}>
          <View style={styles.plantInfo}>
            <Text style={styles.plantEmoji}>{item.image}</Text>
            <View style={styles.plantDetails}>
              <Text style={styles.plantName}>{item.name}</Text>
              <Text style={styles.plantSubtitle}>Tap to learn more</Text>
            </View>
          </View>
          <MaterialIcons name="chevron-right" size={20} color={colors.textLight} />
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Smart Grow Guide</Text>
      </View>

      <FlatList
        data={MOCK_PLANTS}
        renderItem={renderPlantItem}
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
    alignItems: 'center',
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    marginRight: spacing.md,
  },
  title: {
    ...typography.h2,
    color: colors.text,
  },
  listContent: {
    padding: spacing.lg,
  },
  plantCard: {
    marginBottom: spacing.md,
  },
  plantContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  plantEmoji: {
    fontSize: 40,
    marginRight: spacing.md,
  },
  plantDetails: {
    flex: 1,
  },
  plantName: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  plantSubtitle: {
    ...typography.caption,
    color: colors.textLight,
  },
});