import axios from "axios";
import CartModel from "../../model/CartModel";
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = `https://easybuy-cc55d-default-rtdb.firebaseio.com/cart.json`


export const addItemToCart = async (data) => {
    const user=await AsyncStorage.getItem("user")
    const userId=JSON.parse(user).uuid
    let quantity=1
  try {
    const dataObject ={
        name:data.name,
        userId:userId,
        productId:data.id,
        price: Number(data.price),
        image:data.image,
        quantity
    }
    const response = await axios.post(url, dataObject);

    if (response.data.hasOwnProperty('name')) {
        const updateurl = `https://easybuy-cc55d-default-rtdb.firebaseio.com/cart/${response.data.name}.json`
        const updateResponse = await axios.patch(updateurl, {
            "id":response.data.name
        })
        return {status: 200,data:dataObject}; 
    }  

  } catch (e) {
    return e;
  }
};

export const getCartItems=async()=>{
    const user=await AsyncStorage.getItem("user")
    const userId=JSON.parse(user).uuid
    const getUrl = `https://easybuy-cc55d-default-rtdb.firebaseio.com/cart.json?orderBy="userId"&equalTo="${userId}"`;

    try{
        const response=await axios.get(getUrl)
        if (response.data) {
            const cartItems = [];
            for (const key in response.data) {
              const cartObject = {
                id: response.data[key].id,
                name: response.data[key].name,
                price: Number(response.data[key].price),
                productId: response.data[key].productId,
                quantity: response.data[key].quantity,
                userId: response.data[key].userId,
                image: response.data[key].image,
              };
              cartItems.push(cartObject);
            }
            return { status: 200, cartItems: cartItems };
          }
    }catch(e){
        return e
    }
}