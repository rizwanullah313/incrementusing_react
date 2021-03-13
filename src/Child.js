import React, { useContext } from 'react';
import counterContext from './CounterCountext';

const Child = () => {
    //props
    let counterValue = useContext(counterContext);
    console.log(counterValue);
    return (
        <div>
        <h1>This is a child</h1>

        <h2>Increment Using CounterContext</h2>
        <h4>Counter Value is: {counterValue[0]}</h4>
        <button onClick = {() => {counterValue[1](++counterValue[0])}}>Increment</button>
        </div>
    )
    //        <h2>My name is {props.Nname}</h2>
    //        <button onClick = {() => {console.log("Button Click")}}>Increment</button>

}
export default Child;