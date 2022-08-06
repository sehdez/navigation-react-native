import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContex';

const AlbumsScreen = () => {

    const { authState, signOut } = useContext(AuthContext);


  return (
    <View style = {styles.globalMargin }>
        <Text style = {styles.title } >Albums Screen</Text>
        { 
            (authState.isLoggedIn)
                && <Button title = 'SignOut' onPress={signOut} /> 
        }
    </View>
  )
}

export default AlbumsScreen