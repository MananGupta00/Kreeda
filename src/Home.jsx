import "./Home.css";

var prods = [{
    caption : "First product",
},{
    caption : "Second Product" 
},{
    caption : "Third Product" 
}]

let items=[]

const createExplorers = () => (
  items.map(createCheckbox)
)


// const createFilters = () => (
//   filters.map(createCheckbox)
// )
// const createCards = () => {
//   let count =0;
//   prods.map((prod)=>{
//     console.log(prod)
//     if(count%3==0){
//       return(

        
//       )
//     }
//     count ++;
//   }
//   )
// }

const createCheckbox = (label) => (
  <div className="check">
    <button name={label} value={label}/>
    <label htmlFor={label}>{label}</label><br></br>
  </div>

)

export const Home = ()=>{
    // Function to display home page of the website for customer.
    // It containes all the products and advertisements on the front.

    return (
        <div className="Home">
          <div className="slider">

            <span id="slide-1"></span>
            <span id="slide-2"></span>
            <span id="slide-3"></span>


            <div className="image-container">
              {/*ONly sliding images shall be present */}
              {/*Sticking images, resolve */}


              <a href= ""><img className="slide slide1" width="500" height="300" /></a>
              <a href= ""><img className="slide slide2" width="500" height="300" /></a>
              <a href= ""><img className="slide slide3" width="500" height="300" /></a>
            </div>
            
            <div className="buttons">

              <a href="#slide-1"> </a>
              <a href="#slide-2"> </a>


            </div>
          </div>


          {/* Slider page ends here*/}


          {/*********************************************************************************************************** */}

 {/* product page starts here*/}

          <div className="products">
          <div className = "prodRow">
             <div className="card">


             <a href={require("./images/cricketBat.jpg")} >
            <img src={require("./images/cricketBat.jpg")} alt="bat" height="300px"/>
            </a>
            <h1>Cricket Bat</h1>
            {/**Handle image and details reopening, resolve */}


            <p className="price">Rs. 8000</p>
            <p>Something about the product</p>


            <p><button >Add to Cart</button></p>
          </div>
          <div className="card">
          <a href={require("./images/football.jpg")}>


            <img src={require("./images/football.jpg")} alt="Mitre Football"  height="300px"/>
            </a>


            <h1>Mitre Football</h1>
            <p className="price">Rs. 12999</p>


            <p>Tough and flexible</p>
            <p><button >Add to Cart</button></p>


          </div>
    

          <div className="card">
          <a href = {require("./images/ttbat.jpg")}>


            <img src={require("./images/ttbat.jpg")} alt="TT BAT" height="300px"/>
            </a>
            <h1>Table Tennis Bat</h1>
            <p className="price">Rs. 2999</p>

            <p>Somme text about the bat</p>
            <p><button >Add to Cart</button></p>

          </div>
        </div>


        <div className = "prodRow">
             <div className="card">
             <a href={require("./images/tennisBall.jpg")} >


            <img src={require("./images/tennisBall.jpg")} alt="bat" height="300px"/>
            </a>
            <h1>Tennis Ball</h1>


            <p className="price">Rs. 2000</p>
            <p>Something about the product</p>


            <p><button >Add to Cart</button></p>
          </div>


          <div className="card">
          <a href={require("./images/tennisBat.jpg")}>

            <img src={require("./images/tennisBat.jpg")} alt="tennis" height="300px"/>
            </a>
            <h1>Tennis Racket</h1>


            <p className="price">Rs. 25999</p>
            <p>Tough and flexible</p>


            <p><button >Add to Cart</button></p>
          </div>

    
          <div className="card">
            <a href = {require("./images/lawnTennis.jpg")}>
              <img src={require("./images/lawnTennis.jpg")} alt="TT BAT" height="300px"/>
            </a>
            <h1>Lawn Tennis Bat</h1>


            <p className="price">Rs. 18999</p>
            <p>Somme text about the bat</p>
            <p><button >Add to Cart</button></p>
          </div>

        </div>


        <div className = "prodRow">
            <div className="card">
            <a href={require("./images/cricketBat.jpg")} >
            <img src={require("./images/cricketBat.jpg")} alt="bat" height="300px" />

            </a>
            <h1>Cricket Bat</h1>


            <p className="price">Rs. 8000</p>
            <p>Something about the product</p>
            <p><button >Add to Cart</button></p>
          </div>

          
          <div className="card">'
          
          
            <a href={require("./images/wickets.jpg")}>
            <img src={require("./images/wickets.jpg")} 
            alt="Mitre Football" 
            height="300px"/>
            </a>
            
            <h1>Wickets</h1>
            <p className="price">Rs. 999</p>
            <p>Tough and flexible</p>
            <p><button >Add to Cart</button></p>
          </div>

    
          <div className="card">
            
              <a href = {require("./images/cricketBall.jpg")}>
              <img src={require("./images/cricketBall.jpg")}
               alt="SG BALL" height="300px"/>
            </a>
            
            <h1>SG Leather Ball</h1>

            <p className="price">Rs. 2999</p>

            <p>Some text about the ball</p>
            <p><button >Add to Cart</button></p>
          </div>
          </div> 
          {/*Auto read feature, resolve */}
             
          </div>
        </div>


    )
}

