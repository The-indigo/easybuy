import axios from "axios";
import ProductModel from "../../model/ProductModel";

const url = `https://easybuy-cc55d-default-rtdb.firebaseio.com/product.json`

export const fetchProducts = async () => {
  try {
    const response = await axios.get(url);
    if (response.data) {
      const allProducts = []
      for (const key in response.data) {
     const productObject={
      id:response.data[key].id,
      name:response.data[key].name,
      price:response.data[key].price,
      image:response.data[key].image,
      category:response.data[key].category
     }
     allProducts.push(productObject)
      }
      return { status: 200, products:allProducts }; 
  }




    return response.data
    
  } catch (e) {
    return e;
  }
};

export const addProduct=async()=>{
    try{
        const dataObject= new ProductModel({name:'How Innovation Works',
    price:20.00,
    image:
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGNvdmVyc3xlbnwwfHwwfHw%3D&auto=format&q=60",
    category:"Education" 
    })
        const response= await axios.post(url,dataObject);
        if (response.data.hasOwnProperty('name')) {
            const updateurl = `https://easybuy-cc55d-default-rtdb.firebaseio.com/product/${response.data.name}.json`
            const updateResponse = await axios.patch(updateurl, {
                "id":response.data.name
            })
            return {status: 200,data:response.data.name}; 
        }     }catch(e){
        return e
    }
}