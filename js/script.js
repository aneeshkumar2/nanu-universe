// Typing effect

const text = "Dear Nanu ❤️";

let i = 0;


function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text[i];

        i++;

        setTimeout(typing,150);

    }

}


typing();




// Relationship timer

function updateCounter(){

    const start = new Date("February 9, 2026");

    const now = new Date();

    const difference = now - start;


    const days = Math.floor(
        difference / (1000*60*60*24)
    );


    if(days >= 0){

        document.getElementById("counter").innerHTML =
        days + " days together ❤️";

    }

    else{

        document.getElementById("counter").innerHTML =
        "Our journey is beginning ❤️";

    }

}


updateCounter();

setInterval(updateCounter,60000);




// Enter button

document.getElementById("enter").onclick=function(){

window.location.href="pages/home.html";

};
