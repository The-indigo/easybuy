const cartReducer=(state,action)=>{
    switch(action.type){
        case('INITIALIZE'):
        return 
        case('ADD_TO_CART'):
        return [...state,action.payload]
        case('REMOVE_FROM_CART'):
        const id=state.find(n=>n.id===action.payload.id)
        return state.filter(n=>n.id!==id)
        default:
            return state
    } 
    
}
export default cartReducer
