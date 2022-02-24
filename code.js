var texto = document.getElementById("texto");
var dinero = parseInt(texto.value);


var enviar = document.getElementById("button");
enviar.addEventListener("click", extraerDinero);

function extraerDinero()
{
   for(bi of caja)
   {
       if(dinero > 0)
       {
           div = Math.floor(dinero / bi.valor);
          
           if(div > bi.cantidad)
           {
               papeles = bi.cantidad;
           }
           else
           {
               papeles = div
           }
           entregados.push(new Billete(bi.valor, papeles));
           dinero = dinero - (bi.valor * papeles);
        }   
        if(dinero == 0)
        {
            console.log(entregados);
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

var entregados = []
