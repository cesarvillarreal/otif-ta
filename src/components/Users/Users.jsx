import React from 'react'
import Searcher from '../Searcher';
import useUsers from '../../hooks/useUsers';
import useLogin from '../../hooks/useLogin';
import styles from './Users.module.css'
import { Navigate } from 'react-router-dom';
const Users = () => {
    const { filteredUsers, userInput, setUserInput, filterUsers} = useUsers();
    const {userInformation} = useLogin();
    const isEmpty = Object.keys(userInformation).length === 0;

    if(isEmpty) return <Navigate to={'/login'} />
    return (
    <div>
        <Searcher userInput={userInput} setUserInput={setUserInput} filterUsers={filterUsers} />

        <table className={styles.table}>
            <thead>
            <tr>
                {
                filteredUsers.length > 0 && Object.keys(filteredUsers[0]).map((key,index) => <td key={index} className={styles.title}>{key.replace('_',' ')}</td>)
                }
            </tr>
            </thead>
            <tbody>
            { 
                filteredUsers.length > 0 && filteredUsers.map(
                    (user,index) => { 
                        return (
                            <tr key={index}>
                            {Object.values(user).map((attribute,index) => <td key={index}>{attribute}</td>)}
                            </tr>
                        )
                    }
                )
            }    
            </tbody>
        </table>
    </div>
  )
}

export default Users