import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image } from 'react-native';

import { StackNavigator } from './StackNavigator';
import { colors, styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const  MenuLateral = () =>  {
    const { width } = useWindowDimensions();
    return (
    <Drawer.Navigator
    screenOptions={{ 
        headerStyle:{
            backgroundColor: colors.primaryColor,
        },
        drawerLabelStyle: {
            color:'#fff'
        },
        drawerType : (width >= 768) ? 'permanent' :'front' ,
    }}
    drawerContent={(props) => <MenuInterno {...props} /> }
    >
      <Drawer.Screen options={{title:''}} name="Tabs" component={Tabs} />
      <Drawer.Screen options={{title:''}} name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation } : DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView 
        style = {{backgroundColor: colors.primaryColor}}>
            <View >
                {/* Imagen del menú */}
                <Image
                    style = {styles.avatar}
                    source={{uri:'https://lh3.googleusercontent.com/a-/AFdZucq_uUoGdwrrd3n3ShaERjO9jJGy1p18hrYXRYkR=s288-p-rw-no'}}
                />
                <View style = { styles.menuContainer } >
                    <TouchableOpacity 
                    style = { styles.opcionesMenu } 
                    onPress = { () => navigation.navigate('StackNavigator')}
                    >
                        <Text style = { styles.menuTexto }>Navegación</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style = { styles.opcionesMenu } 
                    onPress = { () => navigation.navigate('SettingsScreen')}
                    >
                        <Text style = { styles.menuTexto }>Ajustes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    );
}


// const Header = ({ navigation }: Drawer)