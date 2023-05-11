export const initialState = {
    post:[]
};

export const NotiRedcuer = (state,action)=>{
    switch(action.type)
    {
        case 'success':
            return{
                post:action.payload,
            };
        default:
            return state;
    }
}