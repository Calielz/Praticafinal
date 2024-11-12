//exercício 1
let nome = "caliel"; 
let idade = 19;

console.log("Olá, meu nome é:",nome, "e eu tenho",idade,  "anos");


//exercício 5 
let a= 2;
let b= 3;
function soma (a, b){

    return a+b
}
//exercício 6


damage = 25
health = 20
function rpg (dano, saude){
    if (dano > saude){
        return 1
    }else {
        return 0
    }
}
console.log(rpg(damage, health))
if(rpg = 1){
    console.log("Você morreu")
} else if(rpg = 0){
    console.log("Você sobreviveu")
}


//exercício 10
if (a < 0){
    console.log("negativo")
}else{
    console.log("positivo")
}
//exercício 14
let numeros = [1,2,3,4,5,6,7,8,9,10]
numeros.splice(3,3)
console.log(numeros)

//exercicio 15

numeros.push(11,12)
console.log(numeros)
