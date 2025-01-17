import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='bg-red-400 '>hello</h1>
        <h1 className='bg-blue-400 '>hello2</h1>
        <h1 className='bg-green-400 '>hello3</h1>
      </div>

      <div className='grid grid-cols-6'>
        <h1 className='bg-red-400 col-span-3'>hello from 1st div</h1>
        <h1 className='bg-blue-400 col-span-2'>hello from 2nd div</h1>
        <h1 className='bg-green-400 '>hello from 3rd div</h1>
      </div>
    </>
  );
}

export default App;
