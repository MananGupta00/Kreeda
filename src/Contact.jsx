
export const Contact=(props)=>{
    return(

      
        <div className = "auth-form-container">
          <form id = "ContactForm"
            action="https://formspree.io/f/mgeblbrr"
            method="POST"
            >


              <h2>Contact US</h2>
            <label>



            </label>
            <input type="email" name="email"
             placeholder="Your Email"></input>
            <br></br>   <br></br>
            <label>



                <textarea name="message" 
                placeholder="Your Email" >
                </textarea>
            </label>



            <br></br>   <br></br>
            <button type="submit">Send</button>
          </form>
        </div>
    )
}