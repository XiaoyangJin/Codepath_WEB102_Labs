import { useState } from 'react'
import './App.css'
import Counter from './components/Counter';
import Post from './components/Post'

function App() {

  const [showImage, setShowImage] = useState(false);

  const names = ["People1", "People2", "people3"];


  return (
    <>
      {/* <div>
        <button onClick={() => setShowImage(!showImage)}>Toggle Image</button>
        {
          showImage && <Post />
        }
      </div> */}

      {/* <Counter /> */}

      <ul>
        {
          names.map((name, i) => (
            <li key={i}>{name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
