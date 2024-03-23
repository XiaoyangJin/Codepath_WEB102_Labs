import { useState } from 'react'
import './App.css'

function App() {

  const [form, setForm] = useState({
    name: '',
    cuisine: ''
  })

  const [record, setRecord] = useState([{ name: 'test', cuisine: 'food' }]);

  return (
    <>
      <h1>Add a Restaurant</h1>
      <form>
        <label htmlFor='name'>Name: </label><br />
        <input type="text" name='name' id='name' placeholder='please enter name' /><br />
        <label htmlFor='cuisine'>Cuisine: </label><br />
        <input type="text" name='cuisine' id='cuisine' placeholder='please enter cuisine' /><br />
        <input type="submit" />
      </form>
      <h2>My Restaurant</h2>
      {
        record.length === 0 ? <h3>Nothing here yet</h3> :
          record.map((record) => {
            return (
              <div style={{ border: '2px solid red', padding: '1rem' }}>
                <h4>{record.name}</h4>
                <h4>{record.cuisine}</h4>
              </div>
            )
          })
      }
    </>
  )
}

export default App
