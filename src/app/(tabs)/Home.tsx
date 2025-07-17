import Container from "@/components/Container"
import { useTheme } from "@/context/useTheme"
import React from 'react'
import { Switch, Text } from 'react-native-paper'

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Text className="text-2xl"> home </Text>
      <Switch 
        value={theme === 'dark'}
        onValueChange={toggleTheme}
      />
    </Container>
  )
}
 
export default Home