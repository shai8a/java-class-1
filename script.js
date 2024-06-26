function welcome() {
  alert("welcome");
}

function welcome2() {
  const userName = document.getElementById("userName").value;
  alert("ברוך הבא" + userName);
}

function multi50() {
  const num = document.getElementById("num1").value;
  alert(num * 50);
}

function multi() {
  const num1 = document.getElementById("num2").value;
  const num2 = document.getElementById("num3").value;

  document.getElementById("output1").innerHTML = num1 * num2;
  
}

function changeColor() {
  const color = document.getElementById("myColor").value;

  document.body.style.backgroundColor = color;
}

function sum() {
  const number = +document.getElementById("num4").value;
  const number2 = +document.getElementById("num5").value;

  document.getElementById("output2").innerHTML = number + number2; 
}

function sum2() {
  const number3 = +document.getElementById("num6").value;
  const number4 = +document.getElementById("num7").value;
  const res = number3 + number4;

  document.getElementById("output3").innerHTML = number3 + " + " + number4 + " = " + res ;


  







}
