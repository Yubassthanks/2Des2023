function idade (ano){
    return new Date().getFullYear() - ano;
}

var ano = prompt("Digite o ano de nascimento");
console.log(idade(ano))