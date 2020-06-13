var Dato1;
var Dato2;
var Dato3;
var Dato4;
var res;
var btnReto1 = document.getElementById('btnReto1');
btnReto1.addEventListener("click", Reto1);

var btnReto2 = document.getElementById('btnReto2');
btnReto2.addEventListener("click", Reto2);

var btnReto3 = document.getElementById('btnReto3');
btnReto3.addEventListener("click", Reto3);

var btnReto4 = document.getElementById('btnReto4');
btnReto4.addEventListener("click", Reto4);

var btnReto5 = document.getElementById('btnReto5');
btnReto5.addEventListener("click", Reto5);

var btnReto6 = document.getElementById('btnReto6');
btnReto6.addEventListener("click", Reto6);

var btnReto7 = document.getElementById('btnReto7');
btnReto7.addEventListener("click", Reto7);

var btnReto8 = document.getElementById('btnReto8');
btnReto8.addEventListener("click", Reto8);

var btnReto9 = document.getElementById('btnReto9');
btnReto9.addEventListener("click", Reto9);

function Reto1()
{
  Dato1 = document.getElementById('txtDato1');
  res = "";
  for (var i = 0; i < 8; i++) {
    res = res + Dato1.value + " \n";
  }
  alert(res);
}

function Reto2()
{
  Dato1 = document.getElementById('txtDato2_1');
  Dato2 = document.getElementById('txtDato2_2');
  res = "";
  for (var i = 0; i < parseInt(Dato2.value); i++) {
    res = res + (i+1) + ". " + Dato1.value + "\n";
  }
  alert(res);
}

function Reto3()
{
  Dato1 = document.getElementById('txtDato3');
  res = "";
  for (var i = 0; i < Dato1.value.length; i++) {
    res = res + Dato1.value.charAt(i) + "\n";
  }
  alert(res);
}

function Reto4()
{
  Dato1 = document.getElementById('txtDato4_1');
  Dato2 = document.getElementById('txtDato4_2');
  var res = "";
  for (var j = 0; j < parseInt(Dato2.value); j++) {
    for (var i = 0; i < Dato1.value.length; i++) {
      res = res + Dato1.value.charAt(i) + "\n";;
    }
  }
  alert(res);
}

function Reto5()
{
  Dato1 = document.getElementById('txtDato5');
  var res = "";
  for (var i = 1; i <= 10; i++) {
    res = res + Dato1.value + "*" + i + " = " + (parseInt(Dato1.value)*i) + "\n";
  }
  alert(res);
}

function Reto6()
{
  Dato1 = document.getElementById('txtDato6');
  res = "";
  if (parseInt(Dato1.value) > 0) {
    //Voy a restar hasta llegar a cero
    for (var i = parseInt(Dato1.value); i >= 0; i--)
    {
      res = res + i + "\n";
    }
  }
  else
  {
      //Sumo hasta llegar a cero
      for (var i = parseInt(Dato1.value); i <= 0; i++) {
        res = res + i + "\n";
      }
  }

  alert(res);
}

function Reto7()
{
  Dato1 = document.getElementById('txtDato7_1');
  Dato2 = document.getElementById('txtDato7_2');
  res = "";

  if (parseInt(Dato2.value) > 15) {
    for (var i = 0; i < 3; i++) {
      res = res + Dato1.value + "\n";
    }
  }
  else
  {
    for (var i = 0; i < parseInt(Dato2.value); i++) {
      res = res + (i+1) + ". " + Dato1.value + "\n";
    }
  }

  alert(res);
}

function Reto8()
{
  Dato1 = document.getElementById('txtDato8_1');
  Dato2 = document.getElementById('txtDato8_2');
  Dato3 = document.getElementById('txtDato8_3');
  Dato4 = document.getElementById('txtDato8_4');
  var check_1 = document.getElementById('check_1');
  var check_2 = document.getElementById('check_2');
  var check_3 = document.getElementById('check_3');
  var check_4 = document.getElementById('check_4');

  var res = 0;

  if (check_1.checked) {
    res += parseInt(Dato1.value);
  }

  if (check_2.checked) {
    res += parseInt(Dato2.value);
  }

  if (check_3.checked) {
    res += parseInt(Dato3.value);
  }

  if (check_4.checked) {
    res += parseInt(Dato4.value);
  }

  alert("Resultado: " + res);
}

function Reto9()
{
  Dato1 = document.getElementById('txtDato9');

  res = "";

  if (parseInt(Dato1.value) < 0) {
    for (var i = 0; i >= parseInt(Dato1.value); i--) {
      res = res + " - " + i;
    }
  }
  else
  {
    for (var i = 0; i <= parseInt(Dato1.value); i++) {
      res = res + " - " + i;
    }
  }

  alert(res);
}
