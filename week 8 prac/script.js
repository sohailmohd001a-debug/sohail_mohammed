// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    
    // Check if the menu's inline display property is currently 'block'
    if (menu.style.display === "block") {
        // CLOSE the menu
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        // OPEN the menu
        menu.style.display = "block";
        logo.style.display = "none";
    }
}