alert('Boas vindas ao jogo do número secreto');

let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
let chute;
let tentativas = 1;
 

//enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    //se
    if (chute == numeroSecreto) {
        break
        //se não
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Isso aí! Você descobriu o número secreto "${numeroSecreto}" com ${tentativas} ${palavraTentativa}.`);

// if(tentativas > 1) {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// }else {
//     alert(`Isso aí! Você desco briu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }