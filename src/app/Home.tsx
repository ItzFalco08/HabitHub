import { useTheme } from '@/context/useTheme';
import React, { useEffect } from 'react';
import { Switch, Text, View } from 'react-native';

const Home = () => {
  const {toggleTheme, theme} = useTheme();

  useEffect(()=>{
    console.log('Current theme:', theme);
  },[theme])

  return (
    <View className='bg-background text-foreground'>
      <Text>Home</Text>
      <Switch
        className='mt-10 '
        value={theme === 'dark'}
        onValueChange={toggleTheme}
      />
    </View>
  )
}

export default Home