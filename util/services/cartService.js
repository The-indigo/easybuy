import axios from "axios";
import CartModel from "../../model/CartModel";
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = `https://easybuy-cc55d-default-rtdb.firebaseio.com/cart.json`


export const addToCart = async (data) => {
    const user=AsyncStorage.getItem("user")
    const userId=JSON.parse(user).uuid
    let quantity=1
  try {
    const dataObject =new CartModel(data.name,userId,data.id,Number(data.price),data.imageUrl,quantity)
    const response = await axios.post(url, dataObject);
    if (response.data.hasOwnProperty("name")) {
      return { status: 200, dataAdded: response.data };
    }
  } catch (e) {
    return e;
  }
};