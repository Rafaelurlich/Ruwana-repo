import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Mode, buildVariations, getSuggestionsForMode } from '@/data/guidance';
import { PrimaryButton } from '@/components/PrimaryButton';
import { CameraPreview } from '@/components/CameraPreview';
import { SuggestionList } from '@/components/SuggestionList';
import { VariationDeck } from '@/components/VariationDeck';
import { MindfulPrompt } from '@/components/MindfulPrompt';
import { SessionSummary } from '@/components/SessionSummary';
import { ProgressIndicator } from '@/components/ProgressIndicator';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

type SessionScreenProps = {
  mode: Mode;
  onEnd: (summary: { intent: string; notes: string; guidanceCount: number }) => void;
  onCancel: () => void;
};

const STAGES = ['Setup', 'Intent', 'Observe', 'Invite', 'Reflect'];

const MINDFUL_PROMPTS = [
  'Notice your breath for three cycles before your next brushstroke.',
  'Ask your painting what feeling wants more space right now.',
  'If you need softness, imagine a breeze moving across the canvas.'
];

export const SessionScreen: React.FC<SessionScreenProps> = ({ mode, onEnd, onCancel }) => {
  const [stageIndex, setStageIndex] = useState(0);
  const [intent, setIntent] = useState('');
  const [notes, setNotes] = useState('');
  const [mindfulToggle, setMindfulToggle] = useState(mode === 'mindful');
  const [guidanceExplored, setGuidanceExplored] = useState(0);

  const mindful = mode === 'mindful' || mindfulToggle;

  const suggestions = useMemo(() => getSuggestionsForMode(mindful ? 'mindful' : mode), [mindful, mode]);
  const variations = useMemo(() => buildVariations(intent, mindful ? 'mindful' : mode), [intent, mindful, mode]);

  const handleNextStage = () => {
    if (stageIndex < STAGES.length - 1) {
      setStageIndex((prev) => prev + 1);
      return;
    }

    onEnd({ intent, notes, guidanceCount: guidanceExplored });
  };

  const handleMarkExplored = () => setGuidanceExplored((prev) => prev + 1);

  const heading = STAGES[stageIndex];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.eyebrow}>Live session</Text>
          <Text style={styles.heading}>{heading}</Text>
        </View>
        <PrimaryButton label="End session" onPress={onCancel} variant="secondary" />
      </View>

      <ProgressIndicator stages={STAGES} activeIndex={stageIndex} />

      <CameraPreview mindful={mindful} />

      <View style={styles.intentCard}>
        <View style={styles.intentHeader}>
          <Text style={styles.intentHeading}>Intent & mood</Text>
          <View style={styles.toggleRow}>
            <Text style={styles.toggleLabel}>Mindful mode</Text>
            <Switch
              value={mindful}
              onValueChange={setMindfulToggle}
              thumbColor={mindful ? colors.mindfulAccent : '#FFFFFF'}
              trackColor={{ false: colors.border, true: colors.mindfulAccent }}
            />
          </View>
        </View>
        <TextInput
          style={[styles.intentInput, mindful && styles.intentInputMindful]}
          placeholder="e.g. Paint a calm seascape with gentle light"
          placeholderTextColor={colors.textSecondary}
          multiline
          value={intent}
          onChangeText={setIntent}
        />
        <Text style={styles.intentHint}>
          Combine technique and emotion: "Soften the horizon" or "Express quiet joy." Ruwana adapts
          to the language you choose.
        </Text>
      </View>

      <SuggestionList suggestions={suggestions} mindful={mindful} />

      <PrimaryButton label="Mark invitation explored" onPress={handleMarkExplored} style={styles.exploreButton} />

      <VariationDeck variations={variations} mindful={mindful} />

      {mindful && <MindfulPrompt prompt={MINDFUL_PROMPTS[guidanceExplored % MINDFUL_PROMPTS.length]} />}

      <View style={styles.notesCard}>
        <Text style={styles.notesHeading}>Reflection notes</Text>
        <TextInput
          style={styles.notesInput}
          placeholder={
            mindful
              ? 'How does the canvas reflect your current mood? Capture any sensations or shifts.'
              : 'Log breakthroughs, materials used, or questions for your next session.'
          }
          placeholderTextColor={colors.textSecondary}
          multiline
          value={notes}
          onChangeText={setNotes}
        />
      </View>

      <SessionSummary
        intent={intent}
        modeLabel={mindful ? 'Mindful Painting' : 'Explore & Learn'}
        guidanceCount={guidanceExplored}
        mindful={mindful}
      />

      <PrimaryButton
        label={stageIndex === STAGES.length - 1 ? 'Save session' : 'Next step'}
        onPress={handleNextStage}
        style={styles.footerButton}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.background
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md
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
    marginTop: spacing.xs
  },
  intentCard: {
    marginTop: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg
  },
  intentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm
  },
  intentHeading: {
    fontSize: typography.subheading,
    fontWeight: '700',
    color: colors.textPrimary
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm
  },
  toggleLabel: {
    fontSize: typography.small,
    color: colors.textSecondary
  },
  intentInput: {
    minHeight: 90,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    fontSize: typography.body,
    color: colors.textPrimary
  },
  intentInputMindful: {
    borderColor: colors.mindfulAccent,
    backgroundColor: colors.mindfulSurface
  },
  intentHint: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20
  },
  exploreButton: {
    marginTop: spacing.md
  },
  notesCard: {
    marginTop: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg
  },
  notesHeading: {
    fontSize: typography.subheading,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.sm
  },
  notesInput: {
    minHeight: 120,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    fontSize: typography.body,
    color: colors.textPrimary
  },
  footerButton: {
    marginTop: spacing.xl,
    marginBottom: spacing.xl
  }
});
