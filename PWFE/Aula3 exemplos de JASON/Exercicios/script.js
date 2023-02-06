var h1Nome = document.querySelector("#nome");
var pDescricao = document.querySelector("#descricao");
var pValor = document.querySelector("#valor");

var pegarTudo = document.querySelectorAll("h1, p");
console.log(pegarTudo);//mostra os que contém dentro

var oqueTemDentro = document.querySelectorAll("h1, p")
for(var i = 0; i < oqueTemDentro.length; i++ )
console.log(oqueTemDentro[i])

let atual = {
    "nome":h1Nome.innerHTML,
    "descricao":pDescricao.innerHTML,
    "valor":pValor.innerHTML
}

console.log(atual);

let atualizado = {
    "nome":"Salmão da pora",
    "descricao":"Salmao do caralhos",
    "valor":"R$ 90,00"
}

h1Nome.innerHTML = atualizado.nome;
pDescricao.innerHTML = atualizado.descricao;
pValor.innerHTML = atualizado.valor;
