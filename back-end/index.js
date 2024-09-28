import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import winston from "winston";

const app = express();
app.use(cors());
app.use(express.json());

const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'servicos'
});

const logger = winston.createLogger({
  level: 'info',    
  format: winston.format.json(),   
   transports: [        
    new winston.transports.Console(),        
    new winston.transports.File({ 
      filename: 'logs/app.log' })
    ],});

    //Função para criar uma nova agência transfusional
app.post('/agencias', async(req, res) => {
  const { nome, endereco, telefone } = req.body;
  const sql = 'INSERT INTO agencias_transfusionais (nome, endereco, telefone) VALUES(?, ?, ?)';
  try {
    await db.execute(sql, [nome, endereco, telefone]);
    res.status(201).send('Agência cadastrada com sucesso!');
  } catch (err) {
    console.log(err)
    logger.info(`Este aqui o erro: ${err}`);
    res.status(500).send('Erro ao cadastrar agência');
  }
})

    //Função para lista todas as AT's
app.get('/agencias', async (req, res) => {
  try {
    const [agenciasTRSF] = await db.query('SELECT * FROM agencias_transfusionais');
    res.status(200).json(agenciasTRSF);
  } catch (error) {
    console.error('Erro ao buscar agências transfusionais:', error);
    res.status(500).json({ error: 'Erro ao buscar agências transfusionais' });
  }
});

    //Função para atualizar os dados das agências.
app.put('/agencias/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, endereco, telefone } = req.body;

  try {
    const query = 'UPDATE agencias_transfusional SET nome = ?, endereco = ?, telefone = ? WHERE id = ?';
    const result = await db.query( query, [nome, endereco, telefone, id ]);

    if(result.affectedRows === 0) {
      return res.status(404).json({ error: 'Agência não encontrada' });
    }
    res.status(200).json({ message: 'Agência atualizada com sucesso! '});
  } catch (error) {
    console.error('Erro ao atulizar a agência:', error);
    res.status(500).json({ error: 'Erro ao atualizar a agência!' });
  }
})


app.listen(3001,() => {
  console.log('Servidor rodando na porta 3001');
})