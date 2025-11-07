import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

interface MindfulPromptProps {
  prompt: string;
}

export const MindfulPrompt: React.FC<MindfulPromptProps> = ({ prompt }) => (
  <View style={styles.container}>
    <Text style={styles.label}>Mindful moment</Text>
    <Text style={styles.prompt}>{prompt}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.lg,
    backgroundColor: colors.mindfulSurface,
    borderRadius: 16,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.mindfulAccent
  },
  label: {
    fontSize: typography.small,
    color: colors.mindfulAccent,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  prompt: {
    marginTop: spacing.sm,
    fontSize: typography.body,
    color: colors.textPrimary,
    lineHeight: 22
  }
});
