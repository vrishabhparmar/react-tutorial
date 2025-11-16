import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterApp from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterApp/>
    </>
  )
}

export default App
