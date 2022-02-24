var texto = document.getElementById("texto");
var dinero = 110;


var enviar = document.getElementById("button");
enviar.addEventListener("click", extraerDinero);

function extraerDinero()
{
   for(bi of caja)
   {
       if(dinero > 0)
       {
           div = Math.floor(dinero / bi.valor);
           if(div <= bi.valor * bi.cantidad)
           {
               dinero = dinero - (div * bi.valor);
               console.log(dinero);
           }
       }
   }
}

class Billete
{
    constructor(valor, cantidad)
    {
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

var caja = []

caja.push(new Billete(50,2));
caja.push(new Billete(20,2));
caja.push(new Billete(10,2));

