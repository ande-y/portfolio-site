// <Header> navbar functionality

function scrollPage(destName){
    let dest = document.getElementById(destName);
    let rect = dest.getBoundingClientRect();
    let offset = window.innerHeight * .15;
    window.scrollTo({
        left: 0, 
        top: rect.top + window.scrollY - offset, 
        behavior: "smooth"
    });
}


// <ContactMe> copy email to clipboard

function copyEmail(){
    const copyText = document.getElementById("copyEmail").textContent;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard!");
    });
    console.log(copyText);
}


// <ContactMe> form submission functionalility

const form = document.getElementById("contactGrid");
const response = document.getElementById("inputResponse");
// import { dns } from 'dns';

function sendMsg(){
    const inputName = document.getElementById("inputName").value;
    const inputEmail = document.getElementById("inputEmail").value;
    const inputMessage = document.getElementById("inputMessage").value;
    console.log(`${inputName}, ${inputEmail}, ${inputMessage}`);

    // no empty fields
    if (inputName === "" || inputEmail === "" || inputMessage === ""){
        displayText('No empty feilds.', "red");
        return;
    }

    // check against special characters in name
    if (! /([a-z]|[A-Z]| )+/.test(inputName)){
        displayText("Invalid name.", "red");
        throw new Error("Invalid name.");
    }

    function invalidEmail(){
        displayText("Invalid email.", "red");
        throw new Error("Invalid email.");
    }

    // emails may not start with '.' or have ".."
    if (inputEmail[0] == "." || inputEmail.includes("..")) invalidEmail();

    // emails may only have 1 '@'
    if (! /[^@]+@[^@]+/.test(inputEmail)) invalidEmail();

    const domain = (inputEmail.split("@"))[1].toLowerCase();
    console.log(`[${domain}]`);
    // email domain may only have a-z 0-9 or '-' & be separated by '.'
    if (! /([a-z]|\d|-|.)+\.([a-z]|\d|-|.)+/.test(domain)) invalidEmail();
    
//     // verify if domain exists
//     dns.resolve(email[1], (err, records) => {
//         if (err) invalidEmail();
//         else continueSending();
//     });
// }
// function continueSending(){

    const formData = new FormData(form);

    // Send the data to the server using the Fetch API (AJAX)
    fetch('/submit-page', {
        method: 'POST', // Use the method specified in HTML or 'POST'
        body: formData,
    })
    .then(response => response.json()) // Assuming the server responds with JSON
    .then(data => {
        // Handle the server's response
        displayText('Form submitted.', "green");
        console.log(data);
        form.reset(); // Optionally, reset the form fields
    })
    .catch(error => {
        // Handle any errors during the fetch operation
        displayText('Error. Try again.', "red");
        console.error('Error:', error);
    });
}

function displayText(text, color){
    response.style = `color: ${color}`;
    response.textContent = text;

    setTimeout(() => {
        response.textContent = "\xa0";
    }, 3000)
}