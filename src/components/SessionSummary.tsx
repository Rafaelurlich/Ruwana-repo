import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

interface SessionSummaryProps {
  intent: string;
  modeLabel: string;
  guidanceCount: number;
  mindful?: boolean;
}

export const SessionSummary: React.FC<SessionSummaryProps> = ({ intent, modeLabel, guidanceCount, mindful }) => (
  <View style={[styles.container, mindful && styles.mindful]}>
    <Text style={styles.heading}>Session snapshot</Text>
    <View style={styles.row}>
      <Text style={styles.label}>Mode</Text>
      <Text style={styles.value}>{modeLabel}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Intent</Text>
      <Text style={styles.value}>{intent.length > 0 ? intent : 'Captured from observation'}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Invitations explored</Text>
      <Text style={styles.value}>{guidanceCount}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.lg,
    padding: spacing.lg,
    borderRadius: 16,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border
  },
  mindful: {
    backgroundColor: colors.mindfulSurface,
    borderColor: colors.mindfulAccent
  },
  heading: {
    fontSize: typography.subheading,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.md
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm
  },
  label: {
    fontSize: typography.small,
    color: colors.textSecondary
  },
  value: {
    fontSize: typography.body,
    color: colors.textPrimary,
    flex: 1,
    textAlign: 'right',
    marginLeft: spacing.md
  }
});
