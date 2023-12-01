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
let terminan_vocal = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'ü', 'Ü'];

let palabra_agudas= palabra[palabra.length-1];
if(palabra_agudas===)
console.log(palabra_agudas)






});




