
let calculation = localStorage.getItem('calculation') || '';
let textDisplay = document.querySelector('.js-calculation');
if(calculation) {
  textDisplay.innerHTML = calculation;
};

function calculOperation(type=undefined) {

  if (type === 'addition') {
    calculation += ' + ';
  } else if (type === 'soustraction') {
    calculation += ' - ';
  } else if (type === 'multiplication') {
    calculation += ' * ';
  } else if (type === 'division') {
    calculation += ' / ';
  };
  localStorage.setItem('calculation', calculation);
  textDisplay.innerHTML = calculation
};

function numberAdding(number) {
  calculation += number;
  localStorage.setItem('calculation', calculation);
  textDisplay.innerHTML = calculation;
  return calculation;
};

function comma() {
  calculation += '.';
  localStorage.setItem('calculation', calculation);
  textDisplay.innerHTML = calculation;
  return calculation;
};

function answer(){
  calculation = eval(calculation);
  localStorage.setItem('calculation', calculation);
  textDisplay.innerHTML += ` = ${calculation}`;
  console.log(calculation);
};

function clearCalculation() {
  console.log('Cleared.');
  calculation = '';
  localStorage.setItem('calculation', calculation);
  textDisplay.innerHTML = '';
};
