/*Estrutura do browser

windows
location = onde localiza as pages
document = 
history = como navegar pelo location
document = base da navegação

getElementById (id)
getElementsByTagNames(tag)
getElementsByClassName(class)
querySelector("")
#id
.class
tag
*/

//var titulo = document.getElementById("titulo");

//var titulos = document.getElementsByClassName("h1");


//var textos = getElementsByClassName("texto");

//var titulo = document.querySelector("#titulo");
//var titulo = document.querySelector(".texto");

//var titulo = document.querySelector(".texto");

//var titulo = document.querySelectorAll("h1")
/*var titulo = document.querySelectorAll(".texto")
var paragrafo = document.querySelector("p");
paragrafo.innerHTML = "A Informação que eu quiser"
paragrafo.style.color = "red";
paragrafo.style.fontSize = "2rem";
console.log(titulo)
*/

//var dados = document.querySelectorAll("p");
//for(let i = 0; i < dados.length; i++)
  //  console.log(dados[i].innerHTML);

  var pNome = document.querySelector("#nome");
  var pEndereco = document.querySelector("#endereco");
  var pTelefone = document.querySelector("#telefone");
  var pNascimento = document.querySelector("#nascimento");

  let dados = {
     "nome" : pNome.innerHTML,
     "endereco" : pEndereco.innerHTML,
     "telefone" : pTelefone.innerHTML,
     "nascimento" : pNascimento.innerHTML
  }
  
  console.log(dados);

  let info = {
    "nome" : "Fulano da silva",
    "endereco" : "Avenida das Ruas",
    "telefone" : "73894789120",
    "nascimento" : "20/10/2009"
  }

  pNome.innerHTML = info.nome;
  pEndereco.innerHTML = info.endereco;
  pTelefone.innerHTML = info.telefone;
  pNascimento.innerHTML = info.nascimento;