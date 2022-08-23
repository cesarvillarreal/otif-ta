import {useState} from 'react';
import useLocalStorage from './useLocalStorage';
import { Navigate } from 'react-router-dom';
const useLogin = () => {

    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [userInformation, setUserInformation] = useLocalStorage('userInformation',{});
    
    const changeUser = (e) => {
        console.log(username)
        setUser(e.target.value)
    };
    const changePassword = e => setPassword(e.target.value);

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://otif-server-dot-otif-mx.uc.r.appspot.com/access/signin',{
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({username, password})
            })
            const result = await response.json();
            setError(result.results || null)
            setUserInformation(result);
            window.location = ''
        } catch (error) {
            // the BE is not returning a status code
            console.log(error);
            setError(error)
        }
    }
    return {
        username,
        password,
        error,
        changeUser,
        changePassword,
        login,
        userInformation,
        setUserInformation
        
    }
}
export default useLogin;