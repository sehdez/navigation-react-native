import React, { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";


// Definir cómo información tendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string; 
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn:false
}

// Lo usaremos para decirle a React que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    signOut: () => void;
    setFavoriteIcon: (payload: string) => void;
    setUsername: (payload: string) => void;


}


// Crear el contexto 
export const AuthContext = createContext({} as AuthContextProps );

// Componente proveedor del estado
export const AuthProvider = ( { children }:any ) => {

    const [ authState, dispatch ] = useReducer( AuthReducer, authInitialState );

    const signIn = () => {
        dispatch ({ type:'signIn' })
    }
    const signOut = () => {
        dispatch ({ type:'signOut' })
    }
    const setFavoriteIcon = ( iconName: string ) => {
        dispatch ({ type:'setFavoriteIcon', payload: iconName })
    }
    const setUsername = ( username: string ) => {
        dispatch ({ type:'setUsername', payload: username })
    }

    return (
        <AuthContext.Provider
            value = {{
                authState,
                signIn,
                signOut,
                setFavoriteIcon,
                setUsername
             }}    
        >
            { children }
        </AuthContext.Provider>
    )
}
