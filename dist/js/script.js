"use strict";
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable vars-on-top */
/* eslint-disable no-redeclare */
/* eslint-disable no-var */
const inputs = document.querySelectorAll('.calculator__input');
const form = document.getElementById('form');
const buttons = document.querySelectorAll('.calculator__btn--tip');
const tipValue = document.getElementById('tip');
const billValue = document.getElementById('bill');
const peopleValue = document.getElementById('people');
const peopleError = document.getElementById('people-error');
const tipAmount = document.getElementById('tip-amount');
const totalPer = document.getElementById('total-per');
const reset = document.getElementById('reset');
function Only_Text(e) {
    let code;
    if (!e)
        var e = window.event;
    if (e.keyCode)
        code = e.keyCode;
    else if (e.which)
        code = e.which;
    const character = String.fromCharCode(code);
    const AllowRegex = /\d|\./;
    if (AllowRegex.test(character))
        return true;
    return false;
}
const cuandoSeHaceClick = (e) => {
    const tipNum = parseFloat(tipValue.value);
    const billNum = parseFloat(billValue.value);
    const peopleNum = parseFloat(peopleValue.value);
    console.log(billNum);
    if (peopleNum === 0 || peopleValue.value === '') {
        peopleError.classList.add('calculator__field--error');
        return;
    }
    console.log(isNaN(billNum));
    if (isNaN(billNum)) {
        return;
    }
    let custom;
    if (e.target.dataset.tip) {
        custom = e.target.dataset.tip;
    }
    else {
        custom = tipNum;
    }
    const output_tip = (billNum * (custom / 100)) / peopleNum;
    const output_total = billNum / peopleNum + output_tip;
    tipAmount.value = `$${output_tip.toFixed(2)}`;
    totalPer.value = `$${output_total.toFixed(2)}`;
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    reset.disabled = false;
});
form.addEventListener('reset', (e) => {
    billValue.focus();
    reset.disabled = true;
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
