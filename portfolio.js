const text = document.getElementById("occupationText");

const timeInterval = 3500;
setInterval(textVanish, timeInterval);

let index = 0;
const occupations = ["Computer Science Major",
                     "Video Game Developer",
                     "Illustrator & Graphic Artist",
                     "Full Stack Web Developer"];

function textVanish(){
    text.classList.remove("appearing");
    text.classList.add("fading");
    console.log("yes");

    setTimeout(textAppear, 500);
}
function textAppear(){
    index = (index + 1) % occupations.length;
    text.textContent = occupations[index];
    text.classList.replace("fading", "appearing");
}
