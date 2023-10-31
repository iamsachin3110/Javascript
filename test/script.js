'use strict';

document.querySelector('#thought_1').addEventListener('click', ShowQuoteFirst);
document.querySelector('#thought_2').addEventListener('click', ShowQuoteSecond);
document.querySelector('#thought_3').addEventListener('click', ShowQuoteThird);


const close_button_tap = document.querySelectorAll('#close_button');

for (let i = 0; i < close_button_tap.length; i++) {
    close_button_tap[i].addEventListener('click', closeEvent);
};

function closeEvent(e) {
    console.log("==========", e)
    document.querySelector('#first_quote').style.display = 'none';
    document.querySelector('#second_quote').style.display = 'none';
    document.querySelector('#third_quote').style.display = 'none';

};

function ShowQuoteFirst() {
    document.querySelector('#first_quote').style.display = 'block';
};
function ShowQuoteSecond() {
    document.querySelector('#second_quote').style.display = 'block';
};
function ShowQuoteThird() {
    document.querySelector('#third_quote').style.display = 'block';
};
