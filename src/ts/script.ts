/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable vars-on-top */
/* eslint-disable no-redeclare */
/* eslint-disable no-var */
const inputs = document.querySelectorAll('.calculator__input');
const form = <HTMLElement>document.getElementById('form');
const buttons = document.querySelectorAll('.calculator__btn--tip');

const tipValue = <HTMLInputElement>document.getElementById('tip');
const billValue = <HTMLInputElement>document.getElementById('bill');
const peopleValue = <HTMLInputElement>document.getElementById('people');
const peopleError = <HTMLElement>document.getElementById('people-error');

const tipAmount = <HTMLInputElement>document.getElementById('tip-amount');
const totalPer = <HTMLInputElement>document.getElementById('total-per');

function Only_Text(e: any) {
  let code;
  if (!e) var e: any = window.event;
  if (e.keyCode) code = e.keyCode;
  else if (e.which) code = e.which;
  const character = String.fromCharCode(code);

  const AllowRegex = /\d|\./;
  if (AllowRegex.test(character)) return true;
  return false;
}

const cuandoSeHaceClick = (e: any) => {
  const tipNum = parseFloat(tipValue.value);
  const billNum = parseFloat(billValue.value);
  const peopleNum: number = parseFloat(peopleValue.value);

  console.log(billNum);

  if (peopleNum === 0 || peopleValue.value === '') {
    peopleError.classList.add('calculator__field--error');
    return;
  }

  console.log(isNaN(billNum));

  if (isNaN(billNum)) {
    return;
  }

  let custom: number;

  if (e.target.dataset.tip) {
    custom = e.target.dataset.tip;
  } else {
    custom = tipNum;
  }

  const output_tip = (billNum * (custom / 100)) / peopleNum;

  const output_total = billNum / peopleNum + output_tip;

  tipAmount.value = `$${output_tip.toFixed(2)}`;

  totalPer.value = `$${output_total.toFixed(2)}`;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

form.addEventListener('reset', (e) => {
  billValue.focus();
});

buttons.forEach((boton) => {
  boton.addEventListener('click', cuandoSeHaceClick);
});

tipValue.addEventListener('keypress', (e) => {
  if (e.code === 'Enter' || e.code === 'NumpadEnter') {
    cuandoSeHaceClick(e);
  }
});

peopleValue.addEventListener('focus', () => {
  peopleError.classList.remove('calculator__field--error');
});
