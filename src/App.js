import React,{useState} from "react";
import './App.css';

import {Login} from "./Login";
import {Register} from "./Register";
import {HeadLine} from "./HeadLine";
import {SideNavBar} from "./SideNavBar";
import {Home} from "./Home";
import {KickBall} from "./KickBall";
function App() {
  
  const [currentForm, setCurrentForm] = useState('Home');
  
  const toggleForm = (formName) => {
        setCurrentForm(formName);
  }

  return (
    <>
    
    <HeadLine />
   
    
    <div className="App">
    <SideNavBar onFormSwitch={toggleForm}/>
      {
        currentForm === 'Register' ? <><KickBall/><Register onFormSwitch={toggleForm}/>  </> : 
          currentForm === 'Login' ? <><KickBall/><Login onFormSwitch={toggleForm}/> </> : <Home/>
        
      }
   
    </div>

    
    </>
  );
}

export default App;
