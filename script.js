var paginas = document.getElementById("pags");
var boton = document.getElementById("button");
var dias = document.getElementById("days");
var r = document.getElementById("res");
boton.addEventListener("click", calcular);

function calcular()
{
    var x = parseInt(paginas.value);
    var y = parseInt(dias.value);
    var rx =  x *3.3;
    //horas//
    var ry = ((rx / 60) / y);
    var rz = Math.round (Math.round (ry));
    if(rz>1)
    {
        var h = " horas"; 
    }
    else
    {
        var h = " hora"
    }

    //minutos//
    var ra = Math.round (100 * (ry - rz));
    if(ra>1)
    {
        var m = " minutos"; 
    }
    else
    {
        var m = " minuto"
    }
console.log(h, m);
    //print resultado
    r.innerHTML  += "tienes que leer durante " + rz + h +"  y " + ra + m + " los siguientes " + y + " días.";
}