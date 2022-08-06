import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContex';

const SettingsScreen = () => {
    const insets = useSafeAreaInsets();
    const { authState } = useContext( AuthContext );


    return (
        <View style = {{
            ...styles.globalMargin,
            marginTop:insets.top
            }}>
            <Text style={ styles.title } >Ajustes</Text>
            <Text> { JSON.stringify(authState, null, 4) } </Text>
            {
                authState.favoriteIcon && (
                    <Icon 
                        name={ authState.favoriteIcon } 
                        size={50} 
                        color={colors.primaryColor} 
                    />
                )
            }
            
        </View>

  )
}

export default SettingsScreen