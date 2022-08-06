import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';



import Tab2Screen from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { Platform, Text } from 'react-native';
import { TopTapNavigator } from './TopTapNavigator';
import { colors } from '../theme/appTheme';
import Tab1Screen from '../screens/Tab1Screen';

const TabIOS = createBottomTabNavigator();
const TabAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => {
    return Platform.OS === 'ios' 
        ? <TabsIOS />
        : <TabsAndroid />;
        // : <TabsIOS />
}

const TabsAndroid = () => {
    return (
        <TabAndroid.Navigator
        barStyle={{ backgroundColor: colors.primaryColor }}
            sceneAnimationEnabled={true}
            screenOptions={({ route })=> ({
                // tabBarActiveTintColor:'rgb(57, 48, 224)',
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarStyle:{
                    borderTopColor:'#f0f0f0',
                    // borderTopWidth: 0,
                    // elevation: 0
                },
                headerShown:false,
                tabBarIcon: ({ color, focused })=>{
                    let iconName: string='';
                    switch (route.name) {
                        case 'StackNavigator':
                            iconName = 'duplicate-outline'
                            break;
    
                        case 'TopTabNavigator':
                            iconName = 'ellipsis-horizontal-outline'
                            break;
    
                        case 'Tab1Screen':
                            iconName = 'color-palette-outline'
                            break;
                    
                        default:
                            break;
                    }
                    return <Text style={{color}}><Icon size={30} name={iconName} /></Text>
                    }
        
            })}
            
        >
            <TabAndroid.Screen options={{title: ''}} name="StackNavigator" component={StackNavigator} />
            <TabAndroid.Screen options={{title: ''}} name="TopTabNavigator" component={TopTapNavigator} />
            <TabAndroid.Screen options={{title: ''}} name="Tab1Screen" component={Tab1Screen} />
        </TabAndroid.Navigator>
    )
    
}

const TabsIOS = () => {
  return (
    <TabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor:'#fff',
        }}
        screenOptions={({ route })=> ({
            tabBarActiveTintColor:'rgb(57, 48, 224)',
            tabBarLabelStyle: {
                fontSize: 15
            },
            tabBarStyle:{
                borderTopColor:'#f0f0f0',
                // borderTopWidth: 0,
                // elevation: 0
            },
            headerShown:false,
            tabBarIcon: ({ color, focused, size })=>{
                let iconName: string='';
                switch (route.name) {
                    case 'StackNavigator':
                        iconName = 'I1'
                        break;

                    case 'TopTabNavigator':
                        iconName = 'I2'
                        break;

                    case 'Tab1Screen':
                        iconName = 'I3'
                        break;
                
                    default:
                        break;
                }
                return <Text style={{color}}>{iconName}</Text>
                }
    
        })}
        
    >
      {/* <Tab.Screen options={{title: 'Stack', tabBarIcon: ()=> <Text>Icono</Text> }} name="StackNavigator" component={StackNavigator} /> */}
      <TabIOS.Screen options={{title: 'Stack'}} name="StackNavigator" component={ StackNavigator } />
      <TabIOS.Screen options={{title:'Tab 2'}} name="TopTabNavigator" component={ TopTapNavigator } />
      <TabIOS.Screen options={{title: 'Tab 3' }} name="Tab1Screen"    component={ Tab1Screen } />
    </TabIOS.Navigator>
  );
}