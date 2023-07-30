
// Code to implement logo on the topmost part of page
export const HeadLine= ()=>{
    return (
        <div className = "HeadLine">
            <center>
                <a href=''> 
                <img alt = "Logo here"
                 src= {require('./images/kreeda-high-resolution-logo-color-on-transparent-background.png')} 
                 height = '80'></img>
           
                </a>
                 </center>
        </div>

    )
}