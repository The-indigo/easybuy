import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addItemToCart } from "./cartService";

const url = `https://easybuy-cc55d-default-rtdb.firebaseio.com/wishlist.json`

export const getWishlistItems=async()=>{
    const user=await AsyncStorage.getItem("user")
    const userId=JSON.parse(user).uuid
    if(userId){
        const getUrl = `https://easybuy-cc55d-default-rtdb.firebaseio.com/wishlist.json?orderBy="userId"&equalTo="${userId}"`;

    try{
        const response=await axios.get(getUrl)
        if (response.data) {
            const wishlistItems = [];
            for (const key in response.data) {
              const wishlistObject = {
                id: response.data[key].id,
                name: response.data[key].name,
                price: Number(response.data[key].price),
                productId: response.data[key].productId,
                userId: response.data[key].userId,
                image: response.data[key].image,
              };
              wishlistItems.push(wishlistObject);
            }
            return { status: 200, wishlistItems: wishlistItems};
          }
    }catch(e){
        console.log(e.response.message);
        return e.response.message
    }
}
}

export const addItemToWishlist = async (data) => {
    const user=await AsyncStorage.getItem("user")
    const userId=JSON.parse(user).uuid
  try {
    const dataObject ={
        name:data.name,
        price:data.price,
         image:data.image,
         userId:userId,
         productId:data.productId
    }
    const response = await axios.post(url, dataObject);

    if (response.data.hasOwnProperty('name')) {
        const updateurl = `https://easybuy-cc55d-default-rtdb.firebaseio.com/wishlist/${response.data.name}.json`
        const updateResponse = await axios.patch(updateurl, {
            "id":response.data.name
        })
        dataObject.id=response.data.name
        return {status: 200,data:dataObject}; 
    }  

  } catch (e) {
    return e;
  }
};



export const deleteWishlistItem = async (id) => {
    const url = `https://easybuy-cc55d-default-rtdb.firebaseio.com/wishlist/${id}.json`;
    try {
       await axios.delete(url);
       return { status: 200};
      
    } catch (e) {
       console.log(e.response.data);
    }
  }


  export const addWishlistItemToCart = async (data,id) => {
    try{
        const response=await addItemToCart(data)
        if(response.status===200){
            await deleteWishlistItem(id)
        }
    }catch(e){
        console.log(e)
    }
  
  }