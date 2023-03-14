var fNum = window.prompt("enter first number: ");

document.querySelector('.first-Number').textContent = fNum

var SecNum = window.prompt("enter second number");

document.querySelector('.second-Number').textContent = SecNum;

var BtnCalc = document.querySelector('.calc');
BtnCalc.addEventListener('click', function() {
  var i;
  var totalResult = 0;
  for(i= 0; i <(fNum-SecNum);i++) {
    totalResult++;
    document.querySelector('.result').textContent = totalResult;
  }
})