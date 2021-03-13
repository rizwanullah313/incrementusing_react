//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import counterContext from './CounterCountext';
function App() {
let counState = useState(0);
// let [count, setCount] = useState(2);
  return (
  <counterContext.Provider value={counState}>
  <div>
  <Parent Nname="Rizwan Ullah" />
  </div>
  </counterContext.Provider>
    
  );
}

export default App;
