// Cart implmentation done by Manan Gupta, 2022IS06


export const Cart=(props)=>{
    let items= [{}]
    function createItems(){

    }
    return(

      
        <div className = "cart-form-container">
            <form id = "CartForm"
            action="#"
            >
            <h2>Your Shopping Cart</h2>
            
            {
                createItems()
            }



            <br></br>  
            <textarea id = "address_area" placeholder="Delivery address?"></textarea>
            <br></br>
            <button> Go to payment</button>
          </form>
        </div>
    )
}