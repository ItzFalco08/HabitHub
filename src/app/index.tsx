import BottomNav from '@/components/BottomNav';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme as usePaperTheme } from 'react-native-paper'; 

export default function Home() {
    const paperTheme = usePaperTheme(); // Get Paper theme colors
  
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: paperTheme.colors.surface }}>
      <BottomNav/>
    </SafeAreaView>
  );
}


