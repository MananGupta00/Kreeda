import React, {useState} from "react";


export const Register = (props) => {
    const [Name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit = (e) => {

    }
    return (
        <div className = "auth-form-container">
        <form className= "register-form" onSubmit = {handleSubmit}>
            <label htmlFor = "name">Name</label>
            <input value={Name} onChange = {(e) => setName(e.target.value)} type="text" placeholder = "yourname" id = "name" />

            <label htmlFor = "emailId">Email</label>
            <input value={email} onChange = {(e) => setEmail(e.target.value)} type="email" placeholder = "youremail@gmail.com" id = "emailId" />

            <label htmlFor = "PassId">Password</label>
            <input value={pass} onChange = {(e) => setPass(e.target.value)} type="password" id = "PassId" />
            
            <button class='submit'> Register</button>
        </form>
        <button className= "linkButton" onClick = {()=>props.onFormSwitch('Login')}> Already a user? Log in here</button>
        </div>
    )
}