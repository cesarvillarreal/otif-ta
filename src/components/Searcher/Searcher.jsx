import React, {useRef} from 'react'

export const Searcher = ({userInput, setUserInput, filterUsers}) => {
    const inputRef = useRef('');
    return (
    <form onSubmit={(e) => {
        e.preventDefault();
        setUserInput(inputRef.current.value)
        filterUsers(inputRef.current.value);
    }}>
        <input type="text" ref={inputRef}  />
        <button>Buscar</button>
    </form>
  )
}

export default Searcher;