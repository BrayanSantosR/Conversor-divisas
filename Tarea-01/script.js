
function convertir(){

     
     let resultado2 = document.querySelector('#salida2');
      var moneda=["eligetumoneda","dolar","pesoMexicano","pesoColombiano","euro","libraEsterlina"]
      var valDolar=1,valPesoMexicano=19.91,valPesocolombiano=3778,valEuro=0.85,valLibraesterlina=0.72,cantidad;
      const valmoneda=[0,valDolar,valPesoMexicano,valPesocolombiano,valEuro,valLibraesterlina]
     var monedaEntrada1=document.getElementById("monedaEntrada").value;
     var monedaEntrada2=document.getElementById("monedaaConvertir").value;
    cantidad=parseFloat(document.getElementById("CantDinero").value);
    

   for(let i=0;i<=6; i++){
      if(moneda[i]===monedaEntrada1){
          var moneda1=valmoneda[i];
          
            }
   }
   for(let j=0;j<=6;j++){
      if(moneda[j]===monedaEntrada2){
          var moneda2=valmoneda[j];
            }
   }
   let resultado=(cantidad*moneda2)/moneda1;
   //document.getElementById("salida").innerHTML=resultado;
   resultado2.value=resultado;
  
  }