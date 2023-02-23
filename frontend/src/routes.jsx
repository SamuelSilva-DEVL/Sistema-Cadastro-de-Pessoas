import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import PersonPage from './pages/Person'
import Cadastro from './pages/CadastroPerson'
import Header from './components/Header'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personPage/:id" element={<PersonPage />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
