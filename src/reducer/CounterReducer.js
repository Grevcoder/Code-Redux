const counterReducer=(state='Select a color', action)=> {
console.log("inside reducer");
    switch(action.type){
        case 'INCREMENT':
            return state+1;

        case 'DECREMENT':
        return state-2;
        
    }
}
export default counterReducer;