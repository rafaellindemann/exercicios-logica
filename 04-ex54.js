//5.5a
let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))

let media = (nota1 + nota2) / 2

if(media >= 7){
    alert("Passou, média: " + media)
}else{
    alert("Deu ruim, média: " + media)
}
