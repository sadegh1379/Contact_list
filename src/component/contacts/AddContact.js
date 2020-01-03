import React, { Component } from 'react';
import { Consumer } from '../../Context';
import TextInput from '../layout/TextInput'
import uuid from 'uuid';
import axios from 'axios';
 class AddContact extends Component {
    state={

        name:'',
        email:'',
        phone:'',
        error:{}
    }

    onStateChange=(e)=>{
            this.setState({[e.target.name]:e.target.value})
    }
     addContact =async (dispatch,e) =>{
         e.preventDefault();
         const {name , email , phone} = this.state;

         if(name === ""){
            this.setState({error:{name:'please enter name'}})
            return;
        }
        if(email === ""){
           this.setState({error:{email:'please enter email'}})
           return;
       }
       if(phone === ""){
           this.setState({error:{phone:'phone is email'}})
           return;
       }
         const contact={
             id:uuid.v4(),
             name,
             email,
             phone
         }
         const res = await axios.post('https://jsonplaceholder.typicode.com/users',contact)
          dispatch({type:"ADD_CONTACT",payload:res.data});
         
         this.setState({
             name:'',
             email:'',
             phone:''
         })
       this.props.history.push('/');  
     }
    render() {
        const {name , email , phone ,error} = this.state;

        return(
            <Consumer>
                {value =>{
                    const { dispatch } = value;
                        return (
                            <div>
                                 <h1 className="display-4 pb-3"><span className="text-danger pr-2 "> Add</span>Contact</h1>
                                <div className="card border-success mb-3">
                                    <div className="card-header">Add Contact</div>
                                    <div className="card-body">
                                        <form onSubmit={this.addContact.bind(this,dispatch)}>
                                            
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
                                                <input type="submit" value="Add Contact" className="btn mt-4 btn-block btn-success"/>
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

AddContact.defaultProps={
    name :'Sadegh',
    email:'sadeghakbari@gmail.com',
    phone : '09376770472'
}

export default AddContact;
