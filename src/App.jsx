import { Route, Routes } from 'react-router-dom'
import TopBar from './components/TopBar'
import './App.css'
import Home from './pages/Home'
import BlackShroud from './pages/BlackShroud'
import LaNoscea from './pages/LaNoscea'
import Thanalan from './pages/Thanalan'
import Coerthas from './pages/Coerthas'


function App() {

  return (
    <div>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blackshroud' element={<BlackShroud />}/>
        <Route path='/lanoscea' element={<LaNoscea />}/>
        <Route path='/thanalan' element={<Thanalan />}/>
        <Route path='/coerthas' element={<Coerthas />}/>
      </Routes>
    </div>
  )
}

export default App
