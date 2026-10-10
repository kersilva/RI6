# RI6 — Calculadora CLI

Calculadora de linha de comando desenvolvida em **TypeScript** com **Node.js**, utilizando programação orientada a objetos para implementar diferentes operações matemáticas.

## Funcionalidades

- **Operações básicas:** adição, subtração, multiplicação e divisão.
- **Potenciação:** elevação de um número a uma potência.
- **Radiciação:** cálculo de raízes.
- **Fórmula de Bhaskara:** cálculo das raízes reais de uma equação do segundo grau.
- **Validação de entradas:** verificação dos nomes das operações e dos valores numéricos informados.

## Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [tsx](https://tsx.is/) — execução de TypeScript durante o desenvolvimento.

## Pré-requisitos

- Node.js instalado.
- npm instalado.

## Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/kersilva/RI6
cd ri6
```

Instale as dependências:

```bash
npm install
```

## Execução

### Desenvolvimento

Execute diretamente o código TypeScript:

```bash
npm run dev
```

### Compilação

Gere os arquivos JavaScript a partir do TypeScript:

```bash
npm run build
```

### Produção

Após a compilação, execute a versão JavaScript:

```bash
npm start
```

## Como utilizar

Ao iniciar o programa, será exibida a lista de operações disponíveis e seus respectivos formatos de entrada.

Exemplos:

| Operação | Entrada |
|---|---|
| Adição | `10 5 somar` |
| Subtração | `10 5 subtrair` |
| Multiplicação | `10 5 multiplicar` |
| Divisão | `10 5 dividir` |
| Potenciação | `2 3 elevar` |
| Radiciação | `27 3 raiz` |
| Bhaskara | `1 -3 2 bhaskara` |

Na fórmula de Bhaskara, os números representam os coeficientes `a`, `b` e `c` da equação:

ax<sup>2</sup> + bx + c = 0

Por exemplo, a entrada `1 -3 2 bhaskara` corresponde à equação \(x^2 - 3x + 2 = 0\), cujas raízes são x<sub>1</sub> = 2 e x<sub>2</sub> = 1.

## Estrutura do projeto

```text
ri6/
├── src/
│   ├── Bhaskara.ts
│   ├── Calculo.ts
│   ├── cli.ts
│   ├── Divisao.ts
│   ├── Multiplicacao.ts
│   ├── Potenciacao.ts
│   ├── Radiciacao.ts
│   ├── Soma.ts
│   └── Subtracao.ts
├── dist/              # Gerado na compilação
├── node_modules/      # Dependências instaladas
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```
