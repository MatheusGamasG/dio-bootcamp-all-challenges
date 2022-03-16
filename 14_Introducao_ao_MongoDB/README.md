# Introdução ao MongoDB

## Neo4j

Banco de Dados baseado em grafos. Muito utilizado para redes sociais.

## Cassandra

Banco de Dados baseados em coluna/família. Muitos traços semelhantes ao SQL (inclusive a sintaxe), porém os valores não declarados em uma coluna não são armazenados, não estão lá. Oferecem algumas vantagens por causa disso.

## Redis

Banco de Dados baseado em "chave-valor", de forma independente e sem Schema (padrão). Uso mais restrito e mais direcionado.

## MongoDB

Banco de Dados baseado em documento. No modelo baseado em documentos todos os dados estão contidos dentro dele com JSON, XML, entre outros. Schema free.

Utiliza json e bson (json com binários) para armazenamento. Muito utilizado para big data, volume muito grande de dados.

Subindo o mongoDB no docker-compose. Para configurar, arquivo docker-compose.yml:

```
version: '3.8'

services:
  db:
    image: mongo
    container_name: db
    restart: always
    environment: 
      - MONGO_INITDB_ROOT_USERNAME=dio
      - MONGO_INITDB_ROOT_PASSWORD=dio
    ports:
      - "27017:27017"
    volumes: 
      - E:\Programming\Eduzz Bootcamp\14_Introducao_ao_MongoDB
      - E:\Programming\Eduzz Bootcamp\14_Introducao_ao_MongoDB\mongoContainer 

```

Baixar o Docker para conseguir containerizar o Mongo.

Baixar o Robo 3T.

### As práticas:

Embora não haja um padrão rígido de schema no MongoDB, isso não quer dizer que não tenha boas práticas.

**Embedding:** Documentos autocontidos. Tudo o que você precisar estará dentro dele sem precisar fazer referência para outros documentos. Mas, na prática, isso nem sempre é possível de ser feito.

Consulta informações em um único query, atualiza o registro em uma única operação. Por estar no mesmo documento. Porém, há um limite de 16MB por documento.

**Referência:** Documentos são pequenos e possuem possibilidade de relacionamento, não utiliza foreign keys, então precisa de cautela. 

Não duplica informações como no caso do Embedding.

Quebra bastante o paradigma de schema dos DB SQL.

É bom evitar documentos muito grandes. Usar campos objetivos e curtos (pois o nome das propriedades também estará ocupando espaço no documento). Evitar negações em queries. Atualizar apenas os campos alterados.

### Querys:

```
// Insere um único documento numa collection dentro de um database

db.nomeCollection.insertOne({"valor": "string"});
```

Os valores são passados como um JSON. Cada chave de JSON aberta é um documento diferente dentro da collection.

Database > Collections > Documents

```
// Imprime os registros da collection. Pode receber parâmetros para filtrar os registros.

db.nomeCollection.find();
```

```
// Insere novos valores ou atualiza

// para atualizar (mas atualiza o documento por completo, não é uma boa prática)
db.nomeCollection.save({"_id": ObjectId("idcompleto"), "novovalor": 1, "outrovalor": "string"});

// para inserir
db.nomeCollection.save({"novoValor": 1, "outrovalor": "string"})

// inserir mais do que um documento
db.nomeCollection.save([{"novoValor": 1}, {"outroValor": "string"}])
```

Para atualizar da maneira mais correta é com o update, que tem muitos parâmetros possíveis e é bem completo:
```
// primeiro parametro busca odocumento a ser utilizado, segundo parametro dados inseridos
db.nomeCollection.update({"nome": "Spongebob"}, {$set :{"age": 41}});
```

Para deletar
```
db.nomeCollection.deleteOne({"nome": "Spongebob"});

// Para mais de um valor deletado, usar deleteMany
db.nomeCollection.deleteMany({"age": 55});
```

