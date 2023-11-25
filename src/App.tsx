import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Catalogo from './Pages/Catalogo'
import Contatos from './Pages/Contatos'
import SobreNos from './Pages/SobreNos'
import Header from "./components/Header"



function App() {
  

  return (
    <div className="app">
      <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/sobrenos" element={<SobreNos />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
