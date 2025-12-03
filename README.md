# Backend - Projeto Avaliativo Final

Backend Node.js com Express e MongoDB Atlas para CRUD de itens e endereços.

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
# ou para desenvolvimento com auto-reload
npm run dev
```

## Endpoints

### Itens
- `GET /api/items` - Listar todos os itens
- `GET /api/items/:id` - Buscar item por ID
- `POST /api/items` - Criar novo item
- `PUT /api/items/:id` - Atualizar item
- `DELETE /api/items/:id` - Deletar item

### Endereços
- `GET /api/enderecos` - Listar todos os endereços
- `GET /api/enderecos/:id` - Buscar endereço por ID
- `POST /api/enderecos` - Criar novo endereço
- `PUT /api/enderecos/:id` - Atualizar endereço
- `DELETE /api/enderecos/:id` - Deletar endereço

## Estrutura de Dados

### Item
```json
{
  "nome": "string",
  "descricao": "string",
  "dataCriacao": "date"
}
```

### Endereço
```json
{
  "cep": "string",
  "rua": "string",
  "bairro": "string",
  "numero": "string",
  "estado": "string",
  "dataCriacao": "date"
}
```

