import {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Visualizar =()=>{
    const  [clientes, setClientes] =useState([])
  
    async function getCliente (){
      const response = await axios.get("http://localhost:1700/cliente")

    setClientes(response.data)
    }

    useEffect(()=>{
      getCliente()
    })
    return(
        <div>
  
<Link to="/">Voltar</Link>
<h1>Todos os clientes cadastrados</h1>
<Link to="/">Filtar</Link>
            {clientes && clientes.length ===0?(
          <>
        <p>Não foram encontrados nenhum jogador cadastrados</p>
        </>
        ):(
<>
     {clientes && clientes.map((cliente)=>
     <>
  
          <div className='card-session'>
<h2 key={cliente.id}>Nome - {cliente.nome}</h2>
<p >Email - {cliente.email}</p>
<p >Telefone - {cliente.telefone}</p>
</div>
</>
      )}
</>
     )}


     
        </div>
    )
}