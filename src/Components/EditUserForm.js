import React, { useState} from 'react';

function EditUserForm(props) 
{
    const [state, setState] = useState({
        username: props.user.username,
        email: props.user.email,
        password: props.user.password,
        country: props.user.country, 
        telephone: props.user.telephone,
    });

    // a function called to handle onchange event
    function handleOnChange(event) {
        //event target name - hold name of input
        //event target value - hold value of input

        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
      } 

      //function that is called when create new user button is clicked
      function handleSubmit(){
        //calls adduser function passed to userform component 
        // as a property from App component
         let user = {...state, id: props.user.id};
         props.updateUser(props.user.id, user);
         props.hideModal();
        
         // props.addUser(state);
      }

    return( <div>
<div className="container">
  <h2>Users Form</h2>
  <form className="form-horizontal">
    <div className="form-group">
      <label className="control-label col-md-1" for="username">Full Name:</label>
      <div className="col-md-3">
        <input 
            type="text" 
            className="form-control" 
            id="username" 
            placeholder="Enter your full name" 
            value={state.username} //value will the same as data in the state
            onChange={handleOnChange} // used to handle onchange
            name="username"/>
      </div>
    </div>

        <div className="form-group">
      <label className="control-label col-md-1" for="email">Email:</label>
      <div className="col-md-3">
        <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter email" 
            value={state.email} 
            onChange={handleOnChange} // used to handle onchange 
            name="email"/>
      </div>
    </div>
       <div className="form-group">
      <label className="control-label col-md-1" for="country">Country:</label>
      <div className="col-md-3">
        <input 
            type="text" 
            className="form-control"
            id="country"
            placeholder="Enter your country"
            value={state.country}
            onChange={handleOnChange} // used to handle onchange
            name="country"/>
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-md-1" for="country">Telephone:</label>
      <div className="col-md-3">
        <input 
            type="number" 
            className="form-control"
            id="number"
            placeholder="Enter your telephone number"
            value={state.telephone}
            onChange={handleOnChange} // used to handle onchange
            name="telephone"/>
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-md-1" for="pwd">Password:</label>
      <div className="col-md-3">          
        <input 
            type="password"
            className="form-control" 
            id="password"
            placeholder="Enter password" 
            value={state.password}
            onChange={handleOnChange} // used to handle onchange
            name="password"/>
      </div>
    </div>
    
    {/*creat new user button call handlesubmit function*/}
    <div className="form-group">        
      <div className="col-md-offset-1 col-md-2">
        <button 
        type="button" 
        onClick={handleSubmit}
        className="btn btn-default btn-primary">Create New User</button>
      </div>
    </div>
  </form>
</div>
</div>


    );

}
export default EditUserForm;