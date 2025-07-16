import { router, useSegments } from 'expo-router';
import { useState, useEffect } from 'react';
import { BottomNavigation } from 'react-native-paper';

const TabBar = () => {    
  const segments = useSegments();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
      { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
      { key: 'explore', title: 'Explore', focusedIcon: 'compass', unfocusedIcon: 'compass-outline' },
      { key: 'analytics', title: 'Analytics', focusedIcon: 'chart-line', unfocusedIcon: 'chart-line-variant' },
      { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  // Sync tab index with current route to preserve animations
  useEffect(() => {
    const currentRoute = segments[segments.length - 1];
    const routeIndex = routes.findIndex(route => route.title.toLowerCase() === currentRoute?.toLowerCase());
    if (routeIndex !== -1) {
      setIndex(routeIndex);
    }
  }, [segments, routes]);

  function handleIndexChange(newIndex: number) {
    // Only navigate if it's actually a different tab
    if (newIndex !== index) {
      let route = "/(tabs)/" + routes[newIndex].title;
      router.push(route as any);
    }
  }

  return (
    <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={handleIndexChange}
        renderScene={() => null}
    />
  )
}

export default TabBar;