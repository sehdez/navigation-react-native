import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStakcParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContex';

// interface RouterParams{
//     id    : number;
//     nombre: string;
// }
interface Props extends StackScreenProps<RootStakcParams, 'PersonaScreen'>{};

const PersonaScreen = ( { navigation, route }: Props ) => {

    // const { id, nombre } = route.params as RouterParams;
    const { id, nombre } = route.params;
    const { setUsername } = useContext( AuthContext )

    useEffect(() => {
      navigation.setOptions({
        title: nombre
      })
      setUsername(nombre)
    }, [])
    

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>
                {
                    JSON.stringify(route.params, null, 5)
                }
            </Text>
        </View>
    )
}

export default PersonaScreen