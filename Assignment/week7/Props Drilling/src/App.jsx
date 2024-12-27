import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Child1 from './Components/Child1';
import Child2 from './Components/Child2';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child1></Child1>
      <Child2></Child2>
    </>
  );
}

export default App;
