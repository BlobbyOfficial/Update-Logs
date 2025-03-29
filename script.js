document.addEventListener("DOMContentLoaded", function() {
    const updates = [
        {
            title: "🚀 Major Redesign!",
            date: "March 29, 2025",
            description: "The site is now a full portfolio! New message section, analytics, cookie settings, and more."
        },
        {
            title: "🎵 New BandLab Page!",
            date: "March 15, 2025",
            description: "Added an embedded BandLab section to showcase the latest music."
        },
        {
            title: "🐞 Bug Fixes & Improvements",
            date: "March 1, 2025",
            description: "Fixed mobile UI issues and optimized page speed for better performance."
        }
    ];

    const container = document.getElementById("updates-container");

    updates.forEach(update => {
        const updateCard = document.createElement("div");
        updateCard.classList.add("update-card");

        updateCard.innerHTML = `
            <h3>${update.title}</h3>
            <p class="date">${update.date}</p>
            <p>${update.description}</p>
        `;

        container.appendChild(updateCard);
    });
});
