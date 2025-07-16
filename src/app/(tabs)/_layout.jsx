import { useTheme } from "react-native-paper";
import { Tabs } from "expo-router" 

const TabsLayout = () => {
  const theme = useTheme();

  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
        tabBarStyle: { backgroundColor: theme.colors.surface }, 
      }}
    >
      <Tabs.Screen name="Home"/>
      <Tabs.Screen name="Profile"/>
    </Tabs>
  )
}

export default TabsLayout