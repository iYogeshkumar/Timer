import { useState } from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
const [show, setShow] = useState()
const initial = 1
const end = 40
 
  return (
    <div className="App">
   

   {show ? <Timer initial = {initial} end = {end}/> : ""}

   <button onClick={() => {setShow(!show)}}>{show ? "Hide" : "Show"}</button>

    </div>
  );
}
export default App;
