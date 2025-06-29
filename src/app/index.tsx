import BottomNav from '@/components/BottomNav';
import ThemeContainer from '@/components/ThemeContainer';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  
  return (
    <ThemeContainer>
      <SafeAreaView className='flex-1 bg-background'>
        <BottomNav/>
      </SafeAreaView>
    </ThemeContainer>
  );
}
