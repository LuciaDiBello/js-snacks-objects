//Array di oggetti che rappresentano delle persone
//Ogni persona ha un nome, un cognome e un’età.

const persone = [
	{
		nome: 'Corrado',  //stringa
		cognome: 'Garrasi', //stringa
		età: 8,  //numero
	},
	{
		nome: 'Rita',
		cognome: 'Gori',
		età: 29,
	},
	{
		nome: 'Agata',
		cognome: 'Loiodice',
		età: 58,
	},
	{
		nome: 'Cosimo',
		cognome: 'Cattaneo',
		età: 5,
	},
	{
		nome: 'Agostino',
		cognome: 'Baldoni',
		età: 89,
	}
]
//stampa l'array di oggetti
console.log('Il vettore di persone è: ', persone);

const patente = [];  //array<String>, contiene una frase per ogni persona

//con il for si scandisce il vettore di persone
//per ogni persona si controlla l'età e si genera il vettore patente con il nome, il cognome della persona e l'indicazione se può guidare
for (let i = 0; i < persone.length; i++) {
	if (persone[i].età>=18) 
        { stringa = persone[i].nome + " " + persone[i].cognome + ' può guidare';  //stringa
          patente.push(stringa);  //si aggiunge la frase in coda al vettore patente
          }
    else { 
         stringa = persone[i].nome + " " + persone[i].cognome + ' non può guidare';
         patente.push(stringa);  //si aggiunge la frase in coda al vettore patente
    }
}
console.log('Il vettore patente è: ', patente);


