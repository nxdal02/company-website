function togglePopup() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = (overlay.style.display == "block") ? "none" : "block";
}

function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var mobileLinks = document.querySelector('.mobile-links');

    menuIcon.classList.toggle('change');
    mobileLinks.classList.toggle('active');
}