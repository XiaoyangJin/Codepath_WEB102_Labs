import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1>My Restaurant</h1>
      <form>
        <label htmlFor='name'>Name: </label><br />
        <input type="text" name='name' id='name' placeholder='please enter name' /><br />
        <label htmlFor='cuisine'>Cuisine: </label><br />
        <input type="text" name='cuisine' id='cuisine' placeholder='please enter cuisine' /><br />
        <input type="submit" />
      </form>
    </>
  )
}

export default App
