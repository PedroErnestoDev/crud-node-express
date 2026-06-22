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
├── controllers/          # Lógica de controle das rotas (ex: userController.js)
├── db/                   # Configuração de conexão com o banco de dados (connection.js)
├── models/               # Definição das tabelas e regras de negócio (User.js, userModel.js)
├── routes/               # Definição dos endpoints e métodos da API (userRoutes.js)
├── app.js                # Configuração principal do Express e middlewares
├── server.js             # Ponto de entrada que inicializa o servidor HTTP
├── package.json          # Dependências e metadados do projeto
└── .gitignore            # Arquivos e pastas ignorados pelo Git
```

## ⚙️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (Versão LTS recomendada)
* [MySQL](https://www.mysql.com/) (Servidor de banco de dados rodando localmente)
* Um editor de código (como o VS Code)

## 🛠️ Instalação e Configuração

**1. Clone o repositório:**
```bash
git clone [https://github.com/SEU_USUARIO/taskflow.git](https://github.com/SEU_USUARIO/taskflow.git)
cd taskflow
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Configure os Scripts de Execução:**
Para facilitar a inicialização, você pode adicionar os seguintes scripts dentro do objeto `"scripts"` no seu arquivo `package.json`:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

**4. Configure o Banco de Dados:**
Abra o arquivo `db/connection.js` e certifique-se de que as credenciais do Sequelize (nome do banco, usuário e senha) estejam mapeadas corretamente com o seu servidor MySQL local.

**5. Execute o servidor:**

Para rodar o projeto em ambiente de desenvolvimento com o Nodemon (auto-reload ativo):
```bash
npm run dev
```

Ou se preferir rodar diretamente via npx sem alterar os scripts do package.json:
```bash
npx nodemon server.js
```

O servidor iniciará e estará pronto para receber requisições na porta configurada no seu código.
