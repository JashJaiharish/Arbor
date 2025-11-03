import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { Card, Button } from '../../components/ui';
import { colors, spacing, typography } from '../../constants';

export default function DiseaseDetectionScreen() {
  const [scanned, setScanned] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setTimeout(() => {
        setScanned(true);
      }, 2000);
    }
  };

  const handleScanAnother = () => {
    setScanned(false);
    setImage(null);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Disease Detection</Text>
      </View>

      <View style={styles.content}>
        {!scanned ? (
          <View>
            <Card style={styles.uploadCard}>
              <View style={styles.uploadContent}>
                <MaterialIcons name="photo-camera" size={64} color={colors.primary} />
                <Text style={styles.uploadText}>
                  Upload a photo to detect diseases
                </Text>
                <Button
                  title="Upload Photo"
                  onPress={handlePickImage}
                  style={styles.uploadButton}
                />
              </View>
            </Card>

            <Card style={styles.tipsCard}>
              <View style={styles.tipsContent}>
                <MaterialIcons name="security" size={20} color={colors.info} />
                <View style={styles.tipsText}>
                  <Text style={styles.tipsTitle}>Tips for best results:</Text>
                  <Text style={styles.tipsList}>• Use clear, well-lit photos</Text>
                  <Text style={styles.tipsList}>• Focus on affected leaves</Text>
                  <Text style={styles.tipsList}>• Avoid shadows and blur</Text>
                </View>
              </View>
            </Card>
          </View>
        ) : (
          <View>
            <Card style={styles.resultCard}>
              <View style={styles.imagePreview}>
                <Text style={styles.emoji}>🍃</Text>
              </View>

              <View style={styles.detectionResult}>
                <View style={styles.resultHeader}>
                  <MaterialIcons name="security" size={20} color={colors.error} />
                  <Text style={styles.detectionTitle}>Detected: Leaf Blight</Text>
                </View>
                <Text style={styles.confidence}>Confidence: 94%</Text>
              </View>

              <Card style={styles.treatmentCard}>
                <View style={styles.treatmentHeader}>
                  <MaterialIcons name="local-florist" size={18} color={colors.success} />
                  <Text style={styles.treatmentTitle}>Treatment Recommendation</Text>
                </View>
                <Text style={styles.treatmentText}>
                  Use neem oil spray on affected leaves. Avoid overwatering and ensure good air circulation.
                </Text>
                <Text style={styles.treatmentTip}>
                  💡 Apply treatment early morning or late evening
                </Text>
              </Card>
            </Card>

            <Button
              title="Scan Another Plant"
              onPress={handleScanAnother}
              style={styles.scanAnotherButton}
            />
          </View>
        )}
      </View>
    </ScrollView>
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
  content: {
    padding: spacing.lg,
  },
  uploadCard: {
    backgroundColor: colors.primaryLight,
    borderWidth: 2,
    borderColor: colors.primary,
    borderStyle: 'dashed',
    marginBottom: spacing.lg,
  },
  uploadContent: {
    alignItems: 'center',
    padding: spacing.xl,
  },
  uploadText: {
    ...typography.body,
    color: colors.text,
    textAlign: 'center',
    marginVertical: spacing.lg,
  },
  uploadButton: {
    backgroundColor: colors.primary,
  },
  tipsCard: {
    backgroundColor: colors.infoLight,
    borderColor: colors.info,
    borderWidth: 1,
  },
  tipsContent: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  tipsText: {
    flex: 1,
  },
  tipsTitle: {
    ...typography.bodyMedium,
    color: colors.info,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  tipsList: {
    ...typography.caption,
    color: colors.info,
    marginBottom: spacing.xs,
  },
  resultCard: {
    marginBottom: spacing.lg,
  },
  imagePreview: {
    backgroundColor: colors.errorLight,
    padding: spacing.xl,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  emoji: {
    fontSize: 60,
  },
  detectionResult: {
    backgroundColor: colors.errorLight,
    borderLeftWidth: 4,
    borderLeftColor: colors.error,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.lg,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  detectionTitle: {
    ...typography.bodyMedium,
    color: colors.error,
    fontWeight: 'bold',
    marginLeft: spacing.sm,
  },
  confidence: {
    ...typography.caption,
    color: colors.error,
  },
  treatmentCard: {
    backgroundColor: colors.successLight,
    marginBottom: spacing.lg,
  },
  treatmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  treatmentTitle: {
    ...typography.h4,
    color: colors.success,
    marginLeft: spacing.sm,
  },
  treatmentText: {
    ...typography.body,
    color: colors.success,
    marginBottom: spacing.sm,
    lineHeight: 20,
  },
  treatmentTip: {
    ...typography.caption,
    color: colors.successDark || colors.success,
  },
  scanAnotherButton: {
    backgroundColor: colors.primary,
  },
});