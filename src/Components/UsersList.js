import React, {useState} from 'react';
import UsersItems from './UsersItems';


// component display all users in our state frin App js
function UsersList (props){

    return (
        
        <div>
            {/* we loop through all the users and for every user,
         we display a UserItem component. We also pass the user as a prop
         to UserItem so that we can display it */}
            <h2>Users List</h2>
            {/*loop all users*/}
            {props.allUsers.map((user) => (           
               <UsersItems
                    user={user}
                    delete={props.delete}
                    updateUser={props.updateUser}  
                                       
                />
            ))}
        </div>
         
    );
}

export default UsersList;