// Typing

const text="Dear Nanu ❤️";

let i=0;

function type(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text[i];

i++;

setTimeout(type,140);

}

}

type();




// Counter

const startDate=new Date("2026-02-09");

function updateCounter(){

const diff=new Date()-startDate;

const days=Math.floor(diff/(1000*60*60*24));

document.getElementById("counter").innerHTML=

days<0

?

"Our journey begins soon ❤️"

:

days+" Days Together ❤️";

}

updateCounter();




// Progress

let progress=

Number(localStorage.getItem("progress"))||0;

updateProgress();

function addProgress(points){

progress+=points;

if(progress>100)progress=100;

localStorage.setItem("progress",progress);

updateProgress();

}

function updateProgress(){

const bar=document.getElementById("progress");

if(bar){

bar.style.width=progress+"%";

bar.innerHTML=progress+"%";

}

}
