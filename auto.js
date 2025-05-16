console.log('AUTOMOBILI')


//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
//Infine stampa separatamente i 3 array.//


const automobili = [    // objects
    { marca: 'Dacia', modello: 'Sandero', alimentazione: 'Gpl'},
    { marca: 'Fiat', modello: 'Punto', alimentazione: 'Diesel'},
    { marca: 'Citroen', modello: 'C3', alimentazione: 'Elettrico'},
    { marca: 'Dacia', modello: 'Spring', alimentazione: 'Elettrico'},
    { marca: 'Ford', modello: 'Focus', alimentazione: 'Benzina'},
    { marca: 'Audi', modello: 'A3', alimentazione: 'Metano'},
    { marca: 'Reanult', modello: 'Megane', alimentazione: 'Diesel'},
    { marca: 'Lancia', modello: 'Ypsilon', alimentazione: 'Benzina'},
    { marca: 'Tesla', modello: 'Model 3', alimentazione: 'Elettrico'},
    { marca: 'Fiat', modello: 'Panda', alimentazione: 'Metano'},
    
]
console.log(automobili)


/*const autoBenzina = [] //oggetto vuoto
const autoDiesel = [] //oggetto vuoto
const autoEco = []  //oggetto vuoto


for (let i = 0; i < automobili.length; i++) {      //cicloFor 
    const auto= automobili[i];    
//SE alimentazione è uguale ad auto ---> push autoBenzina
if (auto.alimentazione === 'Benzina') {
    autoBenzina.push(auto);
//OPPURE SE alimentazione è uguale a Diesel ---> push autoDiesel
} else if (auto.alimentazione === 'Diesel') {
    autoDiesel.push(auto);
//ALTRIMENTI push auto
} else {
    autoEco.push(auto);
}

}



console.log('Auto a Benzina:', autoBenzina);   //Elenco auto a Benzina
console.log('Auto a Diesel:', autoDiesel);     //Elenco auto a Diesel
console.log('Auto Ecologiche:', autoEco);      //Elenco auto Ecologiche
*/


// OPPURE ABBREVIANDO con .filter


const autoBenzina = automobili.filter(auto => auto.alimentazione === 'Benzina');
const autoDiesel = automobili.filter(auto => auto.alimentazione === 'Diesel');
const autoEco = automobili.filter (auto => auto.alimentazione !== 'Benzina' && auto.alimentazione !== 'Diesel');

console.log('Auto a Benzina:', autoBenzina);   //Elenco auto a Benzina
console.log('Auto a Diesel:', autoDiesel);     //Elenco auto a Diesel
console.log('Auto Ecologiche:', autoEco);      //Elenco auto Ecologiche
