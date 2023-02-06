var vendedores = [
    {
        "funcionario": "Vitoria da Cruz",
        "matricula": "010203",
        "setor": "Eletronico",
        "comissao": 5,
        "vendas": [
            {
                "data": "03/02/2023",
                "valor": 1250.00
            },
            {
                "data": "03/02/2023",
                "valor": 899.00
            },
            {
                "data": "04/02/2023",
                "valor": 5999.90
            }
        ]
    },
    {
        "funcionario": "Cecilia Martins",
        "matricula": "124578",
        "setor": "Eletronico",
        "comissao": 5,
        "vendas": [
            {
                "data": "15/01/2023",
                "valor": 3290.90
            },
            {
                "data": "16/01/2023",
                "valor": 1320.99
            },
            {
                "data": "16/02/2023",
                "valor": 990.90
            }
        ]
    },
    {
        "funcionario": "Joaquim Souza",
        "matricula": "254687",
        "setor": "Moveis",
        "comissao": 12,
        "vendas": [
            {
                "data": "08/01/2023",
                "valor": 4500.00
            },
            {
                "data": "08/01/2023",
                "valor": 599.99
            },
            {
                "data": "09/01/2023",
                "valor": 259.90
            }
        ]
    }
]
var body = document.querySelector("body");
var table = document.querySelector("table");
var tbody = document.createElement("tbody");
table.appendChild(tbody);




for (let i = 0; i < vendedores.length; i++) {
    let vendedor = vendedores[i];

    let tr = document.createElement("tr") // cria um elemento para adicionar novos elementos

    let nome = document.createElement("td")
    nome.innerHTML = vendedor.funcionario;
    let mat = document.createElement("td")
    mat.innerHTML = vendedor.matricula;
    let sec = document.createElement("td")
    sec.innerHTML = vendedor.setor;
    let comi = document.createElement("td")
    comi.innerHTML = vendedor.comissao;
    let v = document.createElement("td")
    v.innerHTML = vendedor.vendas;

    var total = 0
    var j = 0;
    for (let j = 0; j < vendedor.vendas.length; j++) {
        let venda = vendedor.vendas[j];
        let valor = venda.valor;
        total += valor;
    }
    v.innerHTML = Math.floor(total);
    comi.innerHTML = Math.floor(total * vendedor.comissao / 100);


    tbody.appendChild(tr);
    tr.appendChild(nome);
    tr.appendChild(mat);
    tr.appendChild(sec);
    tr.appendChild(comi);
    tr.appendChild(v);
}
//criar um campo para registrar nova venda
//Nome, data, valor  e butão

function add(vendor, value){
    
    
}