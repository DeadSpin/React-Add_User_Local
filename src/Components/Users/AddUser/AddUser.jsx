import { useState, useRef } from 'react';
import Wrapper from '../../Helper/Wrapper';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModel from '../../UI/ErrorModel/ErrorModel';
import styles from './AddUser.module.css'

const AddUser = props => {

  const inputUserName = useRef()
  const inputUserAge = useRef()
  const [isValid, setIsValid] = useState(false)

  const onFormSubmit = event => {
    event.preventDefault()
    const userName = inputUserName.current.value
    const userAge = inputUserAge.current.value
    const error = {}
    error.title = 'Invalid input!'
    if(userName.trim().length === 0 && userAge.trim().length === 0)
      error.message = 'Please enter valid input in username and age (non-empty value)'
    else if(userName.trim().length === 0)
      error.message = 'Please enter valid input in username (non-empty value)'
    else if(userAge.trim().length === 0)
      error.message = 'Please enter valid input in age (non-empty value)'
    else if(+userAge < 1)
      error.message = 'Please enter age greater than ' + userAge
    
    if(error.message && error.message.length > 0)
      setIsValid(error)
    else {
      const userInput = {
        username : userName,
        age : userAge
      }
      props.onAddUser(userInput)
      inputUserName.current.value = ''
      inputUserAge.current.value = ''
    }
  }

  return (
    <Wrapper>
      <Card className={styles.input}>
        <form onSubmit={onFormSubmit}>
          <label>Username</label>
          <input type="text" name='username' ref={inputUserName} className={`${(inputUserName.current.value === '' && isValid) && styles.invalid} `} />
          <label>Age (Year)</label>
          <input type="number" name='age' ref={inputUserAge} className={`${(inputUserAge.current.value === '' && isValid) && styles.invalid} `} />

          <Button>Add User</Button>
        </form>
      </Card>
      {isValid && <ErrorModel error={isValid} closeModel={setIsValid}/>}
    </Wrapper>
  )
}

export default AddUser;