function more() {
  if (document.getElementById("changed2").style.display == "none") {
    document.getElementById("changed").style.display = "none";
    document.getElementById("changed2").style.display = "block";
  }
  else {
    document.getElementById("changed").style.display = "block";
    document.getElementById("changed2").style.display = "none";
  }
}
function val(button) {
  var x = button.value;
  if (input.value == "") {
    input.value = x;
  }
  else if (input.value != "0"){
    input.value += x;
  }
  if (input.value == "0") {
    input.value = x;
  }
  // input.value += x;
}
function fac() {
  var x = input.value;
  var fac = 1;
  for (var i = 1; i <= x; i++) {
    fac *= i;
  }
  res.innerHTML = (x + "!");
  input.value = fac;
}
function square() {
  var x = input.value;
  res.innerHTML = (x + "<sup>2</sup>");
  input.value = Math.pow(x, 2);
}
function sine() {
  equals();
  var x = input.value;
  var y = x * (Math.PI / 180);
  res.innerHTML = ("sin( " + x + " )");
  input.value = Math.sin(y);
}
function cosine() {
  equals();
  var x = input.value;
  var y = x * (Math.PI / 180);
  res.innerHTML = ("cos( " + x + " )");
  input.value = Math.cos(y);
}
function tangent() {
  equals();
  var x = input.value;
  var y = x * (Math.PI / 180);
  res.innerHTML = "tan( " + x + " )";
  input.value = Math.tan(y);
}
function squareRoot() {
  var x = input.value
  res.innerHTML = "&#8730;" + x;
  input.value = Math.sqrt(x);
}
function antiLog() {
  var x = input.value;
  res.innerHTML = "10^( " + x + " )";
  input.value = Math.pow(10, x);
}
function log() {
  var x = input.value;
  res.innerHTML = ("log( " + x + " )");
  input.value = Math.log10(x);
}
function PI() {
    input.value = Math.PI;
}
function point() {
  var y = (input.value);
  if ((y == "") || (y == "0")){
    input.value = (0 + ".");
  }
  else {
    if (!y.includes(".")){
      input.value = (y + ".");
    }
  }
}
function clearAll() {
  input.value = null;
  res.innerHTML = null;
}
function Clear() {
  input.value = null;
}

function equals(){
  var x = (input.value);
  x = x.replace("(", '').replace(")", '');
  var i = 0;
  while(i < x.length){
    if (x[i] == " ") {
      var first = x.substring(0, i);
      var second = x.substring(i+1, i+2);
      var third = x.substring(i+3, x.length);
      break;
      first = first.replace(" ", '');
      second = second.replace(" ", '');
    }
    else {
      i++;
    }
  }
  if (second == "+") {
    input.value = parseFloat(first) + parseFloat(third);
  } else if (second == "-"){
    input.value = parseFloat(first) - parseFloat(third);
  } else if (second == "*") {
    input.value = parseFloat(first) * parseFloat(third);
  } else if (second == "/") {
    input.value = parseFloat(first) / parseFloat(third);
  } else if (second == "%") {
    input.value = parseFloat(first) % parseFloat(third);
  } else if (second == "**") {
    input.value = Math.pow(first, third);
  }
}
function back(){
  input.value = input.value.substring(0, input.value.length - 1);
}
function changeSign() {
  if (input.value.substring(0,1) != "-") {
    input.value = "-" + input.value;
  } else {
    input.value = input.value.substring(1, input.value.length);
  }
}
function exp() {
  var y = input.value;
  var x = parseFloat(y);
  if (y == "") {
    input.value = "";
  } else {
    input.value = (x +".E+");
  }
}
function cube() {
  var x = input.value;
  res.innerHTML = (x + "<sup>3</sup>");
  input.value = Math.pow(x, 3);
}

function arcSine() {
  var y = Math.asin(input.value);
  var x = (y * 180 / Math.PI);
  res.innerHTML = ("sin<sup>-1</sup>( " + input.value + " )");
  input.value = x;
}
function arcCosine() {
  var y = Math.acos(input.value);
  var x = (y * 180 / Math.PI);
  res.innerHTML = ("cos<sup>-1</sup>( " + input.value + " )");
  input.value = x;
}
function arcTan() {
  var y = Math.atan(input.value);
  var x = (y * 180 / Math.PI);
  res.innerHTML = ("tan<sup>-1</sup>( " + input.value + " )");
  input.value = x;
}
function inverse() {
  var x = input.value;
  input.value = 1 / x;
  res.innerHTML = "1 / " + x;
}
function euler() {
  var x = input.value;
  if (x == 0) {
    input.value = Math.pow(Math.E, 0);
    res.innerHTML = "e ^ " + "0";
  } else {
    input.value = Math.pow(Math.E, x);
    res.innerHTML = "e ^ " + x;
  }
}
function ln() {
  var x = input.value;
  input.value = Math.log(x);
  res.innerHTML = "ln( " + x + " )";
}
