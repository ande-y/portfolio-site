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

// <ContactMe> form submition functionalility

// function 