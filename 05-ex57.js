// 5.7 - albergue
let dias = Number(prompt("Quantos dias: "))
let valorDia
let totalBruto
let desconto10
let desconto15
let valorDaConta

if(dias <= 5){
    valorDia = 100
}
if(dias >= 6 && dias <= 10){
    valorDia = 90
}
if(dias >= 11){
    valorDia = 80
}

// if(dias <=5){
//     valorDia = 100
// }else if(dias <= 10){
//     valorDia = 90
// }else{
//     valorDia = 80
// }

totalBruto = dias * valorDia

// desconto10 = totalBruto * (10/100)
desconto10 = totalBruto * 0.1

desconto15 = totalBruto * 0.15 //(15/100)

valorDaConta = totalBruto - desconto10 - desconto15 + 150

alert("Total Bruto: R$" + totalBruto +
    "\nDesconto 1: R$" + desconto10 +
    "\nDesconto 2: R$" + desconto15 +
    "\nMulta R$150.00" +
    "\nValor da conta: R$" + valorDaConta)
