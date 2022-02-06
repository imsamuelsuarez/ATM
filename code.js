var extraer = document.getElementById("extraer");
extraer.addEventListener("click", entregarDinero);

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
    for(var bi of caja)
    {
        var t = document.getElementById("dinero");
        dinero = parseInt(t.value);
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else 
            {
                papeles = div;
            }

            entregado.push(new Billete(papeles, bi.valor));
            dinero = dinero - (bi.valor * papeles);
        }


        if(dinero > 0)
        {
            console.log("No tengo suficiente dinero");
        }
    }


    console.log(entregado);
}


var entregado = []; /* array de los billetes entregados */
var caja = []; /* array de los billetes disponibles */

caja.push(new Billete(20,50));
caja.push(new Billete(20,20));
caja.push(new Billete(100,10));

var dinero;/*dinero solicitado */
var div = 0;
var papeles = 0;

