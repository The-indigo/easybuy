const initialState={
    idToken:'',
    user:{}

}

const authReducer=(state=initialState,action)=>{
    if(action.tytpe==='AUTHENTICATE'){
        return {...state,
            user:action.payload.user,
        idToken:action.payload.idToken,

        }
    }
    return state
}
export const authenticate=async(idToken,user)=>{
    return {
        type:'AUTHENTICATE',
        payload:{
            user:user,
            idToken:idToken
        }

    }
}
export default authReducer