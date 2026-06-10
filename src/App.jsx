import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nutanix from './pages/Nutanix'
import Amazon from './pages/Amazon'
import AdMob from './pages/AdMob'
import CarDekho from './pages/CarDekho'
import Glass from './pages/Glass'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nutanix" element={<Nutanix />} />
        <Route path="/amazon" element={<Amazon />} />
        <Route path="/admob" element={<AdMob />} />
        <Route path="/cardekho" element={<CarDekho />} />
        <Route path="/glass" element={<Glass />} />
      </Routes>
    </HashRouter>
  )
}
