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

function test(){
    const inName = document.getElementById("inputName");
    const inEmail = document.getElementById("inputEmail");
    const inMessage = document.getElementById("inputMessage");

    if (inName === "" || inEmail === "" || inMessage === ""){
        response.textContent = 'no empty feilds.';
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
        console.log(data);
        form.reset(); // Optionally, reset the form fields
    })
    .catch(error => {
        // Handle any errors during the fetch operation
        response.textContent = 'An error occurred. Please try again.';
        console.error('Error:', error);
    });
}