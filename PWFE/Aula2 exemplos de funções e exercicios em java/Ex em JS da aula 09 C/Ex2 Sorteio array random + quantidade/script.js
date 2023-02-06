function sorteios(n,x){
   let nums = []
   let i = 0
   let j = 0
   let repetido = 0
   do{
       nums[i] = Math.floor(Math.random() * 10)
       if(i == 0)
           i++
       else{
            repetido = 0
            for(j = 0; j < i; j++){
               if(nums[i] == nums[j])
                    repetido = 1
            }
            if(repetido == 0)
               i++
       }
   }while(i < x)
   
   for(i = 0; i < x; i ++)
       console.log("exercício 2-)", n[nums[i]])
}
var n = [];
for(var i = 1; i < 4; i++){
   n.push(prompt("infome o " + i + " nome" ));
}

var qtd = sorteios(n, prompt("Informe a quantidade de vezes que deseja sortear"));

