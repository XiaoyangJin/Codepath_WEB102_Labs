import { useState } from 'react'
import './App.css'
import Counter from './components/Counter';
import Post from './components/Post'

function App() {

  const [showImage, setShowImage] = useState(false);


  return (
    <>
      {/* <div>
        <button onClick={() => setShowImage(!showImage)}>Toggle Image</button>
        {
          showImage && <Post />
        }
      </div> */}
      <Counter />
    </>
  )
}

export default App
