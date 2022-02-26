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
        div = Math.floor(dinero / bi.valor)
        if(div > bi.cantidad)
        {
            papeles = bi.cantidad
        }
        else
        {
            papeles = div;
        }
        dinero = dinero - (papeles * bi.valor);
        entregado.push(new Billete(papeles, bi.valor));
     } 
   }
   if(dinero > 0)
   {
       resultado.innerHTML = "No tengo suficiente dinero <br/>";
       
   }
   else
   {
      for(e of entregado)
      {
          if(e.cantidad > 0)
          {
              resultado.innerHTML += e.cantidad + " billetes de " + e.valor + "$ <br/>";
          }
      }
   }

}
     


var entregado = []; /* array de los billetes entregados */
var caja = []; /* array de los billetes disponibles */


caja.push(new Billete(3,50));
caja.push(new Billete(1,20));
caja.push(new Billete(1,10));
caja.push(new Billete(1,5));


var div;
var dineroEntregado;

