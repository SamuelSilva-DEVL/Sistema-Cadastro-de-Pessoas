import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import PersonPage from './components/PersonPage'
import Cadastro from './components/CadastroPerson'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/personPage/:id" element={<PersonPage />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  )
}
