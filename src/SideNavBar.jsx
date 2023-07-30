import { useState } from "react";
const items = [
    'One',
    'Two',
    'Three',
    'Four'
  ];
const filters = [

];




export const SideNavBar= (props) =>{
    const [log,setLog] = useState('Login');
    const createCheckbox = (label) => (
        <div className="check">
           <button name={label} value={label}/>
           <label htmlFor={label}>{label}</label><br></br>
        </div>
     
      )
;


    const createExplorers = () => (
        items.map(createCheckbox)
    )


    const createFilters = () => (
        filters.map(createCheckbox)
    )
    
    return (
        <div className = "SideNavBar">
            <label id = "explore" className = "navH">Explore</label>   

            <button id = "WatchLive"

             onClick={()=>props.onFormSwitch('video')} > 
             
             Watch Live
             
             </button>  
             
              
            {/* <label id = "Filter" className = "navH">Filter Details</label>
            { 
                createFilters()
            }  */}


            <button id = "Log" className = "linkButton" onClick = {()=>{
                log=== 'Login' ? props.onFormSwitch('Login'): <></>
                }}>{log}</button>

            {/*   Sell button here   */}

            <button id = "Sell" onClick = {()=>props.onFormSwitch('Sell')
                }>
                Want to Sell?
            </button>


            {/*small buttons here */}
            <div>
            <button id = "Cart" onClick={()=>props.onFormSwitch('Cart')}></button>
            <button id = "settings" onClick={()=>props.onFormSwitch('Contact')}></button>
            </div>
           
        </div>
    );
}

