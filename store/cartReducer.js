import { createSlice } from "@reduxjs/toolkit"
import { addItemToCart, deleteCartItem, getCartItems, updateCartItem } from "../util/services/cartService"
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
            const id=action.payload
            return state.filter(n=>n.id!==id)
        },
        addQuantity(state,action){
            const id=action.payload
            const itemIndex=state.findIndex((n)=>n.id===id)
            let item=state[itemIndex]
            let itemQuantity=item.quantity
            const updateItem={...item, quantity:itemQuantity+1}
            const newState=[...state]
            newState[itemIndex]=updateItem
            return newState
        },
        substractQuantity(state,action){
            const id=action.payload
            const itemIndex=state.findIndex((n)=>n.id===id)
            let item=state[itemIndex]
            let itemQuantity=item.quantity
            if(itemQuantity!=1){
            const updateItem={...item, quantity:itemQuantity-1}
            const newState=[...state]
            newState[itemIndex]=updateItem
            return newState
            }
        }
    }
})

   
export const { iniitalize,addToCart,removeFromCart,addQuantity,substractQuantity} = cartReducer.actions

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

  export const deleteItem=id=>{
    return async dispatch=>{
        const response= await deleteCartItem(id)
        dispatch(removeFromCart(id))
    }
  }
  export const increaseQuantity=id=>{
    return async dispatch=>{
        const response=await updateCartItem('increment',id)
        dispatch(addQuantity(id))
    }
  }

  export const decreaseQuantity=id=>{
    return async dispatch=>{
        const response=await updateCartItem('decrement',id)
        dispatch(substractQuantity(id))
    }
  }
 

export default cartReducer.reducer

    