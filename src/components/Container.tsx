import { View } from 'react-native';
import React from 'react';
import {useTheme as usePaperTheme} from "react-native-paper";

const Container = ({children} : {children: React.ReactNode}) => {
    const themeStyles = usePaperTheme();

    return (
        <View style={{padding: 16, flex: 1, backgroundColor: themeStyles.colors.surface}}>
        {children}
        </View>
    )
}

export default Container