
let countEl = document.getElementById('count-el');
let total = document.getElementById('total-ppl');
let count = 0;

function increment (){
    count += 1;
    countEl.textContent = count;
}

function save(){
    let countStr = count + '-';
    total.textContent += countStr;
    countEl = 0;
    count = 0;


}