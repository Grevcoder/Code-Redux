//const { type } = require("@testing-library/user-event/dist/type")

export const increment=()=>{
    console.log("counter action");
    return(
    {
        type:'INCREMENT'
        
    }
    );
}
    
export const decrement=()=>{
    return(
    {
        type:'DECREMENT'

    }
    );
}