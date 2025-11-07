import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Mode } from '@/data/guidance';
import { PrimaryButton } from '@/components/PrimaryButton';
import { ModeCard } from '@/components/ModeCard';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

type HomeScreenProps = {
  selectedMode: Mode;
  onSelectMode: (mode: Mode) => void;
  onStartSession: () => void;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ selectedMode, onSelectMode, onStartSession }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.eyebrow}>Welcome to Ruwana</Text>
    <Text style={styles.heading}>Choose how you want to paint today</Text>
    <Text style={styles.subtitle}>
      Ruwana observes your canvas and offers gentle guidance tailored to your intentions. Pick a mode
      to begin a new session.
    </Text>

    <View style={styles.section}>
      <Text style={styles.sectionLabel}>Modes</Text>
      <ModeCard
        title="Explore & Learn"
        description="Get composition and color feedback, plus bold variations to push your technique."
        onPress={() => onSelectMode('explore')}
        selected={selectedMode === 'explore'}
      />
      <ModeCard
        title="Mindful Painting"
        description="Slow, gentle invitations that focus on mood, emotion, and staying grounded."
        onPress={() => onSelectMode('mindful')}
        selected={selectedMode === 'mindful'}
        tone="mindful"
      />
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionLabel}>What you need</Text>
      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>A stable camera angle</Text>
        <Text style={styles.tipDescription}>
          Set your phone or tablet on a stand facing the canvas. Ruwana captures frames every few
          seconds to track progress.
        </Text>
      </View>
      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>A clear intent or feeling</Text>
        <Text style={styles.tipDescription}>
          You can enter a technical goal ("balance the colors") or an emotional intent ("feel more
          grounded") before we begin.
        </Text>
      </View>
    </View>

    <PrimaryButton label="Start a new session" onPress={onStartSession} style={styles.startButton} />
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
    marginBottom: spacing.sm
  },
  subtitle: {
    fontSize: typography.body,
    color: colors.textSecondary,
    lineHeight: 22
  },
  section: {
    marginTop: spacing.xl
  },
  sectionLabel: {
    fontSize: typography.subheading,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.md
  },
  tipCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md
  },
  tipTitle: {
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.xs
  },
  tipDescription: {
    fontSize: typography.small,
    color: colors.textSecondary,
    lineHeight: 20
  },
  startButton: {
    marginTop: spacing.xl,
    marginBottom: spacing.xl
  }
});
