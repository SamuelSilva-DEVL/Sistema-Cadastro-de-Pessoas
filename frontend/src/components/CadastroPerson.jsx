import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/CadastroStyle.css'
import { useForm } from 'react-hook-form';
import Header from './Header'
import {useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Cadastro(){
  const {register, handleSubmit, reset} = useForm();

  const onSubmit = (e) => {
    fetch('http://localhost:8080/cadastrar', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(e)
    })
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
  
    alert("Cadastro realizado com sucesso"); 
    reset() 
    console.log(e);
  } 

  return (
    <div>
        <Header />
        <section className='modalCadastro'>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div class="mb-3">
                <label class="form-label">Nome</label>
                <input type="text" class="form-control" {...register("nome")}/>
              </div>
              <div class="mb-3">
                <label class="form-label">RG</label>
                <input type="text" class="form-control" {...register("rg")}/>
              </div>
              <div class="mb-3">
                <label class="form-label">CPF</label>
                <input type="text" class="form-control" {...register("cpf")}/>
              </div>
              <div class="mb-3">
                <label class="form-label">Nome Mãe</label>
                <input type="text" class="form-control" {...register("nomeMae")}/>
              </div>
              <div class="mb-3">
                <label class="form-label">Data Nascimento</label>
                <input type="date"
                      class="form-control"      
                      {...register("dataNascimento")}
                />
              </div>
              <button type="submit" class="btn btn-primary">Cadastrar</button>
          </form>
        </section>
    </div>
  )
}