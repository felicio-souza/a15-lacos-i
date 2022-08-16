
let comerMais = prompt("Você deseja comer mais coxinhas: \n Digite S para SIM e N para NÃO?").toUpperCase()
let conta = 0;


while( comerMais === "S"){
    conta = conta + 2.5
    comerMais = prompt("Você deseja comer mais coxinhas: \n Digite S para SIM e N para NÃO?").toUpperCase()
   }

console.log("O valor total é de: R$ " + conta)