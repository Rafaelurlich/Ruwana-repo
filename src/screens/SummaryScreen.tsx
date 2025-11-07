import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';
import { PrimaryButton } from '@/components/PrimaryButton';

interface SummaryScreenProps {
  modeLabel: string;
  intent: string;
  notes: string;
  guidanceCount: number;
  onStartAnother: () => void;
  onClose: () => void;
}

export const SummaryScreen: React.FC<SummaryScreenProps> = ({
  modeLabel,
  intent,
  notes,
  guidanceCount,
  onStartAnother,
  onClose
}) => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.eyebrow}>Session saved</Text>
    <Text style={styles.heading}>Your painting companion recap</Text>

    <View style={styles.card}>
      <Text style={styles.label}>Mode</Text>
      <Text style={styles.value}>{modeLabel}</Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.label}>Intent</Text>
      <Text style={styles.value}>{intent.length > 0 ? intent : 'Observed in-session'}</Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.label}>Invitations explored</Text>
      <Text style={styles.value}>{guidanceCount}</Text>
    </View>

    {notes.length > 0 && (
      <View style={styles.card}>
        <Text style={styles.label}>Reflection notes</Text>
        <Text style={styles.value}>{notes}</Text>
      </View>
    )}

    <PrimaryButton label="Start another session" onPress={onStartAnother} style={styles.primaryAction} />
    <PrimaryButton label="Back to home" onPress={onClose} variant="secondary" />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.background,
    flexGrow: 1
  },
  eyebrow: {
    fontSize: typography.small,
    color: colors.focus,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  heading: {
    fontSize: typography.heading,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: spacing.sm,
    marginBottom: spacing.xl
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md
  },
  label: {
    fontSize: typography.small,
    color: colors.textSecondary,
    marginBottom: spacing.xs
  },
  value: {
    fontSize: typography.body,
    color: colors.textPrimary,
    lineHeight: 22
  },
  primaryAction: {
    marginTop: spacing.xl,
    marginBottom: spacing.md
  }
});
