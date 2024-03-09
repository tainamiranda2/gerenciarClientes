import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Cadastrar = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mostrarCoordenadas, setMostrarCoordenadas] = useState(false);
  const [coordenada_x, setCoordenadaX] = useState('');
  const [coordenada_y, setCoordenadaY] = useState('');
  const history = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
      const clienteData = {
        nome: nome,
        email: email,
        telefone: telefone,
        coordenada_x: mostrarCoordenadas ? coordenada_x : "",
        coordenada_y: mostrarCoordenadas ? coordenada_y : ""
      };
      console.log(clienteData)
      await axios.post("http://localhost:1700/cliente", clienteData);

      // Navegar para a página de visualização após o cadastro bem-sucedido
      history('/visualizar');
    
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
      // Tratar o erro, se necessário
      
    }
    
  };

  return (
    <>
      <Link to="/">Voltar</Link>
      <h1>Cadastre um cliente</h1>
     
      <div >
        <input
          type="text"
          placeholder="Informe o nome do cliente"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Informe o email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Informe o telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <button onClick={() => setMostrarCoordenadas(true)}>Cadastrar com coordenada</button>
        {mostrarCoordenadas && (
          <>
            <input
              type="text"
              placeholder="Informe a coordenada X"
              value={coordenada_x}
              onChange={(e) => setCoordenadaX(e.target.value)}
            />
            <input
              type="text"
              placeholder="Informe a coordenada Y"
              value={coordenada_y}
              onChange={(e) => setCoordenadaY(e.target.value)}
            />
          </>
        )}
        <br />
        <button onClick={handleCadastro}>Cadastrar</button>
      </div>
    </>
  );
};
