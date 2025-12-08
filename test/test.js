const text = document.getElementById("b2");

setTimeout(playAnim, 2000);

function playAnim(){
    text.classList.toggle("slideAnim");
    console.log("yes");
} 