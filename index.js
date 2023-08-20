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
    setInput('t-price', totalPrice.toFixed(2));

}

function card2() {
    let pri = getInput('bowl-tk');
    updatePrice(pri)

    setInput('t-price', totalPrice.toFixed(2));
}

function card3() {
    let homePri = getInput('home-tk');
    updatePrice(homePri)

    setInput('t-price', totalPrice.toFixed(2));
}

function card4() {
    let cap = getInput('cap');
    updatePrice(cap)

    setInput('t-price', totalPrice.toFixed(2));
}

function card5() {
    let jersey = getInput('jersey');
    updatePrice(jersey)

    setInput('t-price', totalPrice.toFixed(2));
}

function card6() {
    let cates = getInput('cates');
    updatePrice(cates)

    setInput('t-price', totalPrice.toFixed(2));
}


// discount

document.getElementById('co-btn').addEventListener('click',function(){
 
    const inp = document.getElementById('inp');
    const input = inp.value;
    if(input=='SELL200'){
        parcent=totalPrice-(totalPrice*0.20);
        setInput('total',parcent.toFixed(2))
        // console.log(typeof discTotal)
        const discount = totalPrice-parcent;
        setInput('disc',discount.toFixed(2))
    }
})


function back(){
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