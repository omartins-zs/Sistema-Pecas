var listaDePecas = ["Filtro do Ar", "Motor", "Amortecedor"]

if (listaDePecas.length < 10) {
    //  E Possivel cadastrar peças
    console.log("E possivel cadastrar mais peças")
} else {
    console.log("Nao tem mais espaço nessa lista, impossivel cadastrar")
}

let peso = 50;

if (peso < 100) {
    console.log("A peça deve pesar no minimo 100gramas")
} else {
    console.log("A peça possui peso adequado para cadastro")

}

let nomePeca = "Disco de Freio";

// = -> Atribuicao de valor, LER COMO RECEBE.
// == -> Verificação se os valores são iguais, LER COMO É IGUAL.
// === -> Verificação se o valor é igual e tambem o tipo de valor, VERIFICA VALOR E TIPO.

if (nomePeca.length > 3) {
    console.log("O nome de peça esta adequado para cadastro!!")
} else if (nomePeca.length == 0) {
    console.log("O nome da peça não pode ser vazio")
} else {
    console.log("Onome deve ter mais de 3 caracteres, digite um nome adequado")
}

switch (nomePeca.length) {
    case 0:
        console.log("O nome da peça nao pode ser vazio")
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome deve possuir mais de 3 caracteres, digite um nome valido")
        break

        case 4:
        console.log("o nome possui 4 chars")
        break;


    default:
        console.log("O nome da peça esta adequado para cadastro")
        break;
}



// var

// let =  igual ao (var) so que no escopo local

//const

// Para debugar no poweshell   node ./pecas.js