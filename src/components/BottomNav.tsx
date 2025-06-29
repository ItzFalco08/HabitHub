import HomeScreen from '@/components/screens/HomeScreen';
import { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import SettingsScreen from './screens/SettingsScreen';

const BottomNav = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'home', title: 'home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'settings', title: 'settings', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' },
    ])

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
            barStyle={{maxHeight: 80, minHeight: 60, height: "10%"}}
            
        />
    )
}

export default BottomNav;