import logo from './logo.svg';
import './App.css';
import UsersForm from './Components/UsersForm';
import UsersList from './Components/UsersList';
import { useState} from 'react';
import EditUserForm from './Components/EditUserForm';


function App() {

  const [users, setUsers] = useState([]);
  const [userTopUpdate, setUserToUpdate] = useState({

    username: '',
    email: '',
    country: '',
    telephone: '',
    password:'',
  });
  //this is a helper function that adds a new user to our users state
  //we later pass this function to userform component to be called anytime
  //we want to create a new user

  function addUser(user){
    setUsers([...users, user]);
  }

  function deleteUser(id){
    let newUsers = users.filter((user) => user.id !==id);
    setUsers(newUsers);
  }

  function  updateUser (id, updatedUserInfo){
    let newUsers = users.map((user) => {
      if (user.id === id){
        return updatedUserInfo;
      }
        return user;
    })
      setUsers(newUsers);
  }

 

  
  return (
    <div className="container border">
      <div className="row">
        <div className="col-md-4">          
          {/* we pass the addUser function to userform as a props to be called whenever
          we want to create a new user */}
          <UsersForm  addUser={addUser} />
        </div>
        
        <div className="col-md-8">
          {/* we pass the users down to userlist component to be displayed */}
          <UsersList 
          allUsers={users} 
          updateUser={updateUser}
          delete={deleteUser}

          />          
        </div>
      </div>
      </div> 
  );
}

export default App;
