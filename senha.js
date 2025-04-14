let numerosecreto = 7
let tentativa = 1
 while( tentativa <= 3){
    let palpite = parseInt(prompt("digite um número? entre 1 e 10 "))
    if(palpite === numerosecreto){
        console.log("você ganhou sua liberdade ")
        break
    }else{
        console.log("errou,digite novamnte por enquanto")
    }
    tentativa++



 }
if(tentativa >  3  ){
    console.log("Acabaram suas tentativas ,você morreu")
}
