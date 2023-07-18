import { Route, Routes } from 'react-router-dom'
import TopBar from './components/TopBar'
import './App.css'
import Home from './pages/Home'
import Gridania from './pages/Gridania'
import Limsa from './pages/Limsa'
import Uldah from './pages/Uldah'
import Ishgard from './pages/Ishgard'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <div>
      <TopBar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/gridania' element={<Gridania />}/>
        <Route path='/limsa' element={<Limsa />}/>
        <Route path='/uldah' element={<Uldah />}/>
        <Route path='/ishgard' element={<Ishgard />}/>
      </Routes>
    </div>
  )
}

export default App
