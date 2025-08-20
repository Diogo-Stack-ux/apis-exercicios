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


/*materias-api.js*/
app.use(express.json());

// Banco de dados em memória
let materias = [];
let idMateria = 1;

// GET /materias - Listar todos
app.get('/materias', (req, res) => {
  res.json(materias);
});

// GET /materias/:id - Buscar por ID
app.get('/materias/:id', (req, res) => {
  const materia = materias.find(i => i.id === parseInt(req.params.id));
  if (!materia) return res.status(404).json({ mensagem: 'materia não encontrado' });
  res.json(materia);
});

// POST /materias - Criar novo
app.post('/materias', (req, res) => {
  const { nome, descricao, anoLetivo } = req.body;

  const novoMateria = {
    id: idMateria++,
    nome,
    descricao,
    anoLetivo
  };

  materias.push(novoMateria);
  res.status(201).json(novoMateria);
});

// PUT /materias/:id - Atualizar
app.put('/materias/:id', (req, res) => {
  const { nome, descricao, anoLetivo   } = req.body;
  const materia = materias.find(i => i.id === parseInt(req.params.id));
  if (!materia) return res.status(404).json({ mensagem: 'aluno não encontrado' });

    materia.nome = nome;
    materia.descricao = descricao;
    materia.anoLetivo = anoLetivo;


  res.json(materia);
});

// DELETE /materias/:id - Remover
app.delete('/materias/:id', (req, res) => {
  const index = materias.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ mensagem: ' não encontrado' });

  materias.splice(index, 1);
  res.status(204).send();
});

/*filmes-api.js*/
app.use(express.json());

// Banco de dados em memória
let filmes = [];
let idFilme = 1;

// GET /filmes - Listar todos
app.get('/filmes', (req, res) => {
  res.json(filmes);
});

// GET /filmes/:id - Buscar por ID
app.get('/filmes/:id', (req, res) => {
  const filme = filmes.find(i => i.id === parseInt(req.params.id));
  if (!filme) return res.status(404).json({ mensagem: 'filme não encontrado' });
  res.json(filme);
});

// POST /filmes - Criar novo
app.post('/filmes', (req, res) => {
  const { nome, diretor, assunto, classificacaoEtaria } = req.body;

  const novoFilme = {
    id: idFilme++,
    nome,
    diretor,
    assunto,
    classificacaoEtaria
  };

  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
});

// PUT /filmes/:id - Atualizar
app.put('/filmes/:id', (req, res) => {
  const { nome, diretor, assunto, classificacaoEtaria  } = req.body;
  const filme = filmes.find(i => i.id === parseInt(req.params.id));
  if (!filme) return res.status(404).json({ mensagem: 'filme não encontrado' });

    filme.nome = nome;
    filme.diretor = diretor;
    filme.assunto = assunto;
    filme.classificacaoEtaria = classificacaoEtaria;

  res.json(filme);
});

// DELETE /filmes/:id - Remover
app.delete('/filmes/:id', (req, res) => {
  const index = filmes.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ mensagem: ' não encontrado' });

  filmes.splice(index, 1);
  res.status(204).send();
});

/*pneus-api.js*/
app.use(express.json());

// Banco de dados em memória
let pneus = [];
let idPneu = 1;

// GET /pneus - Listar todos
app.get('/pneus', (req, res) => {
  res.json(pneus);
});

// GET /pneus/:id - Buscar por ID
app.get('/pneus/:id', (req, res) => {
  const pneu = pneus.find(i => i.id === parseInt(req.params.id));
  if (!pneu) return res.status(404).json({ mensagem: 'pneu não encontrado' });
  res.json(pneu);
});

// POST /pneus - Criar novo
app.post('/pneus', (req, res) => {
  const { marca, modelo, largura, raio, espessura, cargaMaxima } = req.body;

  const novoPneu = {
    id: idPneu++,
    marca,
    modelo,
    largura,
    raio,
    espessura,
    cargaMaxima
  
  };

  pneus.push(novoPneu);
  res.status(201).json(novoPneu);
});

