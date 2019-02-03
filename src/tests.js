function checkFunction(returned, expected) {
    if (returned === expected) {
      console.log("Ok!");
    } else {
      console.log("Deu Erro! " + returned + " não é igual a " + expected);
    }
  }

let tests = [[2, "z", "b"], 
             [-7, "hijklmnopqrstuvwxyzabcdefg", "abcdefghijklmnopqrstuvwxyz"], 
             [0, "agora vai", "agora vai"], 
             [10, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "KLMNOPQRSTUVWXYZABCDEFGHIJ"],
             [56, "", ""],
             [-51, "Z áfthz drsá bzçzmcn tl qzsn.", "A águia está caçando um rato."],
             [35, "teste final", "cnbcn orwju"]];

for(let i = 0; i < tests.length; i++) {
    checkFunction(cypher(tests[i][0], tests[i][1]), tests[i][2]);
}