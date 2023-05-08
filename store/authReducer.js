import AsyncStorage from "@react-native-async-storage/async-storage"

const initialState={
    idToken:'',
    user:{}

}

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case('AUTHENTICATE'):
        AsyncStorage.setItem("token", action.payload.idToken)
        AsyncStorage.setItem("user", JSON.stringify(action.payload.user))
        return {...state,
            user:action.payload.user,
        idToken:action.payload.idToken,

        }
        default:
            return state
    }

}
export const authenticate=(idToken,user)=>{
    return {
        type:'AUTHENTICATE',
        payload:{
            user:user,
            idToken:idToken
        }

    }
}

export default authReducer