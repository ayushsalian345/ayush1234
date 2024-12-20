// JavaScript function to dynamically add an image to a specified container
function addImage(containerId, imagePath, altText, className) {
    const container = document.getElementById(containerId);
    if (container) {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = altText;
        img.className = className;
        container.appendChild(img);
    } else {
        console.error(`Container with ID "${containerId}" not found.`);
    }
}

// Call the function to add images dynamically
document.addEventListener('DOMContentLoaded', () => {
    addImage('hero-container', 'assets/images/hero-image.jpg', 'Hero Image', 'hero-image');
    addImage('bio-container', 'assets/images/profile.jpg', 'Profile Picture', 'profile-pic');
});
