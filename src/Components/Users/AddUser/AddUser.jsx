import { useState } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModel from '../../UI/ErrorModel/ErrorModel';
import styles from './AddUser.module.css'

const AddUser = props => {

  const userData = {
    username : '',
    age : ''
  }
  const error = {}

  const [userInput, setUserInput] = useState(userData)
  const [isValid, setIsValid] = useState(false)
  const [errorField, setErrorField] = useState('')

  const onChangeHandler = event => {
    setUserInput(prevState => {
      return {...prevState, [event.target.name]: event.target.value }
    })
    if(errorField.indexOf(event.target.name) >= 0)
      errorField.splice(errorField.indexOf(event.target.name), 1)
  }

  const onFormSubmit = event => {
    event.preventDefault()
    const check = Object.keys(userInput).filter(key => userInput[key] === null || userInput[key] === undefined || userInput[key] === "" || +userInput[key] < 1);
    setErrorField(check)
    if(check.length === 0) {
      props.onAddUser(userInput)
      setUserInput(userData)
    }
    else {
      let errorLabel = ''
      if(check.length === 1)
        errorLabel = check.slice(0)
      else
        errorLabel = check.slice(0, -1).join(', ') + ', and ' + check.slice(-1)

      error.title = 'Invalid input!'
      error.message = 'Please enter valid input in ' + errorLabel + ' (non-empty value)'
      if(!check.includes('username') && userInput['age'] !== '' && +userInput['age'] < 1) {
        error.message = 'Please enter age < 0'
      }
      setIsValid(error)
    }
  }

  return (
    <div>
    <Card className={styles.input}>
      <form onSubmit={onFormSubmit}>
        <label>Username</label>
        <input type="text" name='username' className={`${errorField.includes('username') && styles.invalid }`} value={userInput.username} onChange={onChangeHandler} />
        <label>Age (Year)</label>
        <input type="number" name='age' className={`${errorField.includes('age') && styles.invalid }`} value={userInput.age} onChange={onChangeHandler}/>

        <Button>Add User</Button>
      </form>
    </Card>
    {isValid && <ErrorModel error={isValid} closeModel={setIsValid}/>}
    </div>
  )
}

export default AddUser;