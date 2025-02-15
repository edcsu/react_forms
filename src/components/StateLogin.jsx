import { useInput } from '../hooks/useInpute'

import { isEmail, isNotEmpty, hasMinLength} from '../util/validation'

export default function StateLogin() {
  const {value: emailValue, 
    handleInputBlur: handleEmailBlur, 
    handleInputChange: handleEmailChange,
    hasError: emailHasError} = useInput('', (value) => {
      return isNotEmpty(value) && isEmail(value)
    })

  const {value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError} = useInput('', (value) => hasMinLength(value, 6))
  
    function handleSubmit(event) {
     event.preventDefault()
     
    if (emailHasError || passwordHasError) {
      return
    }
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
           onBlur={handlePasswordBlur}
           onChange={handlePasswordChange} 
           value={passwordValue} 
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
