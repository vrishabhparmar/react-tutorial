import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {

  const [count, increment] = useState(0);

  const handleClick = () => {
    alert('Event Handler Button Was Clicked');
  }

  return (
    <>
      <div>
      <h1>counter {count}</h1>
      <button onClick={() => increment(count + 1)}> Increment +</button>
      <button onClick={() => increment(0)}> Reset +</button>
      </div>
      <Card person={{name:'Luffy', size:200}} />
      <div>
        <button onClick={() => alert('Inline Button was Clicked')}>Button 1</button>
        <button onClick={handleClick}>Button 2</button>
      </div>
    </>
  )
}

export default App
