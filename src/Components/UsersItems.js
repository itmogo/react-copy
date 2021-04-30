
import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import EditUserForm from './EditUserForm';
// Represent a single user that will be displayed in
// the userlist component

function UsersItems(props){
    // accepts users properties and displays them withnin the 
    // userslist component

     const [isModalVisible, setShowModal] = useState(false);

    function showModal(){
        setShowModal(true);
    }

    function hideModal(){
        setShowModal(false)
    }

    return(         
            <div className="row back">
                <div className="col-md-2"><span>Username:</span><br />
                <div className="col-md-2 padd">{props.user.username}</div>
                </div>

                <div className="col-md-3 title "><span>Email:</span><br />
                <div className="col-md-3 padd">{props.user.email}</div>
                </div>

                <div className="col-md-2 title"><span>Country:</span><br />
                <div className="col-md-2 padd">{props.user.country}</div> 
                </div>

                 <div className="col-md-2 title"><span>Telephone:</span> <br />   
                <div className="col-md-2 padd">{props.user.telephone}</div>
                </div>

                <div className="col-md-3">
                <p className="col-md-3 title"><span>Action:</span>
                <div className="down">
                <button className="btn-success btn-xs" onClick={showModal} >Edit</button>
                
                {/*modal setup*/}

                <Modal show={isModalVisible} onHide={hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditUserForm 
                            user ={props.user}
                            updateUser={props.updateUser}
                            hideModal={hideModal}                         
                        />
                    </Modal.Body>
                </Modal>  
                
                <button className="btn-danger btn-xs" 
                onClick ={() =>{
                    props.delete(props.user.id);
                }}
                
                >Delete</button></div></p> 
                </div>  
                </div>
            );
        }
    
export default UsersItems;