import { useState } from 'react'
import eorzeaMap from './assets/eorzea-map.jpeg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <img src={eorzeaMap} />
    </div>
  )
}

export default App
