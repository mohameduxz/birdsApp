// Function to update username and profile image
function updateUsername() {
    const user = Telegram.WebApp.initDataUnsafe.user;
    console.log("User data:", user); // Debugging: log user data

    const usernameElement = document.getElementById('user');
    const profileImage = document.getElementById('profile-image');

    if (user) {
        usernameElement.innerText = user.username || 'No Username';

        // Check and set the profile image
        if (user.photo_url) {
            profileImage.src = "user.photo_url";
            profileImage.style.display = 'block'; // Show the image
            console.log("Profile Image URL:", user.photo_url); // Debugging: log the profile image URL
        } else {
            profileImage.style.display = 'block'; // Hide the image if no URL
            profileImage.src = "icon.png";
        }
    } else {
        usernameElement.innerText = 'No User Data';
        profileImage.style.display = 'block'; // Hide the image if no URL
        profileImage.src = "icon.png";
    }
}

// Ensure the Web App is ready before accessing user data
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed"); // Debugging: log when DOM is loaded

    Telegram.WebApp.ready(); // Initialize the Telegram Web App
    Telegram.WebApp.expand(); // Expand the Web App
    Telegram.WebApp.MainButton.hide(); // Hide the main button
    Telegram.WebApp.setHeaderColor("#000000"); // Set the header color

    updateUsername(); // Call the function to update username and profile image
});