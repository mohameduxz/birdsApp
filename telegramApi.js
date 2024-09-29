// Function to update username and profile image
function updateUsername() {
    const user = Telegram.WebApp.initDataUnsafe.user;
    console.log("Telegram Init Data:", Telegram.WebApp.initDataUnsafe); // Debugging: log the full init data

    const usernameElement = document.getElementById('user');
    const profileImage = document.getElementById('profile-image');

    if (user) {
        usernameElement.innerText = user.username || 'No Username';
        console.log("User username:", user.username); // Debugging: log username

        // Check if there's a valid profile image URL
        if (user.photo_url) {
            profileImage.src = "user.photo_url";
            profileImage.style.display = 'block'; // Show the image
            console.log("Profile Image URL:", user.photo_url); // Debugging: log the profile image URL
        } else {
            profileImage.src = "icon.png";
            profileImage.style.display = 'block'; // Show the image
        }
    } else {
        profileImage.src = "coin.png";
        profileImage.style.display = 'block';
        usernameElement.innerText = 'No User Data';
        console.log("No user data found.");
    }
}

// Ensure the Web App is ready before accessing user data
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed"); // Debugging: log when DOM is loaded

    Telegram.WebApp.ready(() => {
        console.log("Telegram WebApp is ready"); // Debugging: log when the WebApp is ready
        updateUsername(); // Call the function to update username and profile image
    });

    // Additional failsafe in case ready doesn't fire
    setTimeout(() => {
        if (!Telegram.WebApp.initDataUnsafe.user) {
            console.log("Fallback: Checking for user data after timeout.");
            updateUsername();
        }
    }, 2000);
});
