const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Conectado ao MongoDB Atlas');
})
.catch((error) => {
  console.error('Erro ao conectar ao MongoDB:', error);
});

const itemSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    default: ''
  },
  dataCriacao: {
    type: Date,
    default: Date.now
  }
});

const Item = mongoose.model('Item', itemSchema);

app.post('/api/items', async (req, res) => {
  try {
    const { nome, descricao } = req.body;
    const novoItem = new Item({ nome, descricao });
    const itemSalvo = await novoItem.save();
    res.status(201).json(itemSalvo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find().sort({ dataCriacao: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item não encontrado' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/items/:id', async (req, res) => {
  try {
    const { nome, descricao } = req.body;
    const itemAtualizado = await Item.findByIdAndUpdate(
      req.params.id,
      { nome, descricao },
      { new: true, runValidators: true }
    );
    if (!itemAtualizado) {
      return res.status(404).json({ error: 'Item não encontrado' });
    }
    res.json(itemAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/api/items/:id', async (req, res) => {
  try {
    const itemDeletado = await Item.findByIdAndDelete(req.params.id);
    if (!itemDeletado) {
      return res.status(404).json({ error: 'Item não encontrado' });
    }
    res.json({ message: 'Item deletado com sucesso', item: itemDeletado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'API CRUD funcionando!', status: 'online' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

