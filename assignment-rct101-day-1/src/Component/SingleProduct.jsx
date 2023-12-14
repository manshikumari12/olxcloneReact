import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import ProductDetails from "./Productdetails"

function SingleProduct(){
    const {id}=useParams()
    console.log(id)
    const [url,setUrl]=useState([])
    const fetchProductData = async (id) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json();
            setUrl(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProductData(id)
    }, [id])

return <div>
   
    <ProductDetails
 {...url}/>
  

    </div>
}
export default SingleProduct