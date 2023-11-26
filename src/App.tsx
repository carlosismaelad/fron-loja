import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Contatos from './Pages/Contatos'
import SobreNos from './Pages/SobreNos'
import Header from "./components/Header"




function App() {
  

  return (
    <div className="app">
      <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/sobrenos" element={<SobreNos />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
