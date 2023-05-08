import { createSlice } from "@reduxjs/toolkit"
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

export default cartReducer.reducer

    