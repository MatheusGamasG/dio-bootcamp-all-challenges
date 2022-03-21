# Explorando a arquitetura REST com o Node

## Preparando o ambiente:

Primeiro realizamos o git init para começar um novo repositório, depois um npm init para criar um package json.

Também instalamos o TypeScript com o npm install typescript e iniciamos o typescript no projeto com o tsc --init.

Desse modo, foi criado o package.json e o tsconfig.json. Também criamos algumas pastas para organizar o repositório. As configurações do package e do tsconfig ficaram assim:

```
// package.json
{
  "name": "tokenauth",
  "version": "1.0.0",
  "description": "Projeto baseado em microsserviços para realizar autenticação de login via token.",
  "main": "./dist/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ./"
    "build": "tsc -p ."
  },
  "author": "MatheusGuimaraes",
  "license": "ISC"
}


```

```
// tsconfig.json

{
  "compilerOptions": {
    "target": "es2019",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "rootDir": "src",                                  /* Specify the root folder within your source files. */
    "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    "typeRoots": [
      "./src/@types",
      "./node_modules/@types"
    ],                                  /* Specify multiple folders that act like `./node_modules/@types`. */
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
    "removeComments": true,                           /* Disable emitting comments. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```

Depois disso, instalamos a lib do TypeScript localmente com npm install --save-dev typescript.

Além disso, instalamos os types do node com npm install --save-dev @types/node

Também instalamos o express. npm install express.

Instalamos ts-node-dev.

Instalamos http-status-codes.

## Integração Node-PostgreSQL

Há varias maneiras de integrar um banco de dados com o Node. ORM's, drivers nativos dos databases, etc. Usando o node-postgres

```
npm install --save pg

npm install --save-dev @types/pg
```

**Ver sobre ElephantSQL (banco de dados gratuito via web com integração fácil e localizado em SP)**

