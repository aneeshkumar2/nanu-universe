// Typing animation

const message = "Dear Nanu ❤️";

let position = 0;


function typing(){

if(position < message.length){

document.getElementById("typing").innerHTML += message[position];

position++;

setTimeout(typing,150);

}

}


typing();




// Relationship counter

function updateCounter(){


const startDate = new Date("February 9, 2026");


const today = new Date();


const difference = today - startDate;


const days = Math.floor(
difference / (1000 * 60 * 60 * 24)
);


if(days >= 0){

document.getElementById("counter").innerHTML =
days + " days together ❤️";

}
else{

document.getElementById("counter").innerHTML =
"Our story is just beginning ❤️";

}


}


updateCounter();

setInterval(updateCounter,60000);




// Button

document.getElementById("enter").onclick=function(){

alert(
"Nanu ❤️\n\nWelcome to the universe Anu made for you ✨"
);

};
