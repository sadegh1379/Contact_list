import React from 'react';
import About from './component/pages/About';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Header from './component/layout/Header';
import Contacts from './component/contacts/Contacts';
import { Provider } from '../src/Context';
import EditContact from './component/contacts/EditContact';
import NotFound from './component/pages/NotFound'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AddContact from './component/contacts/AddContact';
import './App.css';

function App() {
 
  return (

    <Provider>
           <Router>
                    <div className="App">
                       <Header branding="Contact List Manager"/>        
                         <div className="container">

                                <Switch>
                                    <Route exact path="/" component={Contacts}></Route>
                                    <Route exact path="/about" component={About}></Route>
                                    <Route exact path="/contact/add" component={AddContact}></Route>
                                    <Route exact path="/contact/edit/:id" component={EditContact}></Route>
                                    <Route component={NotFound}></Route>
                                    
                                </Switch>

                            </div>
                    </div>
             </Router>
    </Provider>
    
  );
}

export default App;
