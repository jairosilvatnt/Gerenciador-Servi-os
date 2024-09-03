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

app.listen(3001,() => {
  console.log('Servidor rodando na porta 3001');
})