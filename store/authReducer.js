import AsyncStorage from "@react-native-async-storage/async-storage"
import { createSlice } from "@reduxjs/toolkit"

const initialState={
    idToken:'',
    user:{}

}

const authReducer =createSlice({
    name:"auth",
    initialState,
    reducers:{
        authenticate(state,action){
            AsyncStorage.setItem("token", action.payload.idToken)
            AsyncStorage.setItem("user", JSON.stringify(action.payload.user))
            return {...state,
                user:action.payload.user,
            idToken:action.payload.idToken,
    
            }
        },
        logout(state,action){
            AsyncStorage.clear()
            return initialState
        }
    }

})

// (state=initialState,action)=>{
//     switch(action.type){
//         case('AUTHENTICATE'):
//         AsyncStorage.setItem("token", action.payload.idToken)
//         AsyncStorage.setItem("user", JSON.stringify(action.payload.user))
//         return {...state,
//             user:action.payload.user,
//         idToken:action.payload.idToken,

//         }
//         case('LOGOUT'):
//         AsyncStorage.clear()
//         return initialState
//         default:
//             return state
//     }

// }
// export const authenticate=(idToken,user)=>{
//     return {
//         type:'AUTHENTICATE',
//         payload:{
//             user:user,
//             idToken:idToken
//         }

//     }
// }
// export const logout=()=>{
//     return {
//         type:'LOGOUT'
//     }
// }

export const { authenticate, logout } = authReducer.actions
export default authReducer.reducer