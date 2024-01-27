let guestNum = document.getElementById('num_1');
let homeNum = document.getElementById('num_2');
let result = document.getElementById('result');

function addOne(){
    guestNum.textContent ++;
}
function addTwo(){
    guestNum.textContent = parseInt(guestNum.textContent) + 2;
}

function addThree(){
    guestNum.textContent = parseInt(guestNum.textContent) + 3;
}


function addOneh(){
    homeNum.textContent ++;
}
function addTwoh(){
    homeNum.textContent = parseInt(homeNum.textContent) + 2;
}

function addThreeh(){
    homeNum.textContent = parseInt(homeNum.textContent) + 3;
}
function reset(){
    homeNum.textContent = 0;
    guestNum.textContent = 0;
    result.textContent = '';
}

// function setResult() {
//     if (homeNum.textContent > guestNum.textContent) {
//         result.textContent = 'Home is winning!';
//     } else if (homeNum.textContent < guestNum.textContent) {
//         result.textContent = 'Guest is winning!';
//     } else {
//         result.textContent = 'It\'s a tie!';
//     }
// }
