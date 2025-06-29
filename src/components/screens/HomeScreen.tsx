import { useTheme } from '@/context/useTheme';
import React from 'react';
import { View } from 'react-native';
import { Button, Switch, Text, useTheme as usePaperTheme } from 'react-native-paper';

// Import our extended theme type
import type { ExtendedMD3Theme } from '@/constants/paperThemes';

const HomeScreen = () => {
  const { theme, toggleTheme } = useTheme(); 
  // Type cast to our extended theme that includes the new colors
  const paperTheme = usePaperTheme() as ExtendedMD3Theme;
  
  return (
    <View style={{ backgroundColor: paperTheme.colors.surfaceContainerLowest }} className='p-4 flex-1'>
      <Text style={{ color: paperTheme.colors.onBackground }}>
        Home - current theme: {theme}
        {"\n"}
      </Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={toggleTheme}
        style={{ marginVertical: 10 }}
      />

    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
      Press me
    </Button>
    </View>
  );
};

export default HomeScreen;
