var extraer = document.getElementById("extraer");
extraer.addEventListener("click", entregarDinero);

var text = document.getElementById("text");
var dinero = text.value;

var resultado = document.getElementById("resultado")

class Billete
{
    constructor(c, v)
    {
        this.cantidad = c;
        this.valor = v;
    }
}

function entregarDinero()
{
   for(bi of caja)
    {
       if(dinero > 0)
       {
           // aca se saca la cuenta de la caja, se hacen todas las operaciones //
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad)
             {
                 papeles = bi.cantidad;
             }

             else
             {
                 papeles = div;
             }
             entregado.push(new Billete(bi.valor, papeles));
             dinero = dinero - (bi.valor * papeles);
            console.log(entregado);
        }     
     }

     if(dinero > 0)
     {
         resultado.innerHTML = "No puedo darte esa cantidad";
     }
     else 
     {
         for(e of entregado)
         {
             if(e.cantidad > 0)
             {
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
             }
         }
     }

}
     


var entregado = []; /* array de los billetes entregados */
var caja = []; /* array de los billetes disponibles */

caja.push(new Billete(5,100));
caja.push(new Billete(10,50));
caja.push(new Billete(5,20));
caja.push(new Billete(10,10));
caja.push(new Billete(10,5));


var div;
var papeles;

