import { useState} from 'react'
export function useInput(defaultValue) {
    const [enteredValue, setEnteredValue] = useState(defaultValue)

    const [didEdit, setDidEdit] = useState(false)
    
    function handleInputChange(event) {
        setEnteredValue(event.target.value)
        setDidEdit(true)
    }

    function handleInputBlur() {
        setDidEdit(true)
    }

    return {
        value: enteredValue,
        handleInputBlur,
        handleInputChange
    }
}