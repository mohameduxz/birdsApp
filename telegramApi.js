// Function to update username
        function updateUsername() {
            const user = Telegram.WebApp.initDataUnsafe.user;
            console.log("User data:", user); // Debugging: log user data
            if (user) {
                document.getElementById('user').innerText = user.username || 'No Username';
                const reff = user.id
                if (user.photo_url) {
                    const profileImage = document.getElementById('profile-image');
                    profileImage.src = user.photo_url;
                    profileImage.style.display = 'block'; // Show the image
                }
            } else {
                document.getElementById('user').innerText = 'No User Data';
            }
        }
        document.addEventListener("DOMContentLoaded", function() {
            Telegram.WebApp.ready();
            Telegram.WebApp.expand();
            Telegram.WebApp.MainButton.hide();
            Telegram.WebApp.setHeaderColor("#000000");
        });
        

        // Ensure the Web App is ready before accessing user data
        Telegram.WebApp.ready(() => {
            console.log("Telegram WebApp is ready"); // Debugging: log when WebApp is ready
            updateUsername();
        });

        // Additional event listener to ensure the script runs when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', () => {
            console.log("DOM fully loaded and parsed"); // Debugging: log when DOM is loaded
            updateUsername();
        });
    