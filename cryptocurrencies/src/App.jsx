import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState();

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist?&api_key"
        + API_KEY
      );
      const json = await response.json();
      setList(json);
    }
    fetchAllCoinData().catch(console.error);
  }, []);

  return (
    <>

    </>
  )
}

export default App
