//@ts-expect-error exemplo
const nome: string = 13

const numero: number = 31

//@ts-expect-error exemplo
const lista: Array<string> = ["ewifj", "woeufh", 23]


type CorType = 'vermelho' | 'verde' | 'azul'

export enum CorEnum {
    VERMELHO = 'vermelho',
    AZUL = 'azul',
}

function corType(cor: CorType) {
    console.log(cor)
}

corType("azul")

function corEnum(cor: CorEnum ) {
    console.log(cor)
}

corEnum(CorEnum.VERMELHO)


const soma = (numero1: number, numero2: number): number[] => {
    return [numero1];
}

const resultado = soma(20, 50)

interface NomeCompleto {
    nomeCompleto(): string;
    id: string
}

class Pessoa implements NomeCompleto {
    constructor(public nome: string, public sobrenome: string, public id: string) { }

    nomeCompleto(): string {
        return this.nome + '' + this.sobrenome
    }
}


const funcao = (parametro: number | string) => {
    parametro// (parameter) parametro: string | number
    if (typeof parametro === 'number') {
        return parametro * 2
    }
    parametro //(parameter) parametro: string
}

type Documento = {
    titulo: string;
    data?: Date
}

const documento: Documento = {
    titulo: 'fe',
    data: new Date(),
}

const documento2: Documento = {
    titulo: 'fe',
}

documento2.data?.getDay()






