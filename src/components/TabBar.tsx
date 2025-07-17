import { router, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import { BottomNavigation, useTheme } from 'react-native-paper';

const TabBar = () => {    
  const segments = useSegments();
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
      { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
      { key: 'explore', title: 'Explore', focusedIcon: 'compass', unfocusedIcon: 'compass-outline' },
      { key: 'analytics', title: 'Analytics', focusedIcon: 'chart-line', unfocusedIcon: 'chart-line-variant' },
      { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  // NOTE: WE MUST UPDATE THE VISUAL STATE/INDEX AFTER THE NAVIGATION TO AVOID ANIMATION RESETING IF PLAYED BEFORE NAVIGATION

  // CHANGE THE ROUTE
  function handleIndexChange(newIndex: number) {
    if (newIndex !== index) {
      let route = "/(tabs)/" + routes[newIndex].title;
      router.push(route as any);
    }
  };

  // UPDATE VISUAL STATE (INDEX)
  useEffect(() => {
    const currentRoute = segments[segments.length - 1];
    const routeIndex = routes.findIndex(route => route.title.toLowerCase() === currentRoute?.toLowerCase());

    if (routeIndex !== -1) {
      setIndex(routeIndex);
    }
  }, [segments, routes]);


  return (
    <BottomNavigation
      barStyle={{ backgroundColor: theme.colors.elevation.level1}}
      safeAreaInsets={{ bottom: 0 }}
      navigationState={{ index, routes }}
      onIndexChange={handleIndexChange}
      renderScene={() => null}
    />
  )
}

export default TabBar;