import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [inp, setInp] =useState(0);

  let sum = useMemo(()=>{
    console.log("momoization called");
    return inp*(inp-1)/2;
  },[inp]);


  return (
    <div>
      <input type="text" onChange={(e)=>{setInp(parseInt(e.target.value))}}/>
      <h1>the sum is {sum}</h1>
      <button onClick={()=>setCount(count+1)}>count ({count})</button>
    </div>
  );
}

export default App;