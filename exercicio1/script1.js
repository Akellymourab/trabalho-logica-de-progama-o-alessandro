function valorN(){
    event.preventDefault();

    let valor = Number (numero.value);   
     if(valor % 2 == 0){
        alert("seu numero é par.")
     } else {
        alert("seu numero é impar.")
     }
   }