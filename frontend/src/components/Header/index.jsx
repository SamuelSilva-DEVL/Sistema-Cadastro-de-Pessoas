import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate = useNavigate();

  return(
      <header className="header">
        <div className="textHeader">
          <h1>Web Dev GREAT</h1>
        </div>

        <div className="options">
          <button onClick={() => navigate('/')}>Home</button>
        </div> 
      </header>
  )
}