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
    console.log("Seu resultado foi " + teste2 + ". Corrija o código.")
}

let teste3 = (cypher(1, "z"))
if (teste3 === "a") {
    console.log("Está indo bem!");
} else {
    console.log("O resultado " + teste3 + "está errado.")
}

let teste4 = (cypher(2, "Olá, tudo bem?"))
if (teste4 === "Qná, vwfq dgo?") {
    console.log("Tá tudo perfeito!");
} else {
    console.log("Errou! Saiu " + teste4 + ". Arrume o código.")
}