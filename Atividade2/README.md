# Atividade 02 - Computação Gráfica

Nesta segunda atividade, tínhamos como intuito criar classes próprias para manipular vetores e matrizes, partindo de uma classe `Vec3` que gera uma imagem no formato `.ppm`, degradê, da mesma forma que a atividade anterior. Além disso, deveríamos extender a classe Vec3 para as seguintes classes: `Vec2`, `Vec4`, `Mat2`, `Mat3` e `Mat4`.

## Tecnologias

- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Estrutura do Código

- O arquivo `src/index.ts` é responsável por criar a função `main`, instanciar a classe `Vec3` e gerar a imagem degradê em `src/out/image.ppm`.
- Existem subpastas para vetores e matrizes, que estão em `src/vec` e `src/mat`, respectivamente. Existe uma classe base tanto para vetores quanto para matrizes, e foram implementadas 3 classes com dimensões diferentes para cada uma:
  - Vetores: `Vec2`, `Vec3` e `Vec4`.
  - Matrizes: `Mat2`, `Mat3` e `Mat4`.
- Os testes unitários estão na pasta `__tests__`.

## Como Executar

Primeiro é necessário instalar as `node_modules`, executando o comando abaixo (**Para isso, é mandatório que o NodeJS esteja instalado na máquina**):

```
npm install
```

Após a instalação das `node_modules`, para gerar as imagens, execute o comando abaixo:

```
npm run execute
```

Para executar os testes unitários, execute o comando abaixo:

```
npm run test
```

## Documentação

Para abrir a documentação do código, acesse o arquivo `docs/index.html`.
