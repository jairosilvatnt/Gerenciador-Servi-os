import React, { useState } from "react"
import 'react-bootstrap';
import axios from "axios";

const CadastrarAgencia = () => {

  const [ nome, setNome ] = useState('');
  const [ endereco, setEndereco ] = useState('');
  const [ telefone, setTelefone ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/agencias', {
        nome,
        endereco,
        telefone
      }, {
        headers: {
          'content-type': 'application/json',
        },

      });

      if(response.status === 201){
        alert('Agência cadastrada com sucesso!');
        setNome('');
        setEndereco('');
        setTelefone('');
      }else{
        alert('Erro ao cadastrar agência!');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao cadastrar agência!');
    }
  };


  return (
    <div>
      <h1>Cadastrar Agência transfusional</h1>
      <form>
        <div>
          <label>Nome:</label>
          <input 
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>Endereço:</label>
          <input 
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input 
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Cadastrar</button>        
      </form>
    </div>
  );
}

export default CadastrarAgencia;
