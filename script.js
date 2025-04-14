// // while == enquanto
// let contador = 0 
// while (contador <= 1000){
//     console.log("segundo ano é top " + contador)
//     contador ++
// }
let contador = 1
let texto = ""

while (contador <= 5){
    texto += contador + '<hr>'
    contador++
    document.getElementById('texto').innerHTML = texto
}