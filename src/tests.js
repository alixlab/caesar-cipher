let teste1 = cypher(1, "abc");
if (teste1 === "bcd") {
    console.log("Legal, seu teste deu certo!");
} else {
    console.log("Deu pau! O resultado apresentado foi " + teste1 + ".");
}

let teste2 = (cypher(2, "z"))
if (teste2 === "b") {
    console.log("Parabéns!!");
} else {
    console.log("Seu resultado foi " + teste2 + ". Corrija o código.");
}

let teste3 = (cypher(-7, "hijklmnopqrstuvwxyzabcdefg"))
if (teste3 === "abcdefghijklmnopqrstuvwxyz") {
    console.log("Está indo bem!");
} else {
    console.log("O resultado " + teste3 + " está errado.");
}

let teste4 = (cypher(10, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"))
if (teste4 === "KLMNOPQRSTUVWXYZABCDEFGHIJ") {
    console.log("Tá tudo perfeito!");
} else {
    console.log("Errou! Saiu " + teste4 + ". Arrume o código.");
}

let teste5 = (cypher(4, "LINA BO BARDI"))
if (teste5 === "PMRE FS FEVHM" ) {
    console.log("O teste foi um sucesso!");
} else {
    console.log("Não deu certo. O resultado foi " + teste5 + ". Revise o código.");
}

let teste6 = (cypher(10, ""))
if (teste6 === "") {
    console.log("Ok!");
} else {
    console.log("Errou! Saiu " + teste6 + ". Arrume o código.");
}

let teste7 = (cypher(-25, "Z áfthz drsá bzçzmcn tl qzsn."))
if (teste7 === "A águia está caçando um rato.") {
    console.log("Está indo bem.");
} else {
    console.log("O resultado " + teste7 + " está errado.");
}

let teste8 = (cypher(-3, "Cdclh qr phwuô"))
if (teste8 === "Zazie no metrô") {
    console.log("Continue assim!");
} else {
    console.log("Não deu certo. O resultado foi " + teste8 + ". Revise o código.");
}

let teste9 = (cypher(4, "ZuzU aNgEl"))
if (teste9 === "DydY eRkIp") {
    console.log("Ok!!");
} else {
    console.log("Errou! Saiu " + teste9 + ". Arrume o código.");
}

let teste10 = (cypher(-3, "Wxgr fhuwr!"))
if (teste10 === "Tudo certo!") {
    console.log("Sucesso!");
} else {
    console.log("Deu pau! O resultado apresentado foi " + teste10 + ".");
}

let teste11 = (cypher(-49, "Teste Z"))
if (teste11 === "Whvwh C") {
    console.log("Certo!");
} else {
    console.log("Errou! Saiu " + teste11 + ".");
}

let teste12 = (cypher(0, "agora vai"))
if (teste12 === "agora vai") {
    console.log("Está indo bem!");
} else {
    console.log("Não deu certo, o resultado foi " + teste12 + " .");
}

let teste13 = (cypher(35, "teste final"))
if (teste13 === "cnbcn orwju") {
    console.log("Agora acabou!");
} else {
    console.log("Reveja tudo.");
}