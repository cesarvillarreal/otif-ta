import React from 'react'
import styles from './Login.module.css';
import { useAuth } from '../../contexts/AuthContext';
import useLogin from '../../hooks/useLogin';
import { Navigate } from 'react-router-dom';
const Login = () => {
    const {username, password,error, changeUser, changePassword, login} = useAuth();
    const {userInformation} = useLogin();
    const isEmpty = Object.keys(userInformation).length === 0;

    if(!isEmpty) return <Navigate to={'/'} />
    
  return (
    <form>
        {error && <p className={styles.error}>{error}</p>}
        <input type="text" value={username} onChange={ changeUser} />
        <input type="password" value={password} onChange={changePassword} />
        <button onClick={login}>Enviar</button>
    </form>
  )
}

export default Login