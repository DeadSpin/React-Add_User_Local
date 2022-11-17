import { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser/AddUser';
import ListUsers from './Components/Users/ListUsers/ListUsers';

function App() {
  
  const [userList, setUserList] = useState('')
  const setNewUser = data => {
    setUserList(prevState => {
      return [ data, ...prevState ]
    })
  }

  return (
    <>
      <AddUser onAddUser={setNewUser}/>
      <ListUsers userListData={userList}/>
    </>
  );
}

export default App;
