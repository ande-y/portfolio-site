const text = document.getElementById("b2");

setTimeout(playAnim, 2000);

function playAnim(){
    text.classList.toggle("slideAnim");
    console.log("yes");
} 

function saySomething() {
    var greeting = "Hello";
    {
        greeting = "Howdy";  // error comes from here
        // let greeting = "Hi";
        console.log(greeting);
    }
}

saySomething();
