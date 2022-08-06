import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContex';

interface Props {
    iconName: string;
}

const TouchableIcon = ({ iconName }: Props) => {
    const { setFavoriteIcon } = useContext(AuthContext)
    return (
        <TouchableOpacity
            onPress={ () => setFavoriteIcon(iconName) }
        >
            <Icon 
                name={iconName} 
                size={50} 
                color={colors.primaryColor} 
            />
        </TouchableOpacity>       
    )
}

export default TouchableIcon