var buttons = document.getElementsByClassName("b");
var display = document.getElementById("dp");

var op1 = 0;
var op = null;
var op2 = null;
var c = "NO";
var isc = 0;

document.addEventListener("keypress", function (event) {
  var audi = new Audio("../media/audio/touch.wav");
  audi.play();
  var value = event.key;
  if (
    value == "1" ||
    value == "2" ||
    value == "3" ||
    value == "4" ||
    value == "5" ||
    value == "6" ||
    value == "7" ||
    value == "8" ||
    value == "9" ||
    value == "0" ||
    value == "."
  ) {
    display.innerText += value;
  } else if (
    value == "+" ||
    value == "-" ||
    value == "*" ||
    value == "/" ||
    value == "+/-"
  ) {
    op = value;
    op1 = parseFloat(display.textContent);
    display.innerText = " ";
  } else if (value == "Enter") {
    op2 = parseFloat(display.textContent);
    var r = null;
    r = eval(op1 + op + op2);
    console.log(op1 + " " + op + " " + op2);
    console.log(r);
    display.innerText = r;
  } else {
    display.innerText = " ";
  }
});

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var audi = new Audio("../media/audio/touch.wav");
    audi.play();
    var value = this.getAttribute("data");
    if (
      value == "1" ||
      value == "2" ||
      value == "3" ||
      value == "4" ||
      value == "5" ||
      value == "6" ||
      value == "7" ||
      value == "8" ||
      value == "9" ||
      value == "0" ||
      value == "."
    ) {
      display.innerText += value;
    } else if (
      value == "+" ||
      value == "-" ||
      value == "*" ||
      value == "/" ||
      value == "+/-"
    ) {
      op = value;
      op1 = parseFloat(display.textContent);
      display.innerText = " ";
    } else if (value == "=") {
      op2 = parseFloat(display.textContent);
      var r = null;
      r = eval(op1 + op + op2);
      console.log(op1 + " " + op + " " + op2);
      console.log(r);
      display.innerText = r;
    } else {
      display.innerText = " ";
    }
  });
}
