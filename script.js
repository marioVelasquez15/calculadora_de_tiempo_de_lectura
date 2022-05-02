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
    //minutos//
    var ra = Math.round (100 * (ry - rz));

    //print resultado
    r.innerHTML  += "tienes que leer durante " + rz + " horas y " + ra + " minutos los siguientes " + y + " días.";
}