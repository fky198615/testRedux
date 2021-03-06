import {ADD_ITEM_TO_CART, REMOVE_TIEM_FROM_CART, CLEAR_THE_CART} from '../constants';


const shoppingCartReducer = (state=[], action) => {
    
    const {type, payload} = action;
    
    switch(type){
        case ADD_ITEM_TO_CART:
            console.log("state add to cart",state);
            return [...state, payload]
            
        
        case REMOVE_TIEM_FROM_CART:
            return state.filter(item => item !== payload)
        
        case CLEAR_THE_CART:
            return state = []
        
        default:
            console.log("state", state);
            return state;
    }
    
    
}

export default shoppingCartReducer;