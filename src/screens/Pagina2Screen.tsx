import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Pagina2Screen = ( { navigation }: Props ) => {
    // const navigator = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            // title: 'Chingón',
            // headerBackTitle: 'Regresar xd'
        })

    }, [])


    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Página 2</Text>
            <Button
                title = 'Ir a página 3'
                onPress={ () => navigation.navigate( 'Pagina3Screen' )}
            />
        </View>
  )
}
