import axios from "axios";

const url = `https://easybuy-cc55d-default-rtdb.firebaseio.com/product.json`

export const fetchProducts = async () => {
  try {
    const response = await axios.get(url);
    return response.data
    
  } catch (e) {
    return e;
  }
};