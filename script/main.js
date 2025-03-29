// main.js - Simple JavaScript for Interactivity and Error Handling

// Document ready function (to ensure the DOM is fully loaded)
document.addEventListener('DOMContentLoaded', function () {
    console.log("Page loaded successfully!");

    // Call simple utility functions
    addEventListeners();
    handleFaviconSpin();
});

// Error handling function
window.onerror = function (msg, url, lineNo, columnNo, error) {
    console.error(`Error occurred: ${msg} at ${url}:${lineNo}:${columnNo}`);
    alert('Oops! Something went wrong. Please try again later.');
    return false; // Prevent default handling
};

// Adding event listeners to buttons and elements (like 'BlobbyOfficial' and 'Back' buttons)
function addEventListeners() {
    // 'BlobbyOfficial' button
    const blobbyButton = document.querySelector('.button');
    if (blobbyButton) {
        blobbyButton.addEventListener('click', function () {
            window.location.href = 'https://www.bloobyofficial.com'; // Replace with your actual URL
        });
    }

    // Back button to go back to index.html
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function () {
            window.history.back(); // Go back to the previous page or index.html
        });
    }
}

// Handle favicon spinning on hover (simple JS function for demonstration)
function handleFaviconSpin() {
    const favicon = document.querySelector('.logo-img');
    if (favicon) {
        favicon.addEventListener('mouseenter', function () {
            favicon.style.transition = 'transform 0.6s ease';
            favicon.style.transform = 'rotate(360deg)';
        });

        favicon.addEventListener('transitionend', function () {
            // Reset the transform to keep it spinning only once per hover
            favicon.style.transform = 'rotate(0deg)';
        });
    }
}

// Form validation (if any form exists on the page)
function validateForm(form) {
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');

    // Basic form validation check for name and email
    if (!name.value || !email.value) {
        alert('Please fill in both fields.');
        return false; // Prevent form submission
    }

    // Additional validation logic can go here, such as regular expressions for email
    if (!/\S+@\S+\.\S+/.test(email.value)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true; // If validation passes
}

// Example of dynamically adding an item to the timeline (for testing)
function addUpdateToTimeline(updateData) {
    const updatesSection = document.querySelector('.updates-section');
    if (updatesSection) {
        const updateItem = document.createElement('div');
        updateItem.classList.add('update-item');
        updateItem.innerHTML = `
            <h3 class="update-title">${updateData.title}</h3>
            <p class="update-description">${updateData.description}</p>
            <a href="${updateData.link}" class="read-more">Read More</a>
        `;
        updatesSection.appendChild(updateItem);
    }
}

// Example of dynamically created update (you could replace this with your actual update data)
const newUpdateData = {
    title: 'New Feature: Dark Mode',
    description: 'We just added a dark mode feature for the website to make it more user-friendly.',
    link: '#'
};

// Uncomment below to test dynamic content generation
// addUpdateToTimeline(newUpdateData);

