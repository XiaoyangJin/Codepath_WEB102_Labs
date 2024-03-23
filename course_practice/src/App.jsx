import { useState } from 'react'
import './App.css'

function App() {

  const [form, setForm] = useState({
    name: '',
    cuisine: ''
  })

  const [record, setRecord] = useState([]);

  const handelForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const addRecord = (e) => {
    // since there is no place to store data, we need to prevent refresh to lose data
    e.preventDefault();
    setRecord([...record, form]);
    setForm({ name: '', cuisine: '' });
  }

  return (
    <>
      <h1>Add a Restaurant</h1>
      <form onSubmit={addRecord}>
        <label htmlFor='name'>Name: </label><br />
        <input
          value={form.name}
          onChange={handelForm}
          type="text"
          name='name'
          id='name'
          placeholder='please enter name' /><br />
        <label htmlFor='cuisine'>Cuisine: </label><br />
        <input
          value={form.cuisine}
          onChange={handelForm}
          type="text"
          name='cuisine'
          id='cuisine'
          placeholder='please enter cuisine' /><br />
        <input type="submit" />
      </form>
      <h2>My Restaurant</h2>
      {
        record.length === 0 ? <h3>Nothing here yet</h3> :
          record.map((record, i) => {
            return (
              <div key={i} style={{ border: '2px solid red', padding: '1rem' }}>
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
