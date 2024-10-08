const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("Reset");

const minutes = document.getElementById("minutes");


function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit; 
}


let id;
let sec = 0
let min = 0
let hours =0;
start.addEventListener("click",(e)=>{
     id = setInterval(()=>{
       sec ++
        if(sec==60){
            min ++
            sec = 0
        }
        else if (min==60){
            hours++;
            min=0;
            sec=0
        }
        minutes.innerText = `${formatTime(hours)}:${formatTime(min)}:${formatTime(sec)}`;

     },1000)
   
})


stop.addEventListener("click",()=>{
    clearInterval(id);
})
reset.addEventListener("click",(e)=>{
    min=0;
    hours=0;
    sec=0;
    minutes.innerText = `0${hours}:0${min}:0${sec}`
    
})