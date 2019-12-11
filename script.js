let counter = document.querySelector('.counter');
const addCont = document.querySelector('#addCountBtn');
const lowerCont = document.querySelector('#lowerCountBtn');



let count = 0;


addCont.addEventListener('click',incrementCounter);
lowerCont.addEventListener('click',decrementCounter);


function incrementCounter(){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML>'0'){
        counter.style.color = '#4caf50'
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}]
    {duration:500,fill:'forwards'});
}


function decrementCounter (){
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML>'0'){
        counter.style.color = '#4caf50'
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'white';
    }
}









