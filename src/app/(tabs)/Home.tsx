import { View } from 'react-native'
import { Switch, Text, useTheme as usePaperTheme } from 'react-native-paper'
import React from 'react'
import { useTheme } from "@/context/useTheme"

const Home = () => {
  const themeStyle = usePaperTheme();
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{backgroundColor: themeStyle.colors.surface}} className='h-full pt-24'>
      <Text > home </Text>
      <Switch 
        value={theme === 'dark'}
        onValueChange={toggleTheme}
      />
    </View>
  )
}
 
export default Home