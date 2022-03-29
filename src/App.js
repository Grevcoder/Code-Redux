import './App.css';
import {useSelector} from 'react-redux';
//import {increment} from './action/CounterAction';
//import {decrement} from './action/CounterAction';
import {colorRed} from './action/colorAction';
import {colorGreen} from './action/colorAction';
import {colorBlue} from './action/colorAction';
import {colorOrange} from './action/colorAction';


import { useDispatch } from 'react-redux';

function App() {
  console.log('inside UI');
  const color=useSelector(state=>state);
  const dispatch=useDispatch();

  return (
    <div className="App">
      <h1>Your color:{color}</h1>
      <input type="radio" name="red" value="red" onClick={()=>dispatch(colorRed())}></input>
      <label>Red</label>
      <input type='radio' name="blue" value='blue' onClick={()=>dispatch(colorBlue())}></input>
      <label>Blue</label>
      <input type='radio' name="green" value='green' onClick={()=>dispatch(colorGreen())}></input>
      <label>Green</label>
      <input type='radio' name="orange" value='Orange' onClick={()=>dispatch(colorOrange())}></input>
      <label>Orange</label>
    </div>
  );
}

export default App;
