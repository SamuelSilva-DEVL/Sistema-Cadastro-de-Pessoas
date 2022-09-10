import '../styles/HomeStyle.css';
import Table from './Table';
import Header from './Header';
import {useNavigate} from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function HomePage(){
  const navigate = useNavigate();

  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main className='main'>
        <div className='formMain'>
          <h1>Pessoas</h1>
          <form>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Buscar pessoa" aria-label="Buscar pessoa" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" id="button-addon2"><FiSearch/></button>
              </div>
          </form>
          <button class="btn btn-primary" onClick={() => navigate('/cadastro')}>Cadastrar</button>
        </div>

        <div className='tablePage'>
          <Table />
        </div>
      </main>  

      {/* FOOTER */}
      <footer></footer>
    </div>
  )
}