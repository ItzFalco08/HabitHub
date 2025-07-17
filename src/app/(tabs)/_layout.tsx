import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const TabsLayout = () => {
  const themeStyles = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeStyles.colors.elevation.level1}}>
      <Tabs tabBar={() => <TabBar />} screenOptions={{ headerShown: false }} >
        <Tabs.Screen name="Home"/>
        <Tabs.Screen name="Explore"/>
        <Tabs.Screen name="Analytics"/>
        <Tabs.Screen name="Profile"/>
      </Tabs>
    </SafeAreaView>
  )
}

export default TabsLayout;