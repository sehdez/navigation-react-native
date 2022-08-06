import { StyleSheet } from "react-native";

export const colors = {
    primaryColor: '#0e096a'
}

export const styles = StyleSheet.create({
    globalMargin : {
        marginHorizontal:20
    },
    title : {
        fontSize: 30,
        marginBottom:10,
        color:'black'
    },
    botonGrande: {
        margin:20,
        borderRadius: 100,
        height:50,
        width:50,
        backgroundColor:'skyblue',
        justifyContent:'center',
        alignItems:'center',
        color:'white'
    },
    avatar: {
        backgroundColor:'#fafafa',
        marginTop: 30,
        alignSelf:"center",
        borderRadius: 100,
        width:150,
        height:150
    },
    menuContainer: {
        marginTop: 40
    },
    opcionesMenu: {
        alignItems: 'center',
        padding: 15,
        // backgroundColor:'#fff',
        marginBottom:10
    },
    menuTexto:{
        fontSize:30,
        color: 'white'
    }
})