# Backend - Projeto Avaliativo Final

Backend Node.js com Express e MongoDB Atlas para CRUD de itens.

## Instalação

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```
MONGODB_URI=sua_string_de_conexao_mongodb
PORT=3000
```

## Executar

```bash
npm start
```

## Endpoints

- `GET /api/items` - Listar todos os itens
- `GET /api/items/:id` - Buscar item por ID
- `POST /api/items` - Criar novo item
- `PUT /api/items/:id` - Atualizar item
- `DELETE /api/items/:id` - Deletar item

