/* 1 numero di chilometri che si vuole percorrere
   2 età
   3 calcolo del prezzo (0.21 €*km)  
   _sconto 20% se viaggiatore minore di 18 anni
   _sconto 40% se viaggiotore maggiore o uguale a 65 anni 
   4 totale con massimo 2 decimali
*/

let numeroKm = document.getElementById('my_km').value;
document.getElementById('my_km').innerHTML = numeroKm;

let nEta = document.getElementById('my_km').value;
document.getElementById('my_age').innerHTML = nEta;

const creaBiglietto = document.getElementById("my_btn");


creaBiglietto.addEventListener('click',

    function() {

        const prezzoKm = 0.21;

        let totTemp = (numeroKm * prezzoKm).toFixed(2);
        console.log (totTemp)

        let scontoVenti = (totTemp - ((totTemp / 100) * 20)).toFixed(2);

        let scontoQuaranta = (totTemp - ((totTemp / 100) * 40)).toFixed(2);

        if (nEta < 18) {

            console.log(scontoVenti);
            document.getElementById('total').innerHTML = scontoVenti;

        } else if (nEta >= 65) {

            console.log(scontoQuaranta);
            document.getElementById('total').innerHTML = scontoQuaranta;

        } else  {
            
            console.log (totTemp);
            document.getElementById('total').innerHTML = totTemp;

        }
    }

)

const svuotaBiglietto = document.getElementById("my_btn_reset");

svuotaBiglietto.addEventListener('click' ,
    
    function() {

        let numeroKm = document.getElementById('my_km');
        numeroKm.value = '';

        let nEta = document.getElementById('my_age');
        nEta.value = '';

    }

)
