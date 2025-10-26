// --- script.js ---

// List of your avatar image file names
// IMPORTANT: Make sure these files exist in the same directory as your HTML/CSS
const avatarImages = [
    'vlogpic.png','finance2.png','f2.png','Health1.png', // The initial robot avatar
    'fo2.png','g1.png','pocket.png','t3.png', // The previous avatar (from the first image)
    'Health3.png','r2.png','g2.png','t1.png',
    'tech1.png','finance3.png','tech2.png','f3.png',


    // Add more avatar file names here
];

let currentIndex = 0; // Start with the first avatar in the list

const avatarElement = document.getElementById('current-avatar');
const prevButton = document.getElementById('prev-avatar');
const nextButton = document.getElementById('next-avatar');

// Function to update the image source
function updateAvatar() {
    // Set the image source to the current file name
    avatarElement.src = avatarImages[currentIndex];
}

// Event listener for the NEXT button
nextButton.addEventListener('click', () => {
    // Calculate the next index, wrapping around to the start if needed
    currentIndex = (currentIndex + 1) % avatarImages.length;
    updateAvatar();
});

// Event listener for the PREVIOUS button
prevButton.addEventListener('click', () => {
    // Calculate the previous index
    currentIndex = (currentIndex - 1 + avatarImages.length) % avatarImages.length;
    updateAvatar();
});

// Initialize the avatar on page load (optional, but good practice)
updateAvatar();

