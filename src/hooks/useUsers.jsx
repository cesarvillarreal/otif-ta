import {useState, useEffect} from 'react';

const useUsers = () => {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [userInput, setUserInput] = useState('');
    
    useEffect(() => {

        const data = async () => {
            try {
                const response = await fetch(`https://otif-server-dot-otif-mx.uc.r.appspot.com/access${userInput ? ":"+userInput : '' }`)
                const result = await response.json();
                console.log(result);
                setUsers(result);
                setFilteredUsers(result);                
            } catch (error) {
                console.error(error)
            }
        }
        data();
    },[userInput])

    const filterUsers = (word) => {
        return setFilteredUsers(users.filter(user => user.username.includes(word)))
    }

    return {
        users,
        filteredUsers,
        userInput,
        setUserInput,
        filterUsers
    }
}
export default useUsers;