import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from '../../components/ui';
import { MOCK_MARKETPLACE } from '../../data/mockData';
import { colors, spacing, typography } from '../../constants';

export default function MarketplaceScreen() {
  const renderMarketplaceItem = ({ item }: { item: any }) => (
    <Card style={styles.itemCard}>
      <View style={styles.itemImage}>
        <Text style={styles.itemEmoji}>{item.image}</Text>
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.itemLocation}>
          <MaterialIcons name="location-on" size={12} color={colors.textLight} />
          <Text style={styles.distance}>{item.distance}</Text>
        </View>
        <View style={styles.itemFooter}>
          <Text style={styles.seller}>{item.seller}</Text>
          <View style={[
            styles.typeBadge,
            { backgroundColor: item.type === 'Swap' ? colors.infoLight : colors.successLight }
          ]}>
            <Text style={[
              styles.typeText,
              { color: item.type === 'Swap' ? colors.info : colors.success }
            ]}>
              {item.type === 'Swap' ? '🔁 Swap' : item.price}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Marketplace</Text>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialIcons name="filter-list" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={MOCK_MARKETPLACE}
        renderItem={renderMarketplaceItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
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
  filterButton: {
    backgroundColor: colors.primaryLight,
    padding: spacing.sm,
    borderRadius: 8,
  },
  listContent: {
    padding: spacing.lg,
  },
  row: {
    justifyContent: 'space-between',
  },
  itemCard: {
    width: '48%',
    marginBottom: spacing.lg,
  },
  itemImage: {
    backgroundColor: colors.primaryLight,
    padding: spacing.lg,
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  itemEmoji: {
    fontSize: 50,
  },
  itemContent: {
    padding: spacing.md,
  },
  itemName: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  itemLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  distance: {
    ...typography.caption,
    color: colors.textLight,
    marginLeft: spacing.xs,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seller: {
    ...typography.caption,
    color: colors.textLight,
  },
  typeBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },
  typeText: {
    ...typography.caption,
    fontWeight: '600',
  },
});