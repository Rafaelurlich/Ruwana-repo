import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

type CameraPreviewProps = {
  mindful?: boolean;
};

export const CameraPreview: React.FC<CameraPreviewProps> = ({ mindful }) => (
  <View style={[styles.container, mindful && styles.mindful]}>
    <View style={styles.frame}>
      <Text style={styles.frameLabel}>Live canvas view</Text>
    </View>
    <Text style={styles.instructions}>
      Position your phone or tablet so the entire canvas fits inside the frame. Ruwana will track
      changes and adapt guidance in real time.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border
  },
  mindful: {
    backgroundColor: colors.mindfulSurface,
    borderColor: colors.mindfulAccent
  },
  frame: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.focus,
    borderRadius: 16,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md
  },
  frameLabel: {
    color: colors.focus,
    fontSize: typography.body,
    fontWeight: '600'
  },
  instructions: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20
  }
});
