import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState({ likes: 1 })

  function handleCount() {
    count.likes++;
    setCount(count);
  }

  return (
    <>
      <h1>Count: {count.likes}</h1>
      <button onClick={handleCount}>Set count</button>
    </>
  )
}

export default App
