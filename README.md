# MechanicSystem

Aplicação completa para gerenciamento de serviços mecânicos, composta por **backend em Node.js + Express + TypeScript** e **frontend em React + TypeScript**.  
Utilizamos **Prisma ORM** com **PostgreSQL** como banco de dados principal.

---

## 🚀 Tecnologias

### Backend
- Node.js
- Express 4
- TypeScript
- ts-node-dev
- Prisma ORM (somente PostgreSQL)
- Zod (validação)
- JWT (autenticação)
- Bcrypt (hash de senha)

### Frontend
- React + Vite
- TypeScript
- React Router DOM
- Axios
- TailwindCSS
- Zustand (gerenciamento de estado)

### Banco de Dados
- **PostgreSQL**
- Prisma Client

⚠️ **Importante:**  
O Prisma funciona com MongoDB e SQLite, mas **esta aplicação está configurada exclusivamente para PostgreSQL**.  
Nenhuma outra configuração foi implementada.

---

## 📁 Estrutura de Pastas

```
mechanicsystem/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middlewares/
│   │   ├── database/
│   │   ├── server.ts
│   │   └── app.ts
│   └── prisma/
│       └── schema.prisma
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── hooks/
    │   ├── store/
    │   └── main.tsx
```

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório
```
git clone https://github.com/seu-user/mechanicsystem.git
cd mechanicsystem
```

---

## ▶️ Backend

### 2. Instalar dependências
```
cd backend
npm install
```

### 3. Configurar variáveis de ambiente
Crie o arquivo `.env`:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/mechanicsystem?schema=public"
JWT_SECRET="sua_chave"
PORT=3333
```

### 4. Aplicar o schema no PostgreSQL
```
npx prisma migrate dev
```

### 5. Rodar o servidor
```
npm run dev
```

Servidor disponível em:  
`http://localhost:3333`

---

## 🖥️ Frontend

### 1. Instalar dependências
```
cd frontend
npm install
```

### 2. Rodar o frontend
```
npm run dev
```

Aplicação disponível em:  
`http://localhost:5173`

---

## 📌 Rotas Principais (Backend)

### **Clientes**
```
POST   /clients          -> Criar cliente
GET    /clients          -> Listar todos
GET    /clients/:id      -> Buscar por ID
PUT    /clients/:id      -> Atualizar cliente
DELETE /clients/:id      -> Remover cliente
```

### **Veículos**
```
POST   /vehicles         -> Criar veículo
GET    /vehicles         -> Listar todos
GET    /vehicles/:id     -> Buscar por ID
PUT    /vehicles/:id     -> Atualizar veículo
DELETE /vehicles/:id     -> Remover veículo
```

### **Ordens de Serviço (OS)**
```
POST   /orders           -> Criar OS
GET    /orders           -> Listar OS
GET    /orders/:id       -> Buscar OS por ID
PUT    /orders/:id       -> Atualizar OS
DELETE /orders/:id       -> Remover OS
```

### **Autenticação**
```
POST   /auth/register    -> Registrar usuário
POST   /auth/login       -> Login e token JWT
GET    /auth/me          -> Perfil do usuário autenticado
```

---

## 🎨 Funcionalidades do Frontend

- Login e autenticação JWT  
- Listagem de clientes, veículos e ordens  
- Criação e edição através de formulários  
- Dashboard geral  
- Consumo da API via Axios  
- Interface com TailwindCSS  
- Persistência de sessão com Zustand  

---

## 🧩 Como Contribuir

```
git checkout -b minha-feature
git commit -m "Minha nova feature"
git push origin minha-feature
```

---

## 📄 Licença

Este projeto é de uso livre para estudos.

---

## 📌 Observação Final

Esta aplicação **não foi configurada para MongoDB ou SQLite**.  
O Prisma utilizado aqui é **exclusivamente compatível com PostgreSQL**, que é o único banco implementado.

