import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function Table(){
  const navigate = useNavigate();

  const [pessoas, setPessoas] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/pessoas', {
      method: 'GET',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setPessoas(data)
      })
      .catch(err => console.log(err))
  }, [])

    const Delete = (id) => {
      useEffect(() => {
        fetch(`http://localhost:8080/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(resp => console.log(resp))
            .catch(err => console.log(err))
       })
  }

  return(
      <table className="table table-striped maxHeight">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
                {pessoas?.map((pessoa, index) => {
                  return <tr key={pessoa.id}>
                      <th className="txtTabela" scope='row'>{index + 1}</th>
                      <td>{pessoa.nome}</td>
                      <td>
                        <div className='sectionButtons'>
                          <button class="btn btn-warning" onClick={() => navigate(`/personPage/${pessoa.id}`)}>Visualizar</button>
                          <button class="btn btn-danger" onClink={() => {Delete(pessoa.id)}}>Excluir</button>
                        </div>
                      </td>
                  </tr>                 
                })}         
        </tbody>
      </table>
  )
}