# Atividade 03 - Leitor OBJ para Modelos 3D

Nesta terceira atividade de Computação Gráfica, foi proposto criar uma classe própria, `CustomOBJParser`, para ler arquivos no formato OBJ, que são amplamente utilizados para descrever modelos 3D. Além disso, a tarefa envolveu a criação de testes unitários para validar o funcionamento da classe.

## Tecnologias

- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) (para testes unitários)

## Estrutura do Código

- O arquivo `src/CustomOBJParser.ts` contém a implementação da classe `CustomOBJParser`, responsável por analisar arquivos OBJ e criar uma estrutura de dados representando o modelo 3D.
- Os testes unitários estão na pasta `__tests__`.

## Como Executar

Primeiro é necessário instalar as `node_modules`, executando o comando abaixo (**É necessário ter o NodeJS instalado na máquina**):

```bash
npm install
```

Após a instalação das `node_modules`, para executar os testes unitários, execute o seguinte comando:

```bash
npm run test
```

## Uso da Classe `CustomOBJParser`

A classe `CustomOBJParser` é usada para analisar arquivos OBJ e criar uma representação dos modelos 3D. Aqui está um exemplo de como usá-la:

```typescript
import CustomOBJParser from './CustomOBJParser';

const objContents = `...`; // Conteúdo do arquivo OBJ

const parser = new CustomOBJParser(objContents);
const result = parser.parse();

console.log(result); // Estrutura de dados do modelo 3D
```

## Documentação

Para abrir a documentação do código, acesse o arquivo `docs/index.html`.
