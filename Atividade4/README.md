# Atividade 04 - Visualização Inicial

Na quarta atividade de Computação Gráfica, incorporamos detalhes das implementações das três atividades anteriores: atividades 1 e 2 (Visualização da Esfera e do Triângulo) e atividade 3 (Visualização de um arquivo `.obj`).

## Tecnologias Utilizadas

- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Estrutura do Código

Os arquivos desenvolvidos nas atividades anteriores foram integrados ao projeto atual, com adaptações nas classes para atender à proposta da atividade atual. Foram adicionadas funcionalidades, como a função `subtract` na classe `Vec3`, e ajustes nas operações para retornar uma nova instância da classe. Além disso, a função `generateImage` da classe `GenerateImage` foi tornada pública. As classes funcionais estão localizadas na pasta `src/utils`, a implementação de `Vec3` está em `src/vec`, e as visualizações geradas estão em `src/out`.

## Como Executar

Antes de executar, certifique-se de instalar as `node_modules` usando o seguinte comando (**É necessário ter o NodeJS instalado na máquina**):

```bash
npm install
```

Para gerar os arquivos das visualizações da esfera, do triângulo e a partir do `.obj`, utilize o seguinte comando:

```bash
yarn execute
```

## Documentação

Para consultar a documentação do código, acesse o arquivo `docs/index.html`.