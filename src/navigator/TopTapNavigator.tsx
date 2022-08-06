import React from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';

import { colors } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
    const { top } = useSafeAreaInsets();
  return (
    <Tab.Navigator
        style={{ paddingTop:top }}
        
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={ ({route})=> ({
            tabBarStyle:{
                borderTopColor:'#fff',
                shadowColor:'transparent',
                elevation: 0
            },
            tabBarPressColor: colors.primaryColor,
            tabBarShowIcon:false,
            tabBarIndicatorStyle:{ backgroundColor: colors.primaryColor},
            tabBarIcon: ({ color, focused })=>{
                let iconName: string='';
                switch (route.name) {
                    case 'AlbumsScreen':
                        iconName = 'I-A'
                        break;

                    case 'ChatScreen':
                        iconName = 'I-C'
                        break;

                    case 'ContactsScreen':
                        iconName = 'I-O'
                        break;
                
                    default:
                        break;
                }
                return <Text style={{color}}>{iconName}</Text>
                }
        })}
        
    >
      <Tab.Screen options={{title : 'Album'   }} name="AlbumsScreen" component={AlbumsScreen} />
      <Tab.Screen options={{title : 'Chat'    }} name="ChatScreen" component={ChatScreen} />
      <Tab.Screen options={{title : 'Contacto'}} name="ContactsScreen" component={ContactsScreen} />

    </Tab.Navigator>
  );
}