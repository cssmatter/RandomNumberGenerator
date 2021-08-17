var counter = document.getElementById('counter');

counterData = 0;

function generateNumber(countertype){
  
    number = Math.floor(Math.random() * 10000)

    setTimeout(function() {

        counter.style.opacity = '0'
        counter.style.fontSize = '0rem'

        setTimeout(function(){
            counter.style.fontSize = '30rem'
            counter.style.opacity = '1'
            counter.style.color = 'white'
            counter.innerHTML = number;

            setTimeout(function(){
                counter.style.color = '#b2becd'
                counter.style.fontSize = '3rem'
            },200)

        },200)

    }, 100)

   
}
