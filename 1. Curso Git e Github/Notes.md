# Anotações de Curso Git

Anotações que considero fora do meu escopo de conhecimento e/ou agregaram bastante e decidi anotar. 📖

## Sha1

**Sha1 ->** Conjunto de 40 caracteres que identifica os commits. É uma técnica de codificação e é interessante pois identifica as mudanças realizadas nos arquivos. Se o arquivo A com um determinado sha1 sofre modificação, o arquivo ganha um novo sha1, mas se a modificação for desfeita e voltar a ser como era no ínicio, a identificação sha1 volta a ser a anterior. Muito otimizado.

## Objetos específicos do Git
            
**Blobs ->** Faz o sha1 e armazena metadados no Blob, guardando informações. Unidade mínima dentro do Git.
            
**Trees ->** Armazenam Blobs e apontam para eles e para outras Trees. O sha1 da árvore muda se tiver qualquer alteração em seus blobs.
            
**Commits ->** Objeto que aponta para as árvores, para outros commits, autores e mensagens. O sha1 desse commit carrega todas essas informações.
            
**Chave SSH – Autenticação mais segura do que login e senha normais do GitHub**
            
No Bash –
**ssh-keygen   -t ed25519 -C e-mail ->** Gera uma chave SSH em uma pasta do computador que você adiciona lá no GITHUB, permitindo que seja possível fazer pushes ao github sem a necessidade de login. Gera uma chave privada e uma chave pública. Lá na aba setting do github adiciona-se a chave pública.

**eval $(sshagent -s) ->** Starta um ssh agent

**ssh-add chaveprivada ->** Configura a chave privada na sua máquina para descriptografar a mensagem chegando a partir dessa chave pública
            
**Token –** Outra forma de autenticação. Mais simples, onde o GitHub gera um token e você o guarda em um arquivo seguro. Quando clonar repositórios privados é necessário inserir o token gerado.

## Passos práticos
As branches são linhas de trabalhos diferentes;

HEAD é o estado atual que se encontra os arquivos, antes de adicionar e commitar.

**ls ->** Mostra os caminhos dos diretórios do computador.

**cd path ->** Chama o caminho onde a pasta que você quer colocar no repositório, serve para a navegação entre pastas mesmo.

**git init ->** Inicia um repositório a partir da pasta selecionada. O parâmetro --bare indica que o repositório iniciado só serve para armazenamento, não podfazer push.

**git status ->** Mostra diversas informações do status do repositório.

**git add ->** Para dar um commit de algum arquivo no repositório. Se passar git add . , passa a monitorar TODOS os arquivos da pasta.

**git rm ->** Serve para remover um arquivo do monitoramento.

**git config --local (ou global) user.name (ou user.email) “nome/email” ->** Coloca algumas configurações no git, como a sua identificação. Se for local, é apenanesse repositório específico, mas se for global vira para a máquina como um todo.

**git config --list ->** Lista todas as configurações da máquina

**git commit -m “mensagem” ->** Enviar o arquivo para um novo versionamento, a mensagem descreve as mudanças. Sempre que houver alguma modificação, para dar outrcommit, é necessário dar um git add file novamente.
