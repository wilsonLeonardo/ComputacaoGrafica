# Atividade 05 - Materiais Difusos

Na quinta atividade de Computação Gráfica, foram implementados materiais difusos conforme as orientações do tutorial [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html). As seções 6, 7, 8, 9 e 12 do tutorial foram seguidas para aprimorar a implementação existente.

## Implementações Realizadas

- **Material Difuso:** Foi adicionado o suporte para materiais difusos utilizando informações de normais do modelo. A classe `Lambertian` foi implementada para representar esse tipo de material.

- **Visualização da Cena:** A cena foi composta por pelo menos três objetos, cada um com seu próprio material difuso. Foram realizadas visualizações de dois pontos de vista diferentes para melhor avaliação.

## Estrutura do Código

As implementações foram integradas ao projeto existente, localizado nos diretórios `src/utils` e `src/vec`. E as imagens geradas estão localizadas no seguinte path: `src/out`. As classes relacionadas aos materiais difusos estão no arquivo `Lambertian.ts`.

## Como Executar

Antes de executar, certifique-se de instalar as `node_modules` usando o seguinte comando:

```bash
npm install
```

Para gerar os arquivos das visualizações com os materiais difusos, utilize o seguinte comando:

```bash
yarn execute
```

## Documentação

Para consultar a documentação do código, acesse o arquivo `docs/index.html`.