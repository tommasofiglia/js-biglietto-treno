// Numero di km da percorrere
  var distance = Number(prompt("Quale distanza in km vuoi percorrere?"));

// Età del passeggero
  var age = Number(prompt("Quanti anni hai?"));

// Componente prezzo in base ai km
  var distancePrice = distance * 0.21;

// Sconto applicato
  var discount;

  if ( age < 18 ) {
    discount = (distancePrice * 20) / 100 ;
  } else if ( age >= 65 ) {
    discount = (distancePrice * 40) / 100 ;
  } else {
    discount = 0 ;
  }

// Prezzo finale
   var finalPrice = distancePrice - discount ;

// Scrittura a schermo del prezzo finale
   document.getElementById('price').innerHTML = "Il prezzo finale del tuo biglietto è" + " " + finalPrice ;
