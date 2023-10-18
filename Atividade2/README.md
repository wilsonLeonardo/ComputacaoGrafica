# Atividade 02 - Computação Grafica

Essa segunda atividade tinhamos como intuito cria classes proprias para manipular vetores e matrizes, partindo de uma classe `Vec3` que gera uma imagen `.ppm` degradê da mesma forma que a atividade anterior.

## Tecnologias

- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Estrutura do código

- O arquivo `src/index.ts` está responsável por criar a função `main`, intanciar a classe `Vec3` e gerar a imagem degradê em `src/out/image.ppm`
- Existe subpastas para os vetores e para matrizes, que estão em `src/vec` e `src/mat` respectivamente. Existe uma classe base tanto para vetores e para matrizes e foi implementado 3 classes com dimensoes diferentes para cada:
  - Vetores: `Vec2`, `Vec3` e `Vec4`
  - Matrizes: `Mat2`, `Mat3` e `Mat4`
- Os testes unitarios está na pasta `__tests__`

## Como executar

Primeiro é necessário instalar a `node_modules` executando o comando abaixo (**Para é isso é mandatorio que o NodeJS esteja instalado na máquina**):

```
npm install
```

Após instalado a `node_modules`, para gerar as imagens execute o comando abaixo:

```
npm run execute
```

Para executar os testes unitarios, execute o comando abaixo:

```
npm run test
```

## Documentação

Para abrir a documentação do codigo, abra o arquivo `docs/index.html`
