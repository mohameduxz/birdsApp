// Select the elements
const clickCoin = document.getElementById('click-coin');
const coinsDisplay = document.getElementById('coins');

// Initialize coin count
let coinCount = 50182; // Starting value
CoinPerClick = 300;

// Function to animate the coin count
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp; // Initialize start timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1); // Calculate progress
        obj.textContent = Math.floor(progress * (end - start) + start); // Update displayed value

        if (progress < 1) {
            window.requestAnimationFrame(step); // Continue the animation
        } else {
            coinCount = end; // Update the actual coin count when done
        }
    };

    window.requestAnimationFrame(step); // Start the animation
}

// Function to handle coin clicks
function handleCoinClick() {
    animateValue(coinsDisplay, coinCount, coinCount + CoinPerClick, 500); // Animate from current to current + 1
}

// Add click event listener to the coin image
clickCoin.addEventListener('click', handleCoinClick);
