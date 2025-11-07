import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

interface ModeCardProps {
  title: string;
  description: string;
  selected?: boolean;
  onPress: () => void;
  tone?: 'mindful' | 'default';
}

export const ModeCard: React.FC<ModeCardProps> = ({
  title,
  description,
  selected,
  onPress,
  tone = 'default'
}) => {
  const isMindful = tone === 'mindful';
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        selected && styles.selected,
        isMindful && styles.mindful,
        pressed && styles.pressed
      ]}
    >
      <View>
        <Text style={[styles.title, isMindful && styles.titleMindful]}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md
  },
  mindful: {
    backgroundColor: colors.mindfulSurface,
    borderColor: colors.mindfulAccent
  },
  selected: {
    borderColor: colors.focus,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3
  },
  pressed: {
    opacity: 0.9
  },
  title: {
    fontSize: typography.subheading,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.xs
  },
  titleMindful: {
    color: colors.mindfulAccent
  },
  description: {
    fontSize: typography.body,
    color: colors.textSecondary,
    lineHeight: 22
  }
});
