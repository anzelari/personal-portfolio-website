let navLinks = ['li-about', 'li-projects', 'li-skills', 'li-contacts', 'about-p'];

function changeBackground(event) {
    let navTarget = "li-" + event.target.id;
    if (event.target.id == 'about-p') {
        navTarget = 'li-about';
    } ;
    document.getElementById(navTarget).style.backgroundColor = "rgb(156, 178, 224)";
  
    navLinks.forEach(element => {
        if (navTarget != element) {
            document.getElementById(element).style.backgroundColor = "";
         
        }
    });
}

addEventListener('mouseover', changeBackground);
