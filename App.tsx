import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { HomeScreen } from '@/screens/HomeScreen';
import { SessionScreen } from '@/screens/SessionScreen';
import { SummaryScreen } from '@/screens/SummaryScreen';
import { colors } from '@/theme/colors';
import type { Mode } from '@/data/guidance';

const App: React.FC = () => {
  const [mode, setMode] = useState<Mode>('explore');
  const [screen, setScreen] = useState<'home' | 'session' | 'summary'>('home');
  const [lastSummary, setLastSummary] = useState({ intent: '', notes: '', guidanceCount: 0 });

  const handleStartSession = () => setScreen('session');
  const handleSessionEnd = (summary: { intent: string; notes: string; guidanceCount: number }) => {
    setLastSummary(summary);
    setScreen('summary');
  };
  const handleCancelSession = () => setScreen('home');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {screen === 'home' && (
        <HomeScreen selectedMode={mode} onSelectMode={setMode} onStartSession={handleStartSession} />
      )}
      {screen === 'session' && (
        <SessionScreen mode={mode} onEnd={handleSessionEnd} onCancel={handleCancelSession} />
      )}
      {screen === 'summary' && (
        <SummaryScreen
          modeLabel={mode === 'mindful' ? 'Mindful Painting' : 'Explore & Learn'}
          intent={lastSummary.intent}
          notes={lastSummary.notes}
          guidanceCount={lastSummary.guidanceCount}
          onStartAnother={() => setScreen('session')}
          onClose={() => setScreen('home')}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  }
});

export default App;
