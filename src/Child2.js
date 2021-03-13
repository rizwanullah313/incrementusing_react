import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';
const Child2 = () =>{
    let [state, disptach] = useReducer(counterReducer,0);
    console.log(state)
    return(
        <div>
            <h2>Increment Using Reducer</h2>
            <h3>Value of Reducer State is: {state}</h3>
      <button onClick={()=> disptach('INCREMENT')}>Increment Reducer</button>
        </div>
    )

}
export default Child2;