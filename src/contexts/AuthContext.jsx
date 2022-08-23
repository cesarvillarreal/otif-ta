import React, {useContext, createContext} from 'react'
// import useLocalStorage from '../hooks/useLocalStorage';
import useLogin from '../hooks/useLogin';

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    // const {userInformation} = useLogin();
    const {username, password,error, changeUser, changePassword, login, userInformation} = useLogin();

    return (
        <AuthContext.Provider value={{username, password,error, changeUser, changePassword, login, userInformation}} >
            {children}
        </AuthContext.Provider>
    )
}
