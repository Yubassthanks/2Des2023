var banner = document.querySelector(".banner");
var destino = document.querySelector("#destino");
var descricao = document.querySelector("#descricao");



var destinos = [
    {
        "imagem" : "https://viajesantacruz.com.br/wp-content/uploads/2022/01/osasco-3.jpg",
        "destino" : "Osasco",
        "descricao" : "Planos a partir de R$120,00"
    },
    {
        "imagem" : "https://a.cdn-hotels.com/gdcs/production165/d100/5e0a7326-4dd3-40cc-9eb7-3af978f69b3d.jpg",
        "destino" : "Ipanema",
        "descricao" : "Curta as férias"
    },
    {
        "imagem" : "https://www.egali.com.br/wp-content/uploads/2018/01/egali-intercambio-the-shard.jpg",
        "destino" : "Londres",
        "descricao" : "piramides a partir de R$120,00"
    }
]
let indice = gerarNumero(destinos.length);

destino.innerHTML = destinos[indice].destino;
descricao.innerHTML = destinos[indice].descricao;
banner.style.backgroundImage = `url(${destinos[indice].imagem})`;

function gerarNumero(size) { 
    let num = Math.floor(Math.random() * size);
    return num;
}