import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { GuidanceSuggestion } from '@/data/guidance';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

type SuggestionListProps = {
  suggestions: GuidanceSuggestion[];
  mindful?: boolean;
};

export const SuggestionList: React.FC<SuggestionListProps> = ({ suggestions, mindful }) => (
  <View style={[styles.container, mindful && styles.mindful]}>
    <Text style={[styles.heading, mindful && styles.headingMindful]}>Guided invitations</Text>
    <FlatList
      data={suggestions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.tagRow}>
            {item.tags.map((tag) => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.lg,
    padding: spacing.lg,
    borderRadius: 18,
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
  headingMindful: {
    color: colors.mindfulAccent
  },
  item: {
    paddingBottom: spacing.sm
  },
  title: {
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.xs
  },
  description: {
    fontSize: typography.small,
    color: colors.textSecondary,
    lineHeight: 20
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.sm
  },
  tag: {
    borderRadius: 12,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    backgroundColor: colors.sky,
    marginRight: spacing.sm,
    marginBottom: spacing.xs
  },
  tagText: {
    color: colors.focus,
    fontSize: typography.small,
    fontWeight: '600'
  },
  separator: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md
  }
});
