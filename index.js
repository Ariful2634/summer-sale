let totalPrice = 0;
function updatePrice(price) {
    totalPrice += price;
    coupon = document.getElementById('co-btn')
    if (totalPrice >= 200) {
        coupon.disabled = false;
    }
    modal=document.getElementById('modal');
    if(totalPrice>0){
        modal.disabled=false;
    }
}



function card1() {
    let price = getInput('spoon-tk');
    updatePrice(price)
    setInput('t-price', totalPrice);

}

function card2() {
    let pri = getInput('bowl-tk');
    updatePrice(pri)

    setInput('t-price', totalPrice);
}

function card3() {
    let homePri = getInput('home-tk');
    updatePrice(homePri)

    setInput('t-price', totalPrice);
}

function card4() {
    let cap = getInput('cap');
    updatePrice(cap)

    setInput('t-price', totalPrice);
}

function card5() {
    let jersey = getInput('jersey');
    updatePrice(jersey)

    setInput('t-price', totalPrice);
}

function card6() {
    let cates = getInput('cates');
    updatePrice(cates)

    setInput('t-price', totalPrice);
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