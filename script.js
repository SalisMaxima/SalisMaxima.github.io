// Set the target date and time for the countdown
const targetDate = new Date('2023-11-09T12:00:00').getTime();

// Define an array of image sources
const imageSources = [
    'Simon_exam_12_5.png',
    'Simon_exam_25_0.png',
    'Simon_exam_37_5.png',
    'Simon_exam_50_0.png',
    'Simon_exam_62_5.png',
    'Simon_exam_75_0.png',
    'Simon_exam_87_5.png',
    'Simon_exam_100_0.png'
];

// Function to update the countdown and images
function updateCountdownAndImages() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'Simon has arrived!';
        // Display the final image when the timer reaches 0 days
        document.querySelector('.countdown-container img').src = imageSources[7];
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the countdown text
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Update the image based on the number of days left
        if (days >= 1 && days <= 7) {
            document.querySelector('.countdown-container img').src = imageSources[7 - days];
        }
    }
}

// Call the updateCountdownAndImages function initially
updateCountdownAndImages();

// Update the countdown and images every second
const countdown = setInterval(updateCountdownAndImages, 1000);
