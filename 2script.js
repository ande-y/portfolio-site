function scrollPage(destName){
    let offset = 100;
    let dest = document.getElementById(destName);
    let rect = dest.getBoundingClientRect();
    window.scrollTo({
        left: 0, 
        top: rect.top + window.scrollY - offset, 
        behavior: "smooth"
    });
}
