import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

type ProgressIndicatorProps = {
  stages: string[];
  activeIndex: number;
};

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ stages, activeIndex }) => (
  <View style={styles.container}>
    {stages.map((stage, index) => {
      const isActive = index === activeIndex;
      return (
        <View key={stage} style={styles.item}>
          <View style={[styles.dot, isActive && styles.dotActive]} />
          <Text style={[styles.label, isActive && styles.labelActive]}>{stage}</Text>
          {index < stages.length - 1 && <View style={styles.line} />}
        </View>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.border
  },
  dotActive: {
    backgroundColor: colors.focus
  },
  label: {
    marginLeft: spacing.xs,
    fontSize: typography.small,
    color: colors.textSecondary,
    maxWidth: 80
  },
  labelActive: {
    color: colors.focus,
    fontWeight: '600'
  },
  line: {
    width: spacing.lg,
    height: 1,
    backgroundColor: colors.border,
    marginLeft: spacing.xs,
    marginRight: spacing.xs
  }
});
