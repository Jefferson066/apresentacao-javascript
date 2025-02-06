const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let pessoas = [];

// Criar pessoa
app.post('/pessoas', (req, res) => {
    const { nome, idade } = req.body;
    const id = pessoas.length + 1;
    const pessoa = { id, nome, idade };
    pessoas.push(pessoa);
    res.status(201).json(pessoa);
});

// Recuperar pessoa por ID
app.get('/pessoas/:id', (req, res) => {
    const pessoa = pessoas.find(p => p.id == req.params.id);
    if (!pessoa) return res.status(404).json({ error: 'Pessoa não encontrada' });
    res.json(pessoa);
});

// Listar todas as pessoas
app.get('/pessoas', (req, res) => {
    res.json(pessoas);
});

// Remover pessoa por ID
app.delete('/pessoas/:id', (req, res) => {
    const index = pessoas.findIndex(p => p.id == req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Pessoa não encontrada' });
    pessoas.splice(index, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
