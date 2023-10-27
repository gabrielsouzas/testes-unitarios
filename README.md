# Repositório para estudar testes unitários

## O que é um teste unitário

- Testa unidades de código

## TDD

Desenvolvimento Orientado por Testes (Test Driven Development), e trata-se de uma prática de desenvolvimento de software onde a codificação das funcionalidades começa a partir da escrita de testes unitários. Essa técnica foi criada por Kent Beck e é um dos pilares do XP (Extreme Programming)

- Red: escreva um pequeno teste automatizado que, ao ser executado, irá falhar;
- Green: implemente um código que seja suficiente para ser aprovado no teste recém-escrito;
- Refactor: refatore o código, a fim dele ser melhorado, deixando-o mais funcional e mais limpo.

## Passo a passo

1. Iniciar o projeto com javascript

```shell
npm init -y
```

2. Instalar o Jest no projeto para lidar com os testes unitários

```shell
npm install --save-dev jest
```

3. Após a instalação do Jest, alterar o package.json para:

```json
"scripts": {
    "test": "jest"
  },
```

4. Criar o arquivo de testes com o mesmo nome do arquivo que será testado, com a extensão de testes:

```
my-code.test.js
```

5. Para rodar o jest nos arquivos de testes execute o seguinte comando:

```shell
npm t
```

ou

```shell
npm test
```

ou

```shell
npm run test
```

## Dicas

Use o **describe('descrição', function)** para organizar os testes dentro do arquivo de testes.

Use o **beforeAll(function)** para executar alguma ação antes de todos os testes.

```javascript
beforAll(() => {
  console.log('before all');
});
```

Use o **beforeEach(function)** para executar alguma ação antes de cada testes.

```javascript
beforeEach(() => {
  console.log('before each');
});
```
