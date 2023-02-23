import { BrowserRouter,Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import PersonPage from './pages/Person/PersonPage'
import Cadastro from './pages/CadastroPerson/CadastroPerson'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personPage/:id" element={<PersonPage />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
