export const initialState = 'none';
export const reducer = (state, action)=>{
    if(action.type === "user"){
        return action.payload;
    }
    else if(action.type === "lawyer"){
        return action.payload
    }
    return state
}

