//Array di oggetti che rappresentano degli animali
//Ogni animale ha un nome, una famiglia e una classe

const animali = [
	{
		nome: 'leone',
		famiglia: 'felidi',
		classe: 'mammiferi',
	},
	{
		nome: 'cane',
		famiglia: 'canidi',
		classe: 'mammiferi',
	},
	{
		nome: 'gallina',
		famiglia: 'fasianidi',
		classe: 'uccelli'
	}
]

console.log(animali);

const mammiferi = [];  //array<String>, vettore che contiene tutti i mammiferi

for (let i = 0; i < animali.length; i++) {
	const animale = animali[i];  //oggetto, animale di posto i

	if (animale.classe === 'mammiferi') { 
		   mammiferi.push(animale);  //se l'animale è un mammifero si aggiunge all'array mammiferi
	}
}
console.log('I mammiferi sono: ', mammiferi);


