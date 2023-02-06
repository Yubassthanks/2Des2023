let categorias = ["Futebol", "Basquete", "Volei"];
console.log(categorias);
categorias.pop();
categorias.push("Natação");
console.log(categorias);
let pos = categorias.indexOf("Basquete");
console.log(pos);
categorias.push("Bocha");
let novo = categorias.splice(pos, 3);
console.log(novo);
categorias.sort(); // ordena alfabeticamente
categorias.reverse(); // ordena reversamente
console.log(categorias)
console.log(novo);

/*
console.log(Math.floor(0.95)) //arredonda pra baixo
console.log(Math.ceil(0.15)) //arredonda pra cima
console.log((Math.round(0.49))) // arredonda pra baixo caso seja .49
console.log((Math.round(0.50))) // arredonda pra cima caso seja .50
console.log(Math.random()); //gera um número aleatório
console.log(Math.floor(Math.random() categorias)); //gera um número random entre
*/