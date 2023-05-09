import { createSlice } from "@reduxjs/toolkit"
import { addItemToCart, getCartItems } from "../util/services/cartService"
const initialState=[]
const cartReducer=createSlice({
    name:'cart',
    initialState,
    reducers:{
        iniitalize(state,action){
            return action.payload
        },
        addToCart(state,action){
        return [...state,action.payload]
        },
        removeFromCart(state,action){
            const id=state.find(n=>n.id===action.payload.id)
            return state.filter(n=>n.id!==id)
        }
    }
})

   
export const { iniitalize,addToCart,removeFromCart } = cartReducer.actions

export const addItem=item=>{
    return async dispatch=>{
        const response= await addItemToCart(item)
        dispatch(addToCart(response.data))
    }
}

export const initializeCart = () => {
    return async dispatch => {
      const items = await getCartItems()
      dispatch(iniitalize(items.cartItems))
    }
  }

export default cartReducer.reducer

    