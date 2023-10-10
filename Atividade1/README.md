# Atividade 01 - Computação Grafica

Essa primeira atividade tinhamos como intuito criar uma classe para salvar imagens `.png` partindo de um Arquivo de imagem pixmap portáti (`.ppm`). Para armazenar as imagens `.ppm` foi utilizado o `fs` (padrão do node) e para realizar a conversão foi utilizado o [ImageMagick](https://imagemagick.org/).

## Tecnologias

- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Estrutura do código

- A classe (`GenerateImage`) responsável por armazenar os arquivos `.ppm` e converter para `.png` está em `src/utils/GenerateImage.ts`. Essas imagens são salvas em `src/out` no diretorio respectivo de sua extensão (`.ppm` está em `src/out/ppm` e `.png` está em `src/out/png`).  
    - Funções:
        - `generateGradientImage`: Gera a imagem de um gradiente
        - `generateCircleImage`: Gera a imagem de um circulo
        - `generateSquareImage`: Gera a imagem de um quadrado
        - `generateImage`: Gera o arquivo `.ppm` e `.png`
- O arquivo `src/index.ts` está responsável por criar a função `main`, intanciar a classe `GenerateImage` e chamar os métodos que irão gerar e converter as imagens (Gradiente, Circulo e Quadrado).


## Como executar

Primeiro é necessário instalar a `node_modules` executando o comando abaixo (**Para é isso é mandatorio que o NodeJS esteja instalado na máquina**):
```
npm install
```
Após instalado a `node_modules`, para gerar as imagens execute o comando abaixo:
```
npm run execute
```