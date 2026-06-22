# TaskFlow API

Um projeto backend construído em **Node.js** com **Express**, utilizando o ORM **Sequelize** para comunicação com o banco de dados **MySQL**. O projeto foi estruturado seguindo o padrão de arquitetura **MVC (Model-View-Controller)** para garantir organização, escalabilidade e facilidade de manutenção.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias e bibliotecas:

* **Node.js**: Ambiente de execução JavaScript.
* **Express** (`^5.2.1`): Framework web para criação de rotas e do servidor.
* **Sequelize** (`^6.37.8`): ORM para manipulação do banco de dados relacional.
* **MySQL2** (`^3.22.5`): Driver de conexão com o banco de dados MySQL.
* **Nodemon** (`^3.1.14`): Utilitário de desenvolvimento para reinicialização automática do servidor.

## 📂 Estrutura do Projeto (MVC)

A organização das pastas separa as responsabilidades do sistema da seguinte forma:

```text
TASKFLOW/
├── controllers/          # Lógica de controle e resposta das rotas (userController.js)
├── db/                   # Configuração de conexão com o banco de dados (connection.js)
├── models/               # Definição dos modelos e comunicação com o banco (User.js, userModel.js)
├── routes/               # Definição dos endpoints da API (userRoutes.js)
├── app.js                # Configuração principal do Express e middlewares
├── server.js             # Ponto de entrada que inicializa o servidor HTTP
├── package.json          # Dependências e metadados do projeto
└── .gitignore            # Arquivos e pastas ignorados pelo Git
```

## 🗄️ Estrutura do Banco de Dados

A API interage com o banco de dados chamado `taskflow`, utilizando a tabela `usuarios`. Abaixo estão os campos que compõem a estrutura do usuário:

| Campo | Tipo | Atributos | Descrição |
| :--- | :--- | :--- | :--- |
| `id_usuario` | `INT` | Primary Key Auto Increment | Identificador único do usuário. |
| `nome` | `VARCHAR(255)` | NOT NULL | Nome completo do usuário. |
| `email` | `VARCHAR(255)` | NOT NULL UNIQUE | E-mail exclusivo para login. |
| `senha` | `VARCHAR(255)` | NOT NULL | Senha cadastrada (criptografada). |
| `criado_em` | `TIMESTAMP` | DEFAULT Current Timestamp | Data e hora de criação do registro. |

## 🛣️ Rotas da API e Estrutura do Usuário (Payloads)

### Resumo dos Endpoints
| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/usuarios` | Lista todos os usuários cadastrados. |
| **GET** | `/usuario/:id` | Retorna os detalhes de um usuário pelo ID. |
| **POST** | `/usuarios` | Cria um novo usuário no sistema. |
| **PUT** | `/usuario/:id` | Atualiza os dados de um usuário existente pelo ID. |
| **DELETE** | `/usuarios/:id` | Remove um usuário do sistema com base no ID. |

---

### Detalhes de Envio e Resposta (JSON)

#### 1. Criar Usuário (`POST /usuarios`)
Para cadastrar um usuário, envie os campos `nome`, `email` e `senha` no corpo da requisição:

* **Corpo da Requisição (Body):**
```json
{
  "nome": "João Silva",
  "email": "joao@gmail.com",
  "senha": "senhaSegura123"
}
```
* **Resposta de Sucesso (`201 Created`):**
```json
{
  "id_usuario": 6,
  "nome": "João Silva",
  "email": "joao@gmail.com"
}
```

#### 2. Atualizar Usuário (`PUT /usuario/:id`)
Para modificar os dados de um usuário existente, informe o ID na URL e passe as informações atualizadas no corpo:

* **Corpo da Requisição (Body):**
```json
{
  "nome": "João Silva Alterado",
  "email": "joao.novo@gmail.com",
  "senha": "novaSenha456"
}
```
* **Resposta de Sucesso (`200 OK`):**
```json
{
  "nome": "João Silva Alterado",
  "email": "joao.novo@gmail.com",
  "senha": "novaSenha456"
}
```

#### 3. Listagem e Busca (`GET /usuarios` ou `/usuario/:id`)
Por motivos de segurança, as rotas de consulta omitem a senha e o `id_usuario`, retornando apenas os atributos essenciais configurados no modelo:
```json
{
  "message": "Usuario encontrado",
  "user": {
    "nome": "João Silva",
    "email": "joao@gmail.com",
    "criado_em": "2026-06-22T12:00:00.000Z"
  }
}
```

## ⚙️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* **Node.js** (Versão LTS recomendada)
* **MySQL** (Servidor de banco de dados rodando localmente)
* Um editor de código (como o **VS Code**)

## 🛠️ Instalação e Configuração

**1. Clone o repositório:**
```bash
git clone https://github.com/PedroErnestoDev/crud-node-express.git
cd taskflow
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Configure os Scripts de Execução:**
Adicione ou certifique-se de que possui os seguintes scripts configurados no seu `package.json`:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

**4. Configure o Banco de Dados:**
Abra o arquivo `db/connection.js` e certifique-se de preencher as credenciais do Sequelize (host, usuário, senha e o nome do banco como `teste`) para sincronizar perfeitamente com seu MySQL local.

**5. Execute o servidor:**

Para rodar o projeto em ambiente de desenvolvimento com o Nodemon (auto-reload ativo):
```bash
npx nodemon .\server.js
```

O servidor iniciará e estará pronto para receber requisições na porta configurada na aplicação.
