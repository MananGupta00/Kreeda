import React,{useState} from "react";
import './App.css';
import './Loader.css';
import {Login} from "./Login";
import {Register} from "./Register";
import {HeadLine} from "./HeadLine";
import {SideNavBar} from "./SideNavBar";
import {Home} from "./Home";
import {Loader} from "./Loader";
import {Contact} from "./Contact";
import { YoutubeEmbed } from "./Stream";
import {Seller} from "./Seller";
import {Cart} from "./Cart";


function App() {
  //This function renders the jsx files containing smaller components within the website
  //current form is a variable holding status of current forms
  //loading will be implemented for loading images and files

  const [currentForm, setCurrentForm] = useState('Home');
  const [prods, setProds] = useState('');
  //Note:- add loading functionality to images later

  const toggleForm = (formName) => {
        //function to switch between forms
        setCurrentForm(formName);
  }
  
  const changeProducts = (prods) => {
    //function to switch between forms
    setProds(prods);
}
  return (
    <>
    {/*Top part of customer side*/
    document.title = "KREEDA"}
    <HeadLine onFormSwitch={toggleForm}/>
    {/*Only if any form is open, open the loading effect*/}
    {currentForm==='Home' ?<></> :<Loader/>}


    <div className="App"  >
     {/*Main body of the site*/}
    <SideNavBar onFormSwitch={toggleForm} onExplore={changeProducts} />
    
      {
        //choose from the desired form as subjected by the state
        currentForm === 'Register' ? <><Register onFormSwitch={toggleForm}/>  </> : 
        currentForm === 'Login' ? <><Login onFormSwitch={toggleForm}/> </> :
        currentForm === 'Contact' ? <><Contact /> </>  : 
        currentForm === 'Sell' ? <><Seller /> </>  : 
        currentForm === 'Cart' ? <><Cart /> </>  : 
        currentForm === 'video' ?  <YoutubeEmbed embedId="wY6UyatwVTA" /> : <Home/> 
       
      }
    </div>
    </>
  );
}

export default App;
