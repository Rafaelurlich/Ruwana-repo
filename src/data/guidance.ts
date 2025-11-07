export type Mode = 'explore' | 'mindful';

export type IntentType = 'subject' | 'mood';

export interface GuidanceSuggestion {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

const sharedSuggestions: GuidanceSuggestion[] = [
  {
    id: 'color-harmony',
    title: 'Balance your palette',
    description: 'Introduce a unifying wash to connect foreground and background elements.',
    tags: ['color', 'composition']
  },
  {
    id: 'depth',
    title: 'Add gentle depth',
    description: 'Deepen shadows gradually to guide the viewer toward your focal point.',
    tags: ['depth', 'lighting']
  }
];

const mindfulSuggestions: GuidanceSuggestion[] = [
  {
    id: 'breath-space',
    title: 'Create breathing room',
    description: 'Lighten a corner of your canvas to invite a sense of spaciousness.',
    tags: ['mood', 'calm']
  },
  {
    id: 'soft-transitions',
    title: 'Soften transitions',
    description: 'Blend edges with a damp brush to let colors melt into one another.',
    tags: ['flow', 'soothe']
  }
];

const exploreSuggestions: GuidanceSuggestion[] = [
  {
    id: 'contrast-pop',
    title: 'Make it pop',
    description: 'Layer a bolder hue in your focal area to amplify contrast and energy.',
    tags: ['contrast', 'energy']
  },
  {
    id: 'structural-sketch',
    title: 'Refine structure',
    description: 'Sketch a quick charcoal guide to clarify shapes before adding detail.',
    tags: ['structure', 'technique']
  }
];

export const getSuggestionsForMode = (mode: Mode): GuidanceSuggestion[] => {
  if (mode === 'mindful') {
    return [...sharedSuggestions, ...mindfulSuggestions];
  }

  return [...sharedSuggestions, ...exploreSuggestions];
};

export interface Variation {
  id: string;
  label: string;
  description: string;
}

export const buildVariations = (intent: string, mode: Mode): Variation[] => {
  const baseLabel = intent.trim().length > 0 ? intent : mode === 'mindful' ? 'Calm focus' : 'Bold contrast';

  if (mode === 'mindful') {
    return [
      {
        id: 'mindful-tone',
        label: `${baseLabel} — soften tones`,
        description: 'Apply a translucent glaze of complementary color to smooth the emotional tone.'
      },
      {
        id: 'mindful-flow',
        label: `${baseLabel} — flowing motion`,
        description: 'Try longer brush gestures across the canvas to follow your breathing rhythm.'
      }
    ];
  }

  return [
    {
      id: 'explore-contrast',
      label: `${baseLabel} — highlight contrast`,
      description: 'Add a vibrant complementary color to sharpen the main forms.'
    },
    {
      id: 'explore-texture',
      label: `${baseLabel} — texture remix`,
      description: 'Layer palette knife textures over your base to spark new directions.'
    }
  ];
};
