import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export const Filtrar=()=>{
    const [clientes, setClientes] = useState([]);
    const [filtroNome, setFiltroNome] = useState('');
  const [filtroEmail, setFiltroEmail] = useState('');
  const [filtroTelefone, setFiltroTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function getClientes() {
    const response = await axios.get("http://localhost:1700/cliente");
    setClientes(response.data);
  }

  useEffect(() => {
    getClientes();
  }, []);

  async function filtrarClientes() {
    const response = await axios.get("http://localhost:1700/clienteFiltrar", {
      params: {
        nome: filtroNome,
        email: filtroEmail,
        telefone: filtroTelefone
      }
    });
    if (response.data.length === 0) {
        setMensagem('Nenhum cliente encontrado.');
      } else {
        setMensagem('');
      }
    setClientes(response.data);
    setFiltroEmail("")
    setFiltroNome("")
    setFiltroTelefone("")
  }

    return(
        <>
        <Link to="/">Voltar</Link>
         <div className='filtro'>
            <h1>Filtro</h1>
        <input
          type="text"
          placeholder="Filtrar por nome"
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filtrar por email"
          value={filtroEmail}
          onChange={(e) => setFiltroEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filtrar por telefone"
          value={filtroTelefone}
          onChange={(e) => setFiltroTelefone(e.target.value)}
        />
        <button onClick={filtrarClientes}>Filtrar</button>
      </div>

     
      <div>
        <h2>Clientes Filtrados</h2>
        {mensagem && <p>{mensagem}</p>}

        <div className='card-session'>

          {clientes.map((cliente) => (
<>
            <p key={cliente.id}>
              Nome:{cliente.nome}
              </p>

           <p> Email:{cliente.email} </p>  
           <p>   Telefone: {cliente.telefone}</p>  
           </>
          ))}
        </div>
      </div>

        </>
    )
}