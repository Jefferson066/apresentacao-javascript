import express, { Request, Response } from 'express';
import cors from 'cors'; // Importa o pacote CORS com tipagem

const app = express();
const port = 3001;

app.use(cors()); // Permite requisições de qualquer origem
app.use(express.json());

// Definindo a interface Pessoa com id, nome e idade
interface Pessoa {
  id: number;
  nome: string;
  idade: number;
}

let pessoas: Pessoa[] = [];

// Criar pessoa
app.post('/pessoas', (req: Request<{}, {}, Pessoa>, res: Response<Pessoa | { error: string }>) => {
  const { nome, idade } = req.body;

  if (idade < 0) {
    return res.status(400).json({ error: 'Idade negativa' });
  }

  const id = pessoas.length + 1;
  const pessoa: Pessoa = { id, nome, idade };

  pessoas.push(pessoa);
  return res.status(201).json(pessoa);
});

// Recuperar pessoa por ID
app.get('/pessoas/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const pessoa = pessoas.find((p) => p.id === id);

  if (!pessoa) {
    return res.status(404).json({ error: 'Pessoa não encontrada' });
  }
  return res.json(pessoa);
});

// Listar todas as pessoas
app.get('/pessoas', (req: Request, res: Response) => {
  return res.json(pessoas);
});

// Remover pessoa por ID
app.delete('/pessoas/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const index = pessoas.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Pessoa não encontrada' });
  }

  pessoas.splice(index, 1);
  return res.status(200).json({ message: 'Pessoa removida com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});