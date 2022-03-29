//set a constant for declaring initial value of state
const colorReducer=(state=0,action)=> {
//Switch case for color changing
switch(action.type)
{
    case 'COLORRED':
        return state='red' ;

     case 'COLORBLUE':
     return state='blue';

     case 'COLORGREEN':
     return state='green';

     case 'COLORORANGE':
     return state='orange';

}


}

export default colorReducer;