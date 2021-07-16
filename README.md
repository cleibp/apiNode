# 📚 API REST NODE DE NOTÍCIAS

## 📖 Começando...
```
Para começar, você deve simplesmente clonar/baixar o repositório do projeto na sua máquina e instalar as dependências.
```

## 🚀 Pre-Requisitos...
```
Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina o NODE
```

## 📝 Passo a passo...
1. Clone/Baixe o projeto:

    ### Clonando

    ```bash
    git clone https://github.com/cleibp/apiNode.git
    ```

    ### Download Manual

        1.  Download do repositório
        2.  Descompacte para o diretório desejado


1. Após clonar/baixar o projeto entre na pasta.

1. Crie o arquivo .env na raiz.

1. Copie e cole o conteúdo do arquivo `.env.example` no arquivo `.env`.

1. Execute o comando pelo terminal:
    ```bash
    npm install
    ```
    Ou
    ```bash
    npm i
    ```

1. Verifique o arquivo package.json para ver os tipos de script que podem ser executados.

1. Após executar a aplicação acesse a url 👉 **http://localhost:3000/docs** para conhecer a documentação pertinente as rotas.


## 🚧 Estrutura do Projeto

```sh
.
├── package.json
├── README.md
├── server.js
└── src
    ├── app.js
    ├── controllers
    │   ├── newsController.js
    │   └── userController.js
    ├── database
    │   └── mongo.js
    ├── middlewares
    │   └── auth.js
    ├── model
    │   ├── newsModel.js
    │   └── userModel.js
    ├── parser
    │   ├── express.js
    │   └── index.js
    ├── routes
    │   ├── newsRoute.js
    │   ├── status.txt
    │   └── userRoute.js
    ├── settings
    │   └── enviroment.js
    └── tools
        └── swaggerDocs.js
```

