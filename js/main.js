// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
let studente = {
    nome : "Luca",
    cognome : "Rossi",
    eta : 22,
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (let key in studente) {
    console.log(studente[key])
}
// Creare un array di oggetti di studenti.
let studenti = [];

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
studenti.push(studente);
for (let i = 0; i < studenti.length; i++) {
    console.log(studenti[i]["nome"]);
	console.log(studenti[i].cognome);
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
add();


// function// function// function// function
function add(){
    let nome =  prompt("Inserisci nome");
    let cognome = prompt("Inserisci cognome");
    let eta = parseInt(prompt("Inserisci età"));
    let nuovo = crea(nome,cognome,eta);
    studenti.push(nuovo);
    console.log(studenti)
}

function crea (nom,cognom,et) {
    let nuovoStudente = {
        nome : nom,
        cognome: cognom,
        eta :  et,
    }
    return nuovoStudente
}

