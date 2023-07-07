import { useState } from 'react'
import eorzeaMap from './assets/eorzea-map.jpeg'
import Header from './components/Header'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

export default App
