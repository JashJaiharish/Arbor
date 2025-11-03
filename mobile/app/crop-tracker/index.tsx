import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Card, Button, Modal as CustomModal } from '../../components/ui';
import { MOCK_CROPS } from '../../data/mockData';
import { colors, spacing, typography } from '../../constants';

export default function CropTrackerScreen() {
  const [showModal, setShowModal] = useState(false);

  const renderCropItem = ({ item }: { item: any }) => (
    <Card style={styles.cropCard}>
      <View style={styles.cropHeader}>
        <Text style={styles.cropEmoji}>{item.image}</Text>
        <View style={styles.cropInfo}>
          <Text style={styles.cropName}>{item.name}</Text>
          <Text style={styles.cropStage}>{item.stage}</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>Progress</Text>
          <Text style={styles.progressValue}>{item.progress}%</Text>
        </View>
        <View style={styles.progressBar}>
          <View
            style={[styles.progressFill, { width: `${item.progress}%` }]}
          />
        </View>
      </View>

      <View style={styles.actionContainer}>
        <MaterialIcons name="wb-sunny" size={16} color={colors.warning} />
        <Text style={styles.actionText}>{item.nextAction}</Text>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>My Crops</Text>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={styles.addButton}
        >
          <MaterialIcons name="add" size={24} color={colors.surface} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={MOCK_CROPS}
        renderItem={renderCropItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <CustomModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        title="Add New Crop"
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Feature coming soon!</Text>
          <Button
            title="Close"
            onPress={() => setShowModal(false)}
          />
        </View>
      </CustomModal>
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
    justifyContent: 'space-between',
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
    flex: 1,
  },
  addButton: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
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
  listContent: {
    padding: spacing.lg,
  },
  cropCard: {
    marginBottom: spacing.lg,
  },
  cropHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  cropEmoji: {
    fontSize: 50,
    marginRight: spacing.md,
  },
  cropInfo: {
    flex: 1,
  },
  cropName: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  cropStage: {
    ...typography.caption,
    color: colors.textLight,
  },
  progressContainer: {
    marginBottom: spacing.md,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  progressLabel: {
    ...typography.caption,
    color: colors.textLight,
  },
  progressValue: {
    ...typography.caption,
    color: colors.textLight,
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
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.warningLight,
    padding: spacing.sm,
    borderRadius: 8,
  },
  actionText: {
    ...typography.caption,
    color: colors.warning,
    fontWeight: '600',
    marginLeft: spacing.xs,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalText: {
    ...typography.body,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
});