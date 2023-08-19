function card1(){
    price = getInput('spoon-tk');
     tPrice=getInput('t-price');
     tPrice=price+tPrice;
    setInput('t-price',tPrice);
    
}

function card2(){
    pri = getInput('bowl-tk');
    tPri=getInput('t-price');
    tPri=pri+tPri;
   setInput('t-price',tPri);
}

function card3(){
    homePri = getInput('home-tk');
    homePrice=getInput('t-price');
    homePrice=homePri+homePrice;
   setInput('t-price',homePrice);
}

function card4(){
    cap = getInput('cap');
    capPri=getInput('t-price');
    capPri=cap+capPri;
   setInput('t-price',capPri);
}

function card5(){
    jersey = getInput('jersey');
    jerseyPri=getInput('t-price');
    jerseyPri=jersey+jerseyPri;
   setInput('t-price',jerseyPri);
}

function card6(){
    cates = getInput('cates');
    catesPri=getInput('t-price');
    catesPri=cates+catesPri;
   setInput('t-price',catesPri);
}

document.getElementById('inp').addEventListener('keyup',function(){
    input = inp.value;
    const coupon=document.getElementById('co-btn');
    if(input=='SELL200'){
        coupon.removeAttribute('disabled')
    }
    else{
        coupon.setAttribute('disabled', true)
    }
})



// reusable function

function getInput(value){
    const inp = document.getElementById(value);
    const inputString = inp.innerText;
    const input=parseFloat(inputString);
    return input;
}

function setInput(element,price){
    const set = document.getElementById(element,price);
    set.innerText=price;
}