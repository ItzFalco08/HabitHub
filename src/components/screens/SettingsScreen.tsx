import { View } from 'react-native'
import React from 'react'
import { ExtendedMD3Theme } from '@/constants/paperThemes';
import { useTheme as usePaperTheme, Text } from 'react-native-paper';

const SettingsScreen = () => {
  const paperTheme = usePaperTheme() as ExtendedMD3Theme;

  return (
    <View style={{flex:1, backgroundColor: paperTheme.colors.surfaceContainerLowest}} className='text-white'>
      <Text>SettingsScreen</Text>

    </View>
  )
}

export default SettingsScreen;