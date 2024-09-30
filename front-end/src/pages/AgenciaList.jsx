import React, {useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './TabelaEquipamentos.css';

const AgenciList = () => {
const [ agencias, setAgencias ] = useState([]);

const fetchAgencias = async () => {
  try {
    const response = await axios.get('http://localhost:3001/agencias');
    setAgencias(response.data)
    // console.log(response.data)
  } catch (error) {
    console.error('Erro ao buscar esta agência!', error.message);
  }
}

useEffect(() => {
  fetchAgencias();
}, [])


  return (
    <div className='container-table'>
      <h2 className='text-center'>Lista de Agências Transfusionais</h2>
      <Table striped bordered hover responsive className='custom-table'>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Nome</th>
            {/* <th>Endereço</th> */}
            {/* <th>Telefone</th> */}
          </tr>
        </thead>
        <tbody>
          {agencias.length > 0 ? (
            agencias.map((agencia) => (
            <tr key={agencia.id}>
              {/* <td>{agencia.id}</td> */}
              <td>
                <Link to={`/agencias/${agencia.id}`}>{agencia.nome}</Link>
              </td>
              {/* <td>{agencia.endereco}</td> */}
              {/* <td>{agencia.telefone}</td> */}
            </tr>
            ))
          ) : (
            <tr>
              <td>
                Nenhuma agência encontrada!
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default AgenciList;
