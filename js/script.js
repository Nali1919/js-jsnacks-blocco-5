console.log('Js ok')


/* SNACK 1*/
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/

function numberRandom() {
    const outputRandom = Math.floor(Math.random() * 10);
    return outputRandom;
}

const containerSquadre = [
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
];

//containerSquadre.forEach(element, index, array) => { }

containerSquadre.forEach(element => {
    //console.log(element.nome);
    element.puntiFatti = numberRandom();
    element.falliSubiti = numberRandom();
    if (element.puntiFatti === 1) {
        console.log(`La squadra ${element.nome} ha fatto ${element.puntiFatti} punto e ha subito ${element.falliSubiti} falli.`);
    } else {
        console.log(`La squadra ${element.nome} ha fatto ${element.puntiFatti} punti e ha subito ${element.falliSubiti} falli.`);
    }

});