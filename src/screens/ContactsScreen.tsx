import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContex';
const ContactsScreen = () => {
    const { authState, signIn } = useContext(AuthContext);
  return (
    <View style = {styles.globalMargin }>
        <Text style = {styles.title }>Contact Screen</Text>
         { 
            (authState.isLoggedIn)
            ? <Text style= {styles.title}> Bienvenido { authState.username } </Text> 
            : <Button title = 'SignIn' onPress={signIn} /> 
        }
    </View>
  )
}

export default ContactsScreen