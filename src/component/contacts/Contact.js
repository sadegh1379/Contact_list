import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import { Link } from 'react-router-dom';
import axios from 'axios';

 class Contact extends Component {
     constructor(){
         super();
         this.state={

             showInfo:false
         }

     }
    showClick = ()=>{
        this.setState({showInfo : !this.state.showInfo});
    
    }
    
    deleteContact = async  (id , dispatch) =>{
       const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
         dispatch({ type:'DELETE_CONTACT' , payload:id});
       
    }
    render() {
        const {id ,name , phone , email }=this.props.contact;     
        return (
            <Consumer>
                {value=>{
                        const {dispatch} = value;
                        return(
                                
                                <div className="card card-body mb-3  bg-light">
                                <h4 className="mb-3">name : {name} <i onClick={this.showClick} style={{cursor:'pointer'}} className="fa fa-sort-down"></i>
                                
                                <i className="fa fa-times float-right text-danger"
                                onClick={this.deleteContact.bind(this,id , dispatch)} 
                                style={{cursor:'pointer'}}
                                ></i>

                                <Link to={`/contact/edit/${id}`}>

                                <i 
                                style={{float:'right',marginRight:'12px' , cursor:'pointer'}} className="fa fa-pencil">
                                </i>

                                </Link>

                                </h4>
                                
                                {
                                            this.state.showInfo?
                                            (<ul className="mb-3">
                                            <li className="list-group-item ">Email : {email}</li>
                                            <li className="list-group-item">Phone : {phone}</li>
                                            
                                            
                                            </ul>):null
                            }
                           
                        </div>
                        )
                }

                }
            </Consumer>

        )
    }
}

Contact.propTypes={
    contact:PropTypes.object.isRequired
  
}
export default Contact
