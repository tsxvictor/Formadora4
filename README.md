# 📋 Lista de Tarefas — To-Do List

Aplicação full stack de Lista de Tarefas desenvolvida como projeto acadêmico na disciplina de **Desenvolvimento Mobile** do curso de **Análise e Desenvolvimento de Sistemas** da **UNISUAM**.

## 🏗️ Arquitetura
React Native App (Frontend) ⟺ API REST (Backend) ⟺ MongoDB Atlas (Banco de Dados)

## 🚀 Tecnologias Utilizadas

**Frontend**
- React Native com Expo
- Fetch API para requisições HTTP
- Async/Await para operações assíncronas

**Backend**
- Node.js
- Express
- Mongoose (ODM para MongoDB)
- CORS
- Dotenv

**Banco de Dados**
- MongoDB Atlas (nuvem)

## ✅ Funcionalidades

- Adicionar novas tarefas
- Visualizar lista de tarefas
- Marcar tarefas como concluídas
- Excluir tarefas
- Indicador de carregamento (loading)
- Tratamento de erros
- Contador de tarefas pendentes e concluídas

## 📁 Estrutura do Projeto
formadora4/

├── todo-backend/

│   ├── models/

│   │   └── Task.js        # Schema do Mongoose

│   ├── routes/

│   │   └── tasks.js       # Endpoints CRUD

│   ├── .env               # Variáveis de ambiente (não versionado)

│   ├── server.js          # Servidor Express

│   └── package.json

└── todo-frontend/

├── services/

│   └── api.js         # Comunicação com o backend

├── App.js             # Interface do usuário

└── package.json

## 🔌 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/tasks | Listar todas as tarefas |
| POST | /api/tasks | Criar nova tarefa |
| PATCH | /api/tasks/:id | Alternar status da tarefa |
| DELETE | /api/tasks/:id | Excluir tarefa |

## ▶️ Como Rodar o Projeto

**Backend**
```bash
cd todo-backend
npm install
npm run dev
```

**Frontend**
```bash
cd todo-frontend
npx expo start
```

## 👨‍💻 Autor

**Victor Gabriel Correia do Nascimento**  
Análise e Desenvolvimento de Sistemas — UNISUAM  
GitHub: [@tsxvictor](https://github.com/tsxvictor)