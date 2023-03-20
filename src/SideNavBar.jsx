import { useState } from "react";
const items = [
    'One',
    'Two',
    'Three',
  ];
const filters = [
'One',
'Two',
'Three',
];
export const SideNavBar= (props) =>{
    const [log,setLog] = useState('Login');
    const createCheckbox = (label) => (
        <div className="check">
           <input type="checkbox" name={label} value={label}/>
           <label for={label}>{label}</label><br></br>
        </div>
     
      )
    const createExplorers = () => (
        items.map(createCheckbox)
    )
    const createFilters = () => (
        filters.map(createCheckbox)
    )
    return (
        <div className = "SideNavBar">
            <label id = "explore" className = "navH">Explore</label>   
            { 
                createExplorers()
            }     
            <label id = "Filter" className = "navH">Filter Details</label>
            { 
                createFilters()
            } 
            <button id = "Log" className = "linkButton" onClick = {()=>{
                log=== 'Login' ? props.onFormSwitch('Login'): <></>
                }}>{log}</button>
            <div>
            <button id = "Cart" ></button>
            <button id = "settings"></button>
            </div>
           
        </div>
    );
}

