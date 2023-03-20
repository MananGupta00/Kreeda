import React, {useState} from "react";
import Sha256 from './SHA-256.js';

export const Login = (props) => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        var hash = Sha256.hash(pass);
        console.log( 'hash',hash );
        setPass(hash);
    }
    
    return (
        <>
        <div className = "auth-form-container">
        <form  className= "login-form" onSubmit = {handleSubmit}>
        
            
            <input value={email} onChange = {(e) => setEmail(e.target.value)} type="email" placeholder = "Email" id = "emailId" />

            <input value={pass} onChange = {(b) => setPass(b.target.value)} type="password" placeholder = "Password" id = "PassId" />
           
            <button className="forgot" onClick = {()=>props.onFormSwitch('Register')}> Forgot Password </button>
            <br/>
            <button class='submit'> LOG IN</button>
        </form>
        <button className="linkButton" onClick = {()=>props.onFormSwitch('Register')}> Create new account </button>
        </div>
        
        </>
    )
}