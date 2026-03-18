// TITLE CARD OCCUPATION LOOPER

const text = document.getElementById("occupationText");

setInterval(textChange, 4000);

let iA = 0;
const occupations = ["Computer Science Major",
                     "Video Game Developer",
                     "Illustrator & Graphic Artist",
                     "Full Stack Web Developer"];

function textChange(){
    iA = (iA + 1) % occupations.length;
    text.textContent = occupations[iA];
}

// NAVBAR BUTTONS SCROLL

function scrollPage(destName){
    let dest = document.getElementById(destName);
    let rect = dest.getBoundingClientRect();
    window.scrollTo({
        left: 0, 
        top: rect.top + window.scrollY, 
        behavior: "smooth"
    });
}

// GALLERY ANIMATION PLAYERS

const gall = document.getElementsByClassName("gallery");

setInterval(changeImg, 6000);

let iB = 0;

function changeImg(){
    // console.log("yuh")
}
