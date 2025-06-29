import { View } from 'react-native'
import React from 'react'
import { useTheme } from '@/context/useTheme';

interface ThemeContainerProps {
    children: React.ReactNode;
}

const ThemeContainer = ({children}: ThemeContainerProps) => {
    let isDark:boolean = useTheme().theme === 'dark'; // === (with type) == (no type, only equality check)

    return (
        <View className={`flex-1 ${isDark && 'dark'}`}>
            {children}
        </View>
    )
}

export default ThemeContainer;