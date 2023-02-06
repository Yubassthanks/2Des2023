function sortear(nomes, qtd) {
    n = [];
    i = 0, j = 0;
    do {
        n[i] = Math.round(Math.random() * qtd);
        if (i == 0) i++;
        else {
            encontrado = 0;
            for (j = 0; j < i; j++) {
                if (n[i] == n[j]) {
                    encontrado = 1;
                }
            }
            if (!encontrado) i++
        }
    } while (i < qtd)

    //var sortear = nomes[Math.round(Math.random() * nomes.length)];
    for (i = 0; i < qtd; i++) {
        console.log(nomes[n[i]] +" " + n[i])
    }

    return sortear;
}

var nomes = []; // var indefinida
for (var i = 1; i <= 6; i++) { // for defini o tamanho do vetor nomes[]
    nomes.push(prompt("Informe o " + i + " nome!")) // push = add
}
var qtd = prompt("Informe a quantidade de sorteados");
sortear(nomes, qtd) //cria uma variável para chamar a função


