let Stopwatch=document.querySelector(".stopwatch");
let start=document.getElementById("m");
let stop=document.getElementById("n");
let reset=document.getElementById("o");

let msec=0;
let sec=0;
let min=0;
let timerid=null;
start.addEventListener('click',()=>{
    if(timerid!==null){
        clearInterval(timerid);
    }
    timerid=setInterval(starttimer,10)
});
stop.addEventListener('click',()=>{
        clearInterval(timerid);
});
reset.addEventListener('click',()=>{
        clearInterval(timerid);
        Stopwatch.innerHTML="00:00:00";
        msec=sec=min=0;
});
function starttimer(){
    msec++;
    if(msec==100){
        msec=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
    }
    let msecstring=msec<10?`0${msec}`:msec;
    let secstring=sec<10?`0${sec}`:sec;
    let minstring=sec<10?`0${min}`:min;
    Stopwatch.innerHTML=`${minstring}:${secstring}:${msecstring}`;
};
