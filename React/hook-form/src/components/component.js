import React, { useState } from  'react';

    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");  
    
    return(
        <form>
            <div className='input-area'>
                <label>First Name </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={ firstName } />
            </div>
            <div className='input-area'>
                <label>Last Name </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } value={ lastName } />
            </div>
            <div className='input-area'>
                <label>Email </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email } />
            </div>
            <div className='input-area'>
                <label>Password </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password } />
            </div>
            <div className='input-area'>
                <label>Confirm Password </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value={ confirmPassword } />
            </div>

            <div className='bottom-area'>
                <p className='bottom-header'>Your form data:</p>
                <p className='bottom-content'><span className='content-label'>First name: </span><span className='content-data'>{ firstName }</span></p>
                <p className='bottom-content'><span className='content-label'>Last name: </span><span className='content-data'>{ lastName }</span></p>
                <p className='bottom-content'><span className='content-label'>Email: </span><span className='content-data'>{ email }</span></p>
                <p className='bottom-content'><span className='content-label'>Password: </span><span className='content-data'>{ password }</span></p>
                <p className='bottom-content'><span className='content-label'>Password confirm: </span><span className='content-data'>{ confirmPassword }</span></p>
            </div>
        </form>
    );
};
    
export default UserForm;