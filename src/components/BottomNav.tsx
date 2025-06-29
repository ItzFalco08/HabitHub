import HomeScreen from '@/components/screens/HomeScreen';
import { useState } from 'react';
import SettingsScreen from './screens/SettingsScreen';
import { ExtendedMD3Theme } from '@/constants/paperThemes';
import {useTheme as usePaperTheme, BottomNavigation} from 'react-native-paper';

const BottomNav = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'home', title: 'home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'settings', title: 'settings', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' },
    ])
  const paperTheme = usePaperTheme() as ExtendedMD3Theme;

    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        settings: SettingsScreen,
    })

    return (
        <BottomNavigation
            navigationState={{
                index,
                routes
            }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{maxHeight: 80, minHeight: 60, height: "10%", backgroundColor: paperTheme.colors.surface}}
            
        />
    )
}

export default BottomNav;