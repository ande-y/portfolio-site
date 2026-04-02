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

function sendMsg(){
    const inputName = document.getElementById("inputName").value;
    const inputEmail = document.getElementById("inputEmail").value;
    const inputMessage = document.getElementById("inputMessage").value;
    console.log(`${inputName}, ${inputEmail}, ${inputMessage}`);

    if (inputName === "" || inputEmail === "" || inputMessage === ""){
        response.textContent = 'no empty feilds.';
        clearResponse();
        return;
    }

    const formData = new FormData(form);

    // Send the data to the server using the Fetch API (AJAX)
    fetch('/submit-page', {
        method: 'POST', // Use the method specified in HTML or 'POST'
        body: formData,
    })
    .then(response => response.json()) // Assuming the server responds with JSON
    .then(data => {
        // Handle the server's response
        response.textContent = 'Success! Form submitted.';
        clearResponse();
        console.log(data);
        form.reset(); // Optionally, reset the form fields
    })
    .catch(error => {
        // Handle any errors during the fetch operation
        response.textContent = 'An error occurred. Please try again.';
        clearResponse();
        console.error('Error:', error);
    });
}

function clearResponse(){
    setTimeout(() => {
        response.textContent = "\xa0";
    }, 3000)
}