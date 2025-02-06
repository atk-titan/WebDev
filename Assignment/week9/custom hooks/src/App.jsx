import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useIsOnline from './hooks/useIsOnline'
import useInterval from './hooks/useInterval'

function App() {
  const [count, setCount] = useState(0)

  useInterval(()=>{
    setCount(count+1)
  },2000)

  return (
    <>
      hii there {count}
    </>
  )
}

export default App
