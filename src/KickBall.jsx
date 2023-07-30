
export const KickBall = ()=> {
    // function to display a shadow football player image to reserve space
    function drawImage(){
        let shape= getShape();
        console.log(shape);
    }
    return(
        <>
        {
        console.log(drawImage())
        }
        <img alt = "football kick"
         className = "KickBall"
         src = {require("./images/football_kick.png")}/>
        </>
    )
}