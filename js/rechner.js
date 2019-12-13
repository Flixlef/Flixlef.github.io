let einzahlen_button = document.getElementById('einzahlen');
einzahlen_button.addEventListener('click', function () {
    let einzahlen_input = document.getElementById('einzahlung');
    let einzahlen_value = einzahlen_input.value;
    let alter_kontostand = localStorage.getItem('sum');

    localStorage.setItem('sum', Number(alter_kontostand) + Number(einzahlen_value));

    update_sum();
})

let reset_button = document.getElementById('reset');
reset_button.addEventListener('click', function () {
    localStorage.clear();

    update_sum();
})

let eins_button = document.getElementById('eins'); 
eins_button.addEventListener('click', function() {
    let alter_kontostand = localStorage.getItem('sum');

    localStorage.setItem('sum', Number(alter_kontostand) - Number(1));    

    update_sum()
})

let zwei_button = document.getElementById('zwei'); 
zwei_button.addEventListener('click', function() {
    let alter_kontostand = localStorage.getItem('sum');

    localStorage.setItem('sum', Number(alter_kontostand) - Number(2));    

    update_sum()
})



function update_sum() {
    let sum = localStorage.getItem('sum');

    let sum_div = document.getElementById('sum');

    if (!sum) {
        sum = 0;
    }

    sum_div.innerHTML = sum;
}


update_sum();