var body = document.querySelector("body");

var destinos = [
    {
        "imagem": "https://images.tcdn.com.br/img/img_prod/712045/cachimbo_elite_87_1_20190721105850.jpg",
        "produto": "Cachimbo do carai",
        "preco": "R$ 120,00",
        "comprar": "Comprar"
    },
    {
        "imagem": "https://cdn.iset.io/assets/56741/produtos/352/cachimbo_branco.jpg",
        "produto": "Da Paz",
        "preco": "R$ 90,00",
        "comprar": "Comprar"
    },
    {
        "imagem": "https://www.cachimbos.ind.br/image/cache/data/A%20CHURCH/ch06-1200x900.jpg",
        "produto": "Cachimbão",
        "preco": "R$ 200,00",
        "comprar": "Comprar"
    }
]

for (let i = 0; i < destinos.length; i++) {
    let produto = destinos[i];

    let banner = document.createElement("div");
    banner.className = "banner";
    banner.style.backgroundImage = `url(${produto.imagem})`;

    let dest = document.createElement("p");
    dest.innerHTML = produto.produto;

    let desc = document.createElement("p");
    desc.innerHTML = produto.preco;

    let comprar = document.createElement("button");
    comprar.innerHTML = produto.comprar;
    
    body.appendChild(banner);
    banner.appendChild(dest);
    banner.appendChild(desc);
    banner.appendChild(comprar);
    console.log(banner);
}