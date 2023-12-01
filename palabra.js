const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

rl.question("Ingresa la palabra: ",(palabra)=>{
    console.log("La palabra es: ",palabra);
    rl.close();



let tiene_acento = false;
const letras_acento = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'ü', 'Ü'];
for(let i=0; i< palabra.length; i++){
    if(letras_acento.includes(palabra[i])){
        tiene_acento = true;
        break;
    }
}
if (tiene_acento){
    console.log(`La palabra: ${palabra} tiene acento`);
} else {
    console.log(`La palabra: ${palabra} no tiene acento`)
}

let terminan_n = ['n','N'];
let terminan_s = ['s','S'];
let terminan_vocal = ['a','e','i','o','u','A','E','O','U','á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'ü', 'Ü'];


//aguda
if (terminan_n.includes(palabra[palabra.length-1]) || terminan_s.includes(palabra[palabra.length-1]) || 
    terminan_vocal.includes(palabra[palabra.length-1]) || terminan_vocal.includes[palabra.length-2]){
        console.log(`La palabra ${palabra} es aguda`)

//graves
} else if(A) {
    console.log(`La palabra ${palabra} no es aguda`)
} 
//esdrujulas
else if(a){

} 
//sobresdrujulas
else if(a){

}






});