// PUT /pneus/:id - Atualizar
app.put('/pneus/:id', (req, res) => {
  const { marca, modelo, largura, raio, espessura, cargaMaxima  } = req.body;
  const pneu = pneus.find(i => i.id === parseInt(req.params.id));
  if (!pneu) return res.status(404).json({ mensagem: 'pneu não encontrado' });

   pneu.marca = marca;
   pneu.modelo = modelo;
   pneu.largura = largura;
   pneu.raio = raio;
   pneu.espessura = espessura;
   pneu.cargaMaxima = cargaMaxima;

  res.json(pneu);
});

// DELETE /pneus/:id - Remover
app.delete('/pneus/:id', (req, res) => {
  const index = pneus.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ mensagem: ' não encontrado' });

  pneus.splice(index, 1);
  res.status(204).send();
});

/*instrumentos-api.js*/
app.use(express.json());

// Banco de dados em memória
let instrumentos = [];
let idInstrumento = 1;

// GET /instrumentos - Listar todos
app.get('/instrumentos', (req, res) => {
  res.json(instrumentos);
});

// GET /instrumentos/:id - Buscar por ID
app.get('/instrumentos/:id', (req, res) => {
  const instrumentos = instrumentos.find(i => i.id === parseInt(req.params.id));
  if (!instrumento) return res.status(404).json({ mensagem: 'instrumento não encontrado' });
  res.json(instrumento);
});

// POST /instrumentos - Criar novo
app.post('/instrumentos', (req, res) => {
  const { nome, tipo } = req.body;

  const novoInstrumento = {
    id: idInstrumento++,
   nome,
   tipo
  };

  instrumentos.push(novoInstrumento);
  res.status(201).json(novoInstrumento);
});

// PUT /instrumentos/:id - Atualizar
app.put('/instrumentos/:id', (req, res) => {
  const { nome, tipo } = req.body;
  const instrumento = instrumentos.find(i => i.id === parseInt(req.params.id));
  if (!instrumento) return res.status(404).json({ mensagem: 'instrumento não encontrado' });

  instrumento.nome = nome;
  instrumento.tipo = tipo;

  res.json(instrumento);
});

// DELETE /instrumentos/:id - Remover
app.delete('/instrumentos/:id', (req, res) => {
  const index = instrumentos.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ mensagem: ' não encontrado' });

  instrumentos.splice(index, 1);
  res.status(204).send();
});

/*livros-api.js*/
app.use(express.json());

// Banco de dados em memória
let livros = [];
let idLivros = 1;

// GET /livros - Listar todos
app.get('/livros', (req, res) => {
  res.json(livros);
});

// GET /livros/:id - Buscar por ID
app.get('/livros/:id', (req, res) => {
  const livros = livros.find(i => i.id === parseInt(req.params.id));
  if (!livros) return res.status(404).json({ mensagem: 'livros não encontrado' });
  res.json(livros);
});

// POST /livros - Criar novo
app.post('/livros', (req, res) => {
  const {  nome, autor, assunto, resumo, dataLancamento, precoSugerido } = req.body;

  const novoLivros = {
    id: idLivros++,
   nome,
    autor,
    assunto,
    resumo,
    dataLancamento,
    precoSugerido
  };

  livros.push(novoLivros);
  res.status(201).json(novoLivros);
});

// PUT /livros/:id - Atualizar
app.put('/livros/:id', (req, res) => {
  const { nome, autor, assunto, resumo, dataLancamento, precoSugerido } = req.body;
  const livro = livros.find(i => i.id === parseInt(req.params.id));
  if (!livro) return res.status(404).json({ mensagem: 'livro não encontrado' });

  livro.nome = nome;
  livro.autor = autor;
  livro.assunto = assunto;
  livro.resumo = resumo;
  livro.dataLancamento = dataLancamento;
  livro.precoSugerido = precoSugerido;


  res.json(livro);
});

// DELETE /livros/:id - Remover
app.delete('/livros/:id', (req, res) => {
  const index = livros.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ mensagem: ' não encontrado' });

  livros.splice(index, 1);
  res.status(204).send();
});
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

