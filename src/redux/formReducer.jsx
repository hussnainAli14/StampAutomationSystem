// export const initialState = {};

export const formReducer = (state={}, action)=>{
    switch(action){
        case 'seller':
            return state=action.payload;
        case 'buyer':
            return state=action.payload;
        case 'item':
            return state=action.payload;
        default:
            return state;
    }
    
}