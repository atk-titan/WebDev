import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import RevenueCard from './components/revenueCard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='grid grid-cols-4'>
      <RevenueCard amount='$ 14,32,323' order='10' title='Amount Pending'/>
    </div>
  );
}

export default App;
