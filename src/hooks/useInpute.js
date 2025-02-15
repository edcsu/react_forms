import { useState} from 'react'
export function useInput(defaultValue, validationFx) {
    const [enteredValue, setEnteredValue] = useState(defaultValue)

    const [didEdit, setDidEdit] = useState(false)
    
    const valueIsValid = validationFx(enteredValue)

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
        handleInputChange,
        hasError: didEdit && !valueIsValid
    }
}