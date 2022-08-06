import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { styles } from '../theme/appTheme';
const ChatScreen = () => {
  return (
    <View style = {styles.globalMargin }>
        <Text style = {styles.title }>Chat Screen</Text>
    </View>
  )
}

export default ChatScreen