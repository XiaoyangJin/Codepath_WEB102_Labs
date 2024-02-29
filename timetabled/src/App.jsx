import './App.css';
import Calendar from './components/Calendar'

const App = () => {

  return (
    <div className="App">
      <h1>My Weekly Plan</h1>
      <h2>From 2024.2.25 to 2024.3.2</h2>
      <Calendar />
    </div>
  )
}

export default App