


// Scrivi un programma che dato un array di numeri, calcoli la media dei valori 
// e restituisca in output la media e tutti i valori minori della media:  

// Esempio:
//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori = [3, 5, 2]




// Variante:
//   Stampa anche quanti sono i valori minori della media 
//   e quanti quelli maggiori.


////COMPRENDO IL FLUSSO LOGICA E CALCOLO MATEMATICO PER ESTIRPARNE LA MEDIA DI DATI NUMERERI D'ARRAY
//Definisco input variabile 
//definisco il mio arrai ( INPUT)
const input_array = [3, 5, 10, 2, 8];

//calcolo

let somma= input_array[0] + input_array[1] + input_array[2] + input_array[3] + input_array[4];


//la media la calcolo sempre tramite una divisione 

let media_matematica = somma / input_array.length ;



console.log(media_matematica); 


// VARIANTI: Determina quali minori e quali maggiori


//metodo filter
//array minori

let minori = input_array.filter(numero => numero < media_matematica);

//conteggio
console.log("I numeri minori della media sono: " + minori);
console.log("In totale sono:" + minori.length);











//ALTRO METODO; FOREACH







