const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

// Now we need to  declare variable to store starttime & the id of the set-interval function , that update the display value

let startTime,intervalId;

//Define the start function that starts Time : 

function start(){
    //  set time to the current time using the Datenow
    startTime = Date.now();

    // start setInterval function here to update the display for every 10 millisecond
   intervalId = setInterval(()=>{
        //   we gonna  calculate the elapses time by subtracting current time
        const elapsedTime = Date.now()-startTime;
        // now we convert it into hh:mm:ss
        const seconds = Math.floor(elapsedTime/1000);
        const minutes  = Math.floor(seconds/60);
        const hours = Math.floor(minutes/60);

        // now create a format  time  string formatted of hh:mm:ss

        const formattedTime = `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}` ;
        
        //  now update the element  with the formatted time string 

        display.textContent = formattedTime;

    },10);
}

function stop(){
    // clears the interval by passing the intervalId
    clearInterval(intervalId);
}
function reset() {
       clearInterval(intervalId);
       display.textContent = '00:00:00';
}

//adding a leading zero to our number if its less than 10
function pad(number){
    return  number <10 ? '0' + number : number ;
}


// Event Listener

startBtn.addEventListener('click',start);
stopBtn.addEventListener('click',stop);
resetBtn.addEventListener('click',reset);

