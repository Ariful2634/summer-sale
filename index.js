let totalPrice = 0;
function updatePrice(price) {
    totalPrice += price;
    coupon = document.getElementById('co-btn')
    if (totalPrice >= 200) {
        coupon.disabled = false;
    }
    modal = document.getElementById('modal');
    if (totalPrice > 0) {
        modal.disabled = false;
    }
}



function card1() {
    let price = getInput('spoon-tk');
    updatePrice(price);
    setInput('t-price', totalPrice.toFixed(2));


    const val = getInputValue('val1');
    const p = document.createElement('p');
    const div = document.getElementById('value');
    const count = div.childElementCount;
    p.innerText = `${count +1}: ${val}`;
    p.style.fontWeight='bold';
    div.appendChild(p);

}

function card2() {
    let pri = getInput('bowl-tk');
    updatePrice(pri)
    setInput('t-price', totalPrice.toFixed(2));

    const val = getInputValue('val2');
    const p = document.createElement('p');
    const div = document.getElementById('value');
    const count = div.childElementCount;
    p.innerText = `${count +1}: ${val}`;
    p.style.fontWeight='bold';
    div.appendChild(p);
}

function card3() {
    let homePri = getInput('home-tk');
    updatePrice(homePri);
    setInput('t-price', totalPrice.toFixed(2));

    const val = getInputValue('val3');
    const p = document.createElement('p');
    const div = document.getElementById('value');
    const count = div.childElementCount;
    p.innerText = `${count +1}: ${val}`;
    p.style.fontWeight='bold';
    div.appendChild(p);
}

function card4() {
    let cap = getInput('cap');
    updatePrice(cap);
    setInput('t-price', totalPrice.toFixed(2));

    const val = getInputValue('val4');
    const p = document.createElement('p');
    const div = document.getElementById('value');
    const count = div.childElementCount;
    p.innerText = `${count +1}: ${val}`;
    p.style.fontWeight='bold';
    div.appendChild(p);
}

function card5() {
    let jersey = getInput('jersey');
    updatePrice(jersey);
    setInput('t-price', totalPrice.toFixed(2));

    const val = getInputValue('val5');
    const p = document.createElement('p');
    const div = document.getElementById('value');
    const count = div.childElementCount;
    p.innerText = `${count +1}: ${val}`;
    p.style.fontWeight='bold';
    div.appendChild(p);
}

function card6() {
    let cates = getInput('cates');
    updatePrice(cates);
    setInput('t-price', totalPrice.toFixed(2));

    const val = getInputValue('val6');
    const p = document.createElement('p');
    const div = document.getElementById('value');
    const count = div.childElementCount;
    p.innerText = `${count +1}: ${val}`;
    p.style.fontWeight='bold';
    div.appendChild(p);
}


// discount

document.getElementById('co-btn').addEventListener('click', function () {

    const inp = document.getElementById('inp');
    const input = inp.value;
    if (input == 'SELL200') {
        const parce = totalPrice - (totalPrice * 0.20);
       const parcent=parseFloat(parce);
        setInput('total', parcent.toFixed(2));
        const disco = totalPrice - parcent;
        const discount = parseFloat(disco);
        setInput('disc', discount.toFixed(2));
    }
    else{
        alert('Please insert valid coupon')
    }
    inp.value='';
})


function back() {
    location.reload()
}






// reusable function

function getInput(value) {
    const inp = document.getElementById(value);
    const inputString = inp.innerText;
    const input = parseFloat(inputString);
    return input;
}

function setInput(element, price) {
    const set = document.getElementById(element, price);
    set.innerText = price;
}

function getInputValue(input) {
    const inp = document.getElementById(input);
    const inputString = inp.innerText;
    return inputString;
}