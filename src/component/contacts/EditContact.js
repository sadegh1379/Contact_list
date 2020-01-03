import React, { Component } from 'react';
import { Consumer } from '../../Context';
import TextInput from '../layout/TextInput'
import uuid from 'uuid';
import axios from 'axios';
 class EditContact extends Component {
    state={

        name:'',
        email:'',
        phone:'',
        error:{}
    }

    onStateChange=(e)=>{
            this.setState({[e.target.name]:e.target.value})
    }
    UpdateContact = async (dispatch ,e)=>{
        e.preventDefault();
        const {id} = this.props.match.params;
        const {name , email , phone} = this.state;
        if(name === ""){
            this.setState({error:{name:'Name is required'}});
            return;
        };
        if(email === ""){
            this.setState({error:{email:'Email is required'}});
            return;
        };
        if(phone === ""){
            this.setState({error:{phone:'Name is required'}});
            return;
        };
         
        const data = {
            name,
            id,
            phone,
            email
        }

        const res =await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, data);


        dispatch({type:'UPDATE_CONTACT' , payload:res.data});

        this.setState({
            name:'',
            phone:'',
            email:''
        });

        this.props.history.push('/');
    }
    
    async componentDidMount(){
        const {id} = this.props.match.params; 
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;

        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone,
            error:{}
        });
    }


    
    render() {
        const {name , email , phone ,error} = this.state;

        return(
            <Consumer>
                {value =>{
                    const { dispatch } = value;
                        return (
                            <div>
                                 <h1 className="display-4 pb-3"><span className="text-danger pr-2 "> Edit</span>Contact</h1>
                                <div className="card border-success mb-3">
                                    <div className="card-header">Add Contact</div>
                                    <div className="card-body">
                                        <form onSubmit={this.UpdateContact.bind(this,dispatch)}>
                                            
                                           <TextInput
                                           label="name"
                                           placeholder="Enter Name..."
                                           type="text"
                                           name="name"
                                           onChange={this.onStateChange}
                                           value={name}
                                           error={error.name}

                                           /> 
                                           
                                           <TextInput
                                           label="email"
                                           placeholder="Enter Email..."
                                           type="email"
                                           name="email"
                                           onChange={this.onStateChange}
                                           value={email}
                                           error={error.email}

                                           />
                                            <TextInput
                                           label="phone"
                                           placeholder="Enter phone..."
                                           type="phone"
                                           name="phone"
                                           onChange={this.onStateChange}
                                           value={phone}
                                           error={error.phone}

                                           /> 
                                         
                                          

                                            <div>
                                                <input type="submit" value="Update Contact" className="btn mt-4 btn-block btn-success"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )

                }}
            </Consumer>
        )
       
    }
}



export default EditContact;
