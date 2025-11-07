import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Variation } from '@/data/guidance';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

type VariationDeckProps = {
  variations: Variation[];
  mindful?: boolean;
};

export const VariationDeck: React.FC<VariationDeckProps> = ({ variations, mindful }) => (
  <View style={[styles.container, mindful && styles.mindful]}>
    <Text style={[styles.heading, mindful && styles.headingMindful]}>Digital variations</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={variations}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.previewPlaceholder}>
            <Text style={styles.previewLabel}>Preview</Text>
          </View>
          <Text style={styles.cardLabel}>{item.label}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      )}
      ListEmptyComponent={<Text style={styles.empty}>Add an intent to unlock suggestions.</Text>}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.lg
  },
  mindful: {
    backgroundColor: colors.mindfulSurface,
    borderColor: colors.mindfulAccent
  },
  heading: {
    fontSize: typography.subheading,
    fontWeight: '700',
    color: colors.textPrimary,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md
  },
  headingMindful: {
    color: colors.mindfulAccent
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    gap: spacing.md
  },
  card: {
    width: 220,
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md
  },
  previewPlaceholder: {
    height: 120,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.focus,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm
  },
  previewLabel: {
    color: colors.focus,
    fontSize: typography.small,
    fontWeight: '600'
  },
  cardLabel: {
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.xs
  },
  cardDescription: {
    fontSize: typography.small,
    color: colors.textSecondary,
    lineHeight: 20
  },
  empty: {
    fontSize: typography.small,
    color: colors.textSecondary,
    paddingHorizontal: spacing.lg
  }
});
