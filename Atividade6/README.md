# Atividade 06 - Metal e Vidro

Na sexta atividade de Computação Gráfica, foram implementados materiais com reflexão e refração conforme as orientações do tutorial [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html). As seções 10 e 11 do tutorial foram seguidas para aprimorar a implementação existente.

## Implementações Realizadas

- **Material metálico e de vidro:** Foi adicionado o suporte para materiais metálicos e de vidro utilizando informações de normais do modelo. A classe `Metal` foi implementada para representar o material metálico e a `Dielectric` para representar o material de vidro.

- **Visualização da Cena:** A cena foi composta por três objetos, um material difuso, um metalico e outro de vidro, sendo os dois ultimos, o cubo lido de um arquivo `.obj`.

## Estrutura do Código

As implementações foram integradas ao projeto existente, localizado nos diretórios `src/utils` e `src/vec`. E as imagens geradas estão localizadas no seguinte path: `src/out`.

## Como Executar

Antes de executar, certifique-se de instalar as `node_modules` usando o seguinte comando:

```bash
npm install
```

Para gerar os arquivos das visualizações com os materiais difusos, utilize o seguinte comando:

```bash
npm run execute
```

## Documentação

Para consultar a documentação do código, acesse o arquivo `docs/index.html`.