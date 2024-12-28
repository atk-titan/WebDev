import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button>Home</button>
      
      <button>My Network ()</button>
      <button>Jobs ()</button>
      <button>messaging ()</button>
      <button>Notifications ()</button>
      
      <button>Me</button>
    </>
  )
}

export default App
