window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // If the user scrolls down 50px or more
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Function to toggle the visibility of navbar links
function toggleNavbar() {
    const navbarLinks = document.querySelector('.navbar-links');
    if (navbarLinks.style.display === 'flex') {
        navbarLinks.style.display = 'none';  // Hide links if they are currently visible
    } else {
        navbarLinks.style.display = 'flex';  // Show links if they are currently hidden
    }
}

// Function to reset the navbar links based on the screen width
function resetNavbar() {
    const navbarLinks = document.querySelector('.navbar-links');
    // If the window width is greater than 768px (desktop view), ensure the links are visible
    if (window.innerWidth > 768) {
        navbarLinks.style.display = 'flex';  // Show navbar links
    } else {
        navbarLinks.style.display = 'none';  // Keep navbar links hidden on mobile view
    }
}

// Initial reset when the page loads
resetNavbar();

// Add event listener for resizing the window
window.addEventListener('resize', resetNavbar);



