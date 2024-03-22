
//Definizione della funzione
function formattaStringa(s) {
    //si applica il metodo toLowerCase() per trasformare la stringa in minuscolo
    const stringMinuscola = s.toLowerCase();  
    console.log('nome, stringaMinuscola:', s, stringMinuscola);
    
    //si usa il metodo substring per estrarre le sottostringhe da stringMinuscola
    let primoCarattere=stringMinuscola.substring(0, 1);  //si estrae il primo carattere della stringa
    console.log('primoCarattere: ', primoCarattere);  
    const secondaParte=stringMinuscola.substring(1,stringMinuscola.length);  //si estrae la parte restante
    console.log('secondaParte: ', secondaParte);
    
    //si applica il metodo toUpperCase per trasformare il primo carattere in maiuscolo
    primoCarattere = primoCarattere.toUpperCase();
    
    const nuovaStringa=primoCarattere+secondaParte;  //concatenazione delle due parti della nuova stringa
    console.log('nuovaStringa: ', nuovaStringa);
    return nuovaStringa;  //la funzione restituisce la stringa formattata
    }
    
    //array contenente le stringhe da formattare
    const nomi = ['pippo', 'PLUTO', 'Paperino']; //array<String>
    const nuoveStringhe = [];  //array<String> contenente le stringhe formattate
    
    //con il for si scandisce il vettore dei nomi 
    //per ogni nome si invoca la funzione che permette di formattare il nome
    for (let i = 0; i < nomi.length; i++) {
        const stringa = nomi[i];
        
         //la funzione riceve in input la stringa da formattare e restituisce la stringa formattata
        const stringaFormattata = formattaStringa(stringa);  //array<String>
       //la stringa formattata viene poi aggiunta al vettore nuoveStringhe
        nuoveStringhe.push(stringaFormattata);
    }
    
    console.log(nuoveStringhe);