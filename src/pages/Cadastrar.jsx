import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Cadastrar = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const history = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:1700/cliente", {
        nome: nome,
        email: email,
        telefone: telefone
      });

      // Navegar para a página de visualização após o cadastro bem-sucedido
      history('/visualizar');
    } catch (error) {
      console.error('Erro ao cadastrar jogador:', error);
      // Tratar o erro, se necessário
    }
  };

  return (
    <>
      <h1>Cadastre um cliente</h1>
     
      <form onSubmit={handleCadastro}>
        <input
          type="text"
          placeholder="Informe o nome do jogador"
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
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};
