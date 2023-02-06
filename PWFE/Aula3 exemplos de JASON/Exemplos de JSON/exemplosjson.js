//{} //inicia objeto
//[] // vetor de objeto

var usuario1 = {
    "nome":"Fulano",
    "idade": 20,
    "cadastrado": true,
    "notas" :[8,6,7],
}

console.log(usuario1.notas); //.notas mostra apenas o que está dentro

var usuario2 = {
    "nome":"Ciclano",
    "idade": 25,
    "cadastrado": false,
    "notas" :[7,8,9],
}

console.log(usuario2.nome); 

for(let i=0; i < usuario2.notas.length; i++){
    console.log(usuario2.notas[i]);
}

 var usuarios  = [];
 usuarios.push(usuario1);
 usuarios.push(usuario2);

 for(let i = 0; i < usuarios.length; i++)
 console.log(usuarios[i].nome);


