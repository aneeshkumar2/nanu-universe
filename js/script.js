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



const startDate=new Date("2026-02-09T00:00:00");



function updateCounter(){

const now=new Date();

const diff=now-startDate;

if(diff<0){

document.getElementById("counter").innerHTML="Our journey is beginning ❤️";

return;

}

const days=Math.floor(diff/(1000*60*60*24));

document.getElementById("counter").innerHTML=days+" Days ❤️";

}

updateCounter();

setInterval(updateCounter,60000);
