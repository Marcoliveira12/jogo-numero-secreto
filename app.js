alert('Boas vindas ao jogo do número secreto');
let numeroMaximo;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for = a numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);

    //se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;

        //se não
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }

        tentativas++;
    }
}

   if(tentativas > 1){
        alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else{
        alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
    }
