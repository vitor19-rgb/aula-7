let saldo = 1000;
let erros = 0;
let numeroSecreto = gerarNumero();

function gerarNumero() {
  return Math.floor(Math.random() * 10) + 1;
}

function jogar() {
  const palpite = parseInt(document.getElementById("palpite").value);
  const msg = document.getElementById("mensagem");

  if (palpite === numeroSecreto) {
    saldo *= 2;
    msg.innerHTML = "Acertou! Seu saldo dobrou!";
    msg.className = "mensagem acertou";
    erros = 0;
    numeroSecreto = gerarNumero();
  } else {
    erros++;
    if (erros >= 3) {
        saldo = 0;
        msg.innerHTML = "Errou 3 vezes! Você perdeu tudo!";
        msg.className = "mensagem perdeu";
        erros = 0;
        saldo = 1000;
        numeroSecreto = gerarNumero();
      } else {
        msg.innerHTML = `Errou! Você tem mais ${3 - erros} tentativa(s).`;
        msg.className = "mensagem errou";
      }
      
  }

  document.getElementById("saldo").textContent = saldo;
  document.getElementById("palpite").value = "";
}