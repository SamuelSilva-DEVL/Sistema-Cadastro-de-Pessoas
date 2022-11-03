import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams, useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react'
import Header from './Header'
import '../styles/PersonStyle.css'

export default function PersonPage(){
  const {id} = useParams();
  const [pessoas, setPessoas] = useState([])

  useEffect(() => {
    console.log(id)
    console.log(parseInt(id))
    fetch(`http://localhost:8080/${parseInt(id)}`, {
      method: 'GET',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setPessoas(data)
      })
      .catch(err => console.log(err))
  }, [])

  return(
    <div>
      <Header />
      <section className="modalResultado">
        <div className="">
          <h1>Nome: {pessoas?.nome}</h1>
          <h1>RG: {pessoas?.rg}</h1>
          <h1>Data de Nascimento: {pessoas?.dataNascimento}</h1>
          <h1>Nome da Mãe: {pessoas?.nomeMae}</h1>
          <h1>Data Cadastro: {pessoas?.dataCadastro}</h1>
        </div>
      </section>
    </div>
  )
}