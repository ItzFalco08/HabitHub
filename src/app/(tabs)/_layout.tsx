import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";

const TabsLayout = () => {

  return (
    <Tabs tabBar={() => <TabBar />} screenOptions={{ headerShown: false }} >
      <Tabs.Screen name="Home"/>
      <Tabs.Screen name="Profile"/>
    </Tabs>
  )
}

export default TabsLayout