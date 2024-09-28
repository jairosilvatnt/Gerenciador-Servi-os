import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const UpdateAgencia = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ nome, setNome ] = useState('');
  const [ endereco, setEndereco ] = useState('');
  const [ telefone, setTelefone ] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.put(`http://localhost:3001/agencias/${id}`,{
      nome,
      endereco,
      telefone,
    });

    if (response.status === 200) {
      alert('Agência atualizada com sucesso!');
      navigate('/agencias');
    }else {
      alert('Erro ao atualizar agência!');
    }
    } catch (error) {
      console.error('Erro ao atualizar agência!', error);
    }
  };

  
  return (
    <div>
      <h2>Editar Agência Transfusional</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input 
          type="text"
          id='nome'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          />
        </div>
        <div>
          <label>Endereço</label>
          <input 
          type="text"
          id='endereco'
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
          />
        </div>
        <div>
          <label>Telefone</label>
          <input 
          type="text"
          id='telefone'
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
          />
        </div>
        <button type='submit'>Atualizar</button>
      </form>
    </div>
  );
}

export default UpdateAgencia;
