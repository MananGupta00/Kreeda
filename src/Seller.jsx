import React, {useState} from "react";

export const Seller = (props) => {
    const [Title,setTitle] = useState(''); 
    const [desc,setDesc] = useState(''); 
    const [img, setImg] = useState();
    const [imgName, setImgName] = useState('');
    const [price,setPrice] = useState('');   // Store details temporarily in state

    const handleSubmit = (e) => {
        //send a request after submission
        uploadFile();
    }

    
      const saveFile = (e) => {
        setImg(e.target.files[0]);
        setImgName(e.target.files[0].name);
      };
 
      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", img);
        formData.append("fileName", imgName);
        // resolve request
        // try {
        //   const res = await axios.post(
        //     "http://localhost:3000/upload",
        //     formData
        //   );
        //   console.log(res);
        // } catch (ex) {
        //   console.log(ex);
        // }
      }
   
    return (
        <div className = "auth-form-container  add_product">
            <div className= "add_product_form" >
                
                <h2>Sell a product</h2>
             {/* Product name and description shall be given here */}

                <input value={Title} onChange = {(e) => setTitle(e.target.value)} 
                type="text"
                className="seller_field"
                 name = "user_id"
                 placeholder = "Product Title" 
                 id = "Title" />

                 {/* Product description here */}
                <textarea value={desc}
                onChange = {(e) => setDesc(e.target.value)}
                name = "desc" 
                placeholder = "item description"
                id = "desc" />
                <br></br>
             
               
                {/* item price here */}

                <input value={price}
                className="seller_field"
                    name="price" onChange = {(e) => {
                    setPrice(e.target.value)
                    }}
                    type="number"

                    placeholder = "Enter Price of the item"

                    id = "price" />
   <br></br>
                {/* Product image here */}
                <input type="file"
                className="seller_field"
                 id="img" 
                 name="product_img"/>
              
                {/* check the details again */}
                
                <button name = "save" 
                className="seller_field"
                    onClick = {handleSubmit}>
                    Register
                </button>

            </div>


            {/*if the form is switched*/}

         
            
        </div>
    )
}