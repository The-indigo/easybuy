import { createSlice } from "@reduxjs/toolkit"

const initialState=[]
const productReducer=createSlice({
    name:'product',
    initialState,
    reducers:{
        initialize(state,action){
            return action.payload
        },
    }
})
export const { iniitalize } = productReducer.actions

export default productReducer.reducer
