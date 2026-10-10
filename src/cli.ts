import * as readline from 'readline';
import Soma from './Soma.js';
import Subtracao from './Subtracao.js';
import Multiplicacao from './Multiplicacao.js';
import Divisao from './Divisao.js';
import Potenciacao from './Potenciacao.js';
import Radiciacao from './Radiciacao.js';
import console from 'console';
import Bhaskara from './Bhaskara.js';

console.log('')

const operacoes = {
    somar: (numero1: number, numero2: number) => {
        let calculo = new Soma()
        console.log(`O resultado da ${numero1} + ${numero2} operação é: ${calculo.calcular(numero1, numero2)}\n`)
    },
    subtrair: (numero1: number, numero2: number) => {
        let calculo = new Subtracao()
        console.log(`O resultado da ${numero1} - ${numero2} operação é: ${calculo.calcular(numero1, numero2)}\n`)
    },
    multiplicar: (numero1: number, numero2: number) => {
        let calculo = new Multiplicacao()
        console.log(`O resultado da operação ${numero1} * ${numero2} é: ${calculo.calcular(numero1, numero2)}\n`)
    },
    dividir: (numero1: number, numero2: number) => {
        let calculo = new Divisao()
        console.log(`O resultado da operação ${numero1} / ${numero2} é: ${calculo.calcular(numero1, numero2)}\n`)
    },
    elevar: (numero1: number, numero2: number) => {
        let calculo = new Potenciacao()
        console.log(`O resultado da operação ${numero1} ** ${numero2} é: ${calculo.calcular(numero1, numero2)}\n`)
    },
    raiz: (numero1: number, numero2: number) => {
        let calculo = new Radiciacao()
        console.log(`O resultado da operação ${numero1} ** 1/${numero2} é: ${calculo.calcular(numero1, numero2)}\n`)
    },
    bhaskara: (numero1: number, numero2: number, numero3: number) => {
        let calculo = new Bhaskara()
        let resultado = calculo.calcular(numero1, numero2, numero3)
        console.log(`O resultado da operação é:`)
        console.log('x1:', resultado[0])
        console.log('x2:', resultado[1])
    }
}

type NomeOperacao = keyof typeof operacoes;

function isNomeOperacao(valor: string): valor is NomeOperacao {
    return Object.hasOwn(operacoes, valor);
}

function listaOperacoes() {
    console.log('Lista de operações válidas:')
    Object.keys(operacoes).forEach(calculo => {
        console.log(calculo, `- Formato: Número Número ${calculo === 'bhaskara' ? 'Número ' : ''}${calculo}`);
    });
}

listaOperacoes();

console.log('')

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
        let instrucoes = valor.split(' ')
        console.log(`Estas foram suas instruções: ${instrucoes}\n`)

        
        const entrada = instrucoes.at(-1);

        if (entrada === undefined || !isNomeOperacao(entrada)) {
            console.log('Operação inválida');
            listaOperacoes();
            leitor.close();
            return;
        }
        
        const operacao: NomeOperacao = entrada;

        for (const instrucao of instrucoes.slice(0, -1)) {
            if (!Number.isFinite(Number(instrucao))) {
                console.log(`${instrucao} não é um número!`)
                leitor.close();
                return;
            }
        }

        const num1 = Number(instrucoes[0]);
        const num2 = Number(instrucoes[1]);

        if (instrucoes.length === 3 && operacao !== 'bhaskara') {
            operacoes[operacao](num1, num2)
            leitor.close();
            return
        } else if (instrucoes.length === 4 && operacao === 'bhaskara') {
            try {
                operacoes.bhaskara(num1, num2, Number(instrucoes[2]))
            } catch (erro) {
                if (erro instanceof Error) {
                    console.log(erro.message);
                    leitor.close();
                    return
                }
            }
            
            leitor.close();
            return
        } else {
            console.log('Número de instruções inválidas!')
            listaOperacoes();
            leitor.close();
            return
        }
    })
}

iniciar()