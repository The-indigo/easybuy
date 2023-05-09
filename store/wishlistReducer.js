import { createSlice } from "@reduxjs/toolkit"
import { addItemToWishlist, deleteWishlistItem, getWishlistItems } from "../util/services/wishlistService"
const initialState=[]

const wishlistReducer=createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        iniitalize(state,action){
            return action.payload
        },
        addToWishlist(state,action){
            return [...state,action.payload]
            },
        removeWishlist(state,action){
            const id=action.payload
            return state.filter(n=>n.id!==id)
        },
        // addWishlistToCart(state,action){

        // }

    }
})
export const { iniitalize,addToWishlist,removeWishlist} = wishlistReducer.actions

export const addItem=item=>{
    return async dispatch=>{
        const response= await addItemToWishlist(item)
        dispatch(addToWishlist(response.data))
    }
}

export const initializeWishlist = () => {
    return async dispatch => {
      const items = await getWishlistItems()
      dispatch(iniitalize(items.wishlistItems))
    }
  }

  export const deleteItem=id=>{
    return async dispatch=>{
        const response= await deleteWishlistItem(id)
        dispatch(removeWishlist(id))
    }
  }


export default wishlistReducer.reducer
