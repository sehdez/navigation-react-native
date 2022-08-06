import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
    const icons = [
        {name:'airplane-outline'},
        {name:'attach-outline'},
        {name:'bonfire-outline'},
        {name:'calculator-outline'},
        {name:'chatbubble-outline'},
        {name:'images-outline'},
        {name:'leaf-outline'},
        
    ]
    return (
    <View style = {styles.globalMargin }>
        <Text style = {styles.title }>Iconos</Text>
        <Text>
            { icons.map( ( {name}, index ) => <TouchableIcon key={index} iconName = {name} /> ) }
        </Text>
        


    </View>
    
  )
}

export default Tab1Screen