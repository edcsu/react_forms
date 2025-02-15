import { useState } from 'react'
import { useInput } from '../hooks/useInpute'

export default function StateLogin() {
  const {value: emailValue, 
    handleInputBlur: handleEmailBlur, 
    handleInputChange: handleEmailChange} = useInput('')

  function handleSubmit(event) {
     event.preventDefault()
     
     setEnteredValues({
      email: '',
      password: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onBlur={handleEmailBlur}
            onChange={handleEmailChange} 
            value={emailValue} 
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
           id="password" 
           type="password" 
           name="password" 
           onChange={(event) =>handleInputChange('password', event.target.value)} 
           value={enteredValues.password} 
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
