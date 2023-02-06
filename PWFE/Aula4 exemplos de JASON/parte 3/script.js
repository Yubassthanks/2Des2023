var body = document.querySelector("body");

var destinos = [
    {
        "imagem": "https://viajesantacruz.com.br/wp-content/uploads/2022/01/osasco-3.jpg",
        "destino": "Osasco",
        "descricao": "Planos a partir de R$120,00"
    },
    {
        "imagem": "https://a.cdn-hotels.com/gdcs/production165/d100/5e0a7326-4dd3-40cc-9eb7-3af978f69b3d.jpg",
        "destino": "Ipanema",
        "descricao": "Curta as férias"
    },
    {
        "imagem": "https://www.egali.com.br/wp-content/uploads/2018/01/egali-intercambio-the-shard.jpg",
        "destino": "Londres",
        "descricao": "piramides a partir de R$120,00"
    }
]

for (let i = 0; i < destinos.length; i++) {
    let destino = destinos[i];

    let banner = document.createElement("div");
    banner.className = "banner";
    banner.style.backgroundImage = `url(${destino.imagem})`;

    let dest = document.createElement("p");
    dest.innerHTML = destino.destino;

    let desc = document.createElement("p");
    desc.innerHTML = destino.descricao;

    banner.appendChild(dest);
    banner.appendChild(desc);
    body.appendChild(banner);
    console.log(banner);
}