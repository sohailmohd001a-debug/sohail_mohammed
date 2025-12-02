/**
 * Toggles the visibility of the mobile menu and the logo using CSS classes.
 * * We use classList.toggle() to add or remove the 'open' class on the menu
 * and the 'hidden-on-mobile' class on the logo. The actual visual change
 * is defined in style.css using media queries.
 */
function hamburger() {
    // Get the main navigation links container
    const menu = document.getElementById("menu-links");
    // Get the logo element (assuming it's what you want to hide when the menu is open)
    const logo = document.getElementById("ffc-logo");
    
    if (menu) {
        // Toggles the 'open' class on the menu
        menu.classList.toggle('open');
    }
    
    if (logo) {
        // Toggles a class to hide the logo when the menu is open
        logo.classList.toggle('hidden-on-mobile');
    }
}