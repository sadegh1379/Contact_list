import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


 const Header = props =>{
   const {branding}=props;
   const myStyleLi ={
       
       textDecoration:'none',
       listStyleType:'none',
       float:'left'

   }
  
    return (
    
        <nav dir="rtl" className="navbar nav-expand-md navbar-dark bg-danger py-3 mb-3">
        <div className="container">
          <a href="/" className="navbar-brand h2" style={{textAlign:'right'}}>{branding}</a>
        </div>
            <div>
            <ul  className=" ml-auto mr-0">
            <li style={myStyleLi}><a href="http://sadeghakbari.gigfa.com" className="nav-link text-warning mx-4">About Me <i className="fa fa-user h3"></i></a></li>

            <li style={myStyleLi}><Link to="/about" className="nav-link text-warning mx-5">About<i className="fa fa-question h3"></i></Link></li>
                <li style={myStyleLi}><Link to="/contact/add" className="nav-link text-warning mx-4">Add <i className="fa fa-plus h3"></i></Link></li>
                <li style={myStyleLi}><Link to="/" className="nav-link text-warning mx-4">Home <i className="fa fa-home h3"></i></Link></li>

            </ul>
            </div>
        
        </nav>
    
    )
}
Header.defaultProps={
    branding:'My App'
}
Header.propTypes={
    branding:PropTypes.string.isRequired
}
export default Header;