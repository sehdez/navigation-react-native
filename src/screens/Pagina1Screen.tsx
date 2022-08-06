import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {
    
  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>Página 1</Text>
        <Button 
            title='Ir a página 2'
            onPress={()=> navigation.navigate('Pagina2Screen') }
        />
        <View style={{ flexDirection:'row', justifyContent: 'space-between' }}>
            <TouchableOpacity 
            style={ styles.botonGrande }
            onPress={()=> navigation.navigate('PersonaScreen',{
                id:1,
                nombre: 'Chinesse'
            } ) }
            >
                <Text>Pedro</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={ styles.botonGrande }
                onPress={()=> navigation.navigate('PersonaScreen',{
                    id:2,
                    nombre: 'Blis'
                } ) }
                >
                <Text>Blis</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
