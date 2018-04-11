function more() {
  if (changed2.style.display == "none") {
    changed.style.display = "none";
    changed2.style.display = "block";
  }
  else {
    changed.style.display = "block";
    changed2.style.display = "none";
  }
}
function val(button) {
  var x = button.value;
  var y = input.value;
  var z = y.length - 2;
  if (y != "0"){
    if ((y.charAt(z) == "/") || (y.charAt(z) == "+") || (y.charAt(z) == "%") || (y.charAt(z) == "*")) {
      if ((x == " / ") || (x == " + ") || (x == " - ") || (x == " % ") || (x == " * ")) {
        input.value = y;
      }
      else {
        input.value += x;
      }
    }
    else {
      input.value += x;
    }
  }
  if (y == "0") {
    if ((x == " / ") || (x == " + ") || (x == " - ") || (x == " % ") || (x == " * ")) {
      input.value = "0" + x;
    }
    else {
      input.value = x;
    }
  }
}
function equals(){
  var x = input.value;
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
    if (first.indexOf(".E") != -1) {
      first = first.replace(".E", '')
      input.value = (first * Math.pow(10, third));
    }
    else {
      input.value = parseFloat(first) + parseFloat(third);
      result.innerHTML = parseFloat(first) + parseFloat(third);
    }
  } else if (second == "-"){
    input.value = parseFloat(first) - parseFloat(third);
    result.innerHTML = parseFloat(first) - parseFloat(third);
  } else if (second == "*") {
    input.value = parseFloat(first) * parseFloat(third);
    result.innerHTML = parseFloat(first) * parseFloat(third);
  } else if (second == "/") {
    input.value = parseFloat(first) / parseFloat(third);
    result.innerHTML = parseFloat(first) / parseFloat(third);
  } else if (second == "%") {
    input.value = parseFloat(first) % parseFloat(third);
    result.innerHTML = parseFloat(first) % parseFloat(third);
  }
}
function square() {
  var x = input.value;
  result.innerHTML = (x + "<sup>2</sup>");
  input.value = Math.pow(x, 2);
}
function abs() {
  var x = input.value;
  input.value = Math.abs(x);
}
function sine() {
  equals();
  var x = input.value;
  var y = x * (Math.PI / 180);
  result.innerHTML = ("sin( " + x + " )");
  input.value = Math.sin(y);
}
function cosine() {
  equals();
  var x = input.value;
  var y = x * (Math.PI / 180);
  result.innerHTML = ("cos( " + x + " )");
  input.value = Math.cos(y);
}
function tangent() {
  equals();
  var x = input.value;
  var y = x * (Math.PI / 180);
  result.innerHTML = "tan( " + x + " )";
  input.value = Math.tan(y);
}
function squareRoot() {
  var x = input.value
  result.innerHTML = "&#8730;" + x;
  input.value = Math.sqrt(x);
}
function antiLog() {
  var x = input.value;
  result.innerHTML = "10^( " + x + " )";
  input.value = Math.pow(10, x);
}
function log() {
  var x = input.value;
  if (x == "0") {
    result.innerHTML = ("log( 0 )");
    input.value = "Invalid";
  } else {
    result.innerHTML = ("log( " + x + " )");
    input.value = Math.log10(x);
  }
}
function exp() {
  var y = input.value;
  var x = parseFloat(y);
  if (y == "") {
    input.value = "";
  } else {
    input.value = (x +".E + ");
  }
}
function clearAll() {
  input.value = 0;
  result.innerHTML = null;
}
function Clear() {
  input.value = 0;
}
function back(){
  if ((input.value).length == 1) {
    input.value = 0;
  } else {
    input.value = input.value.substring(0, input.value.length - 1);
  }
}
function PI() {
    input.value = Math.PI;
}
function fac() {
  var x = input.value;
  var fac = 1;
  for (var i = 1; i <= x; i++) {
    fac *= i;
  }
  result.innerHTML = (x + "!");
  input.value = fac;
}
function changeSign() {
  if ((input.value.substring(0,1) != "-") && (input.value != 0)) {
    input.value = "-" + input.value;
  } else {
    input.value = input.value.substring(1, input.value.length);
  }
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
function cube() {
  var x = input.value;
  result.innerHTML = (x + "<sup>3</sup>");
  input.value = Math.pow(x, 3);
}
function arcSine() {
  var y = Math.asin(input.value);
  var x = (y * 180 / Math.PI);
  result.innerHTML = ("sin<sup>-1</sup>( " + input.value + " )");
  input.value = x;
}
function inc() {
  input.value = ++input.value;
}
function dec() {
  input.value = --input.value;
}
function arcCosine() {
  var y = Math.acos(input.value);
  var x = (y * 180 / Math.PI);
  result.innerHTML = ("cos<sup>-1</sup>( " + input.value + " )");
  input.value = x;
}
function inverse() {
  var x = input.value;
  input.value = 1 / x;
  result.innerHTML = "1 / " + x;
}
function euler() {
  var x = input.value;
  if (x == 0) {
    input.value = Math.pow(Math.E, 0);
    result.innerHTML = "e ^ " + "0";
  } else {
    input.value = Math.pow(Math.E, x);
    result.innerHTML = "e ^ " + x;
  }
}
function ln() {
  var x = input.value;
  input.value = Math.log(x);
  result.innerHTML = "ln( " + x + " )";
}
function arcTan() {
  var y = Math.atan(input.value);
  var x = (y * 180 / Math.PI);
  result.innerHTML = ("tan<sup>-1</sup>( " + input.value + " )");
  input.value = x;
}
function percent() {
  var x = input.value;
  input.value = x / 100;
  result.innerHTML = x / 100;
}
