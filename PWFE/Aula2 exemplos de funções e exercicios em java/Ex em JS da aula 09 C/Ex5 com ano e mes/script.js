function calcularIdade(data){

    const hoje = new Date();
    const niver = new Date(data);
    let idade = hoje.getFullYear() - niver.getFullYear();
    const mes = hoje.getMonth() - niver.getMonth();



if(mes < 0 || (mes === 0 && hoje.getDate() < niver.getDate())){

    idade--;
}

return idade;

}
var data = prompt("Informe a data de nascimento"); //ANO/MES/DIA
console.log(calcularIdade(data));