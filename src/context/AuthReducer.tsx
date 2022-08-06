import { AuthState } from './AuthContex';

type AuthAction = 
    | { type: 'signIn' }
    | { type: 'signOut' }
    | { type: 'setFavoriteIcon', payload: string }
    | { type: 'setUsername', payload: string }


export const AuthReducer = ( state: AuthState, action: AuthAction ): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn:true,
                username:'no-username-yet'
            }
        case 'signOut':
            return{
                ...state,
                isLoggedIn:false,
                username: undefined,
                favoriteIcon:undefined
            }
        case 'setFavoriteIcon':
            return{
                ...state,
                favoriteIcon: action.payload
            }
        case 'setUsername':
            return{
                ...state,
                username: action.payload
            }
    
        default:
            return state
    }

}