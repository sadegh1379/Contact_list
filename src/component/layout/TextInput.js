import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';


 const TextInput = (props) => {
     const {lable , type , placeholder , name , value , onChange , error} = props;
    
    return (
            <div className="form-group">
                <label htmlFor="name">{lable}</label>
                <input 
                className={classnames('form-control',{'is-invalid':error})}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}

                />
                {error && (<div className="invalid-feedback">{error}</div>)}
                
            </div>
    )
}
TextInput.defualtProps={
    type:'text'
}
TextInput.propTypes={
    label:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
}
export default TextInput;
