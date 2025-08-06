/*carros-api.js*/
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Aqui o app já foi declarado corretamente

// Banco de dados em memória
let carros = [];
let idCarros = 1;

// Rota: GET /carros (listar todos)
app.get('/carros', (req, res) => {
  res.json(carros);
});

// Rota: GET /carros/:id (detalhar carro por ID)
app.get('/carros/:id', (req, res) => {
  const carro = carros.find(c => c.id === parseInt(req.params.id));
  if (!carro) return res.status(404).json({ mensagem: 'Carro não encontrado' });
  res.json(carro);
});

// Rota: POST /carros (criar novo carro)
app.post('/carros', (req, res) => {
  const { fabricante, modelo, anoFabricacao, cor, quilometrosRodados } = req.body;

  const novoCarro = {
    id: idCarros++,
    fabricante,
    modelo,
    anoFabricacao,
    cor,
    quilometrosRodados
  };

  carros.push(novoCarro);
  res.status(201).json(novoCarro);
});

// Rota: PUT /carros/:id (atualizar carro)
app.put('/carros/:id', (req, res) => {
  const { fabricante, modelo, anoFabricacao, cor, quilometrosRodados } = req.body;
  const carro = carros.find(c => c.id === parseInt(req.params.id));
  if (!carro) return res.status(404).json({ mensagem: 'Carro não encontrado' });

  carro.fabricante = fabricante;
  carro.modelo = modelo;
  carro.anoFabricacao = anoFabricacao;
  carro.cor = cor;
  carro.quilometrosRodados = quilometrosRodados;

  res.json(carro);
});

// Rota: DELETE /carros/:id (remover carro)
app.delete('/carros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = carros.findIndex(c => c.id === id);
  if (index === -1) return res.status(404).json({ mensagem: 'Carro não encontrado' });

  carros.splice(index, 1);
  res.status(204).send();
});



/* instrutores-api.js */


app.use(express.json());

// Banco de dados em memória
let instrutores = [];
let idInstrutores = 1;

// GET /instrutores - Listar todos
app.get('/instrutores', (req, res) => {
  res.json(instrutores);
});

// GET /instrutores/:id - Buscar por ID
app.get('/instrutores/:id', (req, res) => {
  const instrutor = instrutores.find(i => i.id === parseInt(req.params.id));
  if (!instrutor) return res.status(404).json({ mensagem: 'Instrutor não encontrado' });
  res.json(instrutor);
});

// POST /instrutores - Criar novo
app.post('/instrutores', (req, res) => {
  const { nome, especialidade, dataNascimento, endereco, comum } = req.body;

  const novoInstrutor = {
    id: idInstrutores++,
    nome,
    especialidade,
    dataNascimento,
    endereco,
    comum
  };

  instrutores.push(novoInstrutor);
  res.status(201).json(novoInstrutor);
});

// PUT /instrutores/:id - Atualizar
app.put('/instrutores/:id', (req, res) => {
  const { nome, especialidade, dataNascimento, endereco, comum } = req.body;
  const instrutor = instrutores.find(i => i.id === parseInt(req.params.id));
  if (!instrutor) return res.status(404).json({ mensagem: 'Instrutor não encontrado' });

  instrutor.nome = nome;
  instrutor.especialidade = especialidade;
  instrutor.dataNascimento = dataNascimento;
  instrutor.endereco = endereco;
  instrutor.comum = comum;

  res.json(instrutor);
});

// DELETE /instrutores/:id - Remover
app.delete('/instrutores/:id', (req, res) => {
  const index = instrutores.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ mensagem: 'Instrutor não encontrado' });

  instrutores.splice(index, 1);
  res.status(204).send();
});

/*alunos-api.js*/
app.use(express.json());

// Banco de dados em memória
let alunos = [];
let idAlunos = 1;

// GET /alunos - Listar todos
app.get('/alunos', (req, res) => {
  res.json(alunos);
});

// GET /alunos/:id - Buscar por ID
app.get('/alunos/:id', (req, res) => {
  const aluno = alunos.find(i => i.id === parseInt(req.params.id));
  if (!aluno) return res.status(404).json({ mensagem: 'Instrutor não encontrado' });
  res.json(aluno);
});

// POST /alunos - Criar novo
app.post('/alunos', (req, res) => {
  const { nome, nomePai, nomeMae, dataNascimento, corPele } = req.body;

  const novoAluno = {
    id: idAlunos++,
    nome,
    nomePai,
    nomeMae,
    dataNascimento,
    corPele
  };

  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

// PUT /alunos/:id - Atualizar
app.put('/alunos/:id', (req, res) => {
  const { nome, nomePai, nomeMae, dataNascimento, corPele } = req.body;
  const aluno = alunos.find(i => i.id === parseInt(req.params.id));
  if (!aluno) return res.status(404).json({ mensagem: 'aluno não encontrado' });

    aluno.nome = nome;
    aluno.nomePai = nomePai;
    aluno.nomeMae = nomeMae;
    aluno.dataNascimento = dataNascimento;
    aluno.corPele = corPele;



  res.json(aluno);
});

// DELETE /alunos/:id - Remover
app.delete('/alunos/:id', (req, res) => {
  const index = alunos.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ mensagem: ' não encontrado' });

  alunos.splice(index, 1);
  res.status(204).send();
});


app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

