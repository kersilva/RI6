import Calculo from "./Calculo.js";

export default class Bhaskara extends Calculo {
    public calcular(numero1: number, numero2: number, numero3: number): [number, number] {
    const delta = numero2 ** 2 - 4 * numero1 * numero3;

    if (delta < 0) {
        throw new Error("Delta negativo: não existem raízes reais.");
    }

    const x1 = (-numero2 + Math.sqrt(delta)) / (2 * numero1);
    const x2 = (-numero2 - Math.sqrt(delta)) / (2 * numero1);

    return [x1, x2];
}
}