var paragrafo = document.querySelector("p");
console.log(paragrafo);

paragrafo.innerHTML = "Novo texto";


var inpNome = document.querySelector("#nome");

function mostrarNome(){
    let valor = inpNome.value;
    alert(valor);
    
    let data = {
        "nome" : valor
    };

    paragrafo.innerHTML = JSON.stringify(data);
    //paragrafo.innerHTML = data.nome;
}

function atualizarDados(){
    let info = {
        "descricao" : "Pandariam",
        "imagem" : [ "https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg",
        "https://conteudo.imguol.com.br/c/entretenimento/27/2020/04/06/pandas-de-hong-kong-1586205888683_v2_3x4.jpg",
        "https://images.theconversation.com/files/430483/original/file-20211105-9897-18ahqx2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
    ]
    };
    descricao.innerHTML = info.descricao;
    foto.src = info.imagem[gerarNumero()];
}

function gerarNumero(){
    let num = Math.floor(Math.random() * 3);
    return num;
}