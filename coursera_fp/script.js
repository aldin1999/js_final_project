// Function to handle the search logic
function handleSearch(event) {
    event.preventDefault(); // Prevent form from reloading the page
    const query = document.getElementById('searchInput').value.toLowerCase();

    // Clear previous results and any previous "Thank You" messages
    const resultsContainer = document.getElementById('resultsContainer');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    resultsContainer.innerHTML = '';
    thankYouMessage.innerHTML = '';  // Hide the thank you message

    // Example data for beaches and temples
    const recommendations = {
        beach: [
            { name: 'Bondi Beach', img: '../coursera_fp/images/bondi.jpg' },
            { name: 'Waikiki Beach', img: '../coursera_fp/images/waikiki.jpg' }
        ],
        temple: [
            { name: 'Shiva Temple', img: '../coursera_fp/images/shiva.jpg' },
            { name: 'Golden Temple', img: '../coursera_fp/images/golden.jpg' }
        ],
        country: [
            { name: 'Italy - Colosseum', img: '../coursera_fp/images/coloseum.jpg' },
            { name: 'Greece - Parthenon', img: '../coursera_fp/images/parthenon.jpg' }
        ]
    };

    // Search through recommendations
    if (query.includes('beach')) {
        displayResults(recommendations.beach);
    } else if (query.includes('temple')) {
        displayResults(recommendations.temple);
    } else if (query.includes('italy') || query.includes('greece')) {
        displayResults(recommendations.country);
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
}

// Function to display results and add Book Now button
function displayResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');

        resultElement.innerHTML = `
            <h3>${result.name}</h3>
            <img src="${result.img}" alt="${result.name}" />
            <button class="bookNowButton" onclick="handleBooking('${result.name}')">Book Now</button>
        `;

        resultsContainer.appendChild(resultElement);
    });
}

// Function to handle the "Book Now" button click
function handleBooking(destinationName) {
    // Clear all results
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    // Display the Thank You message for the specific destination
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block';  // Show the Thank You message
    thankYouMessage.innerHTML = `<p>Thank you for your reservation at ${destinationName}!</p>`;
}

// Add event listener to the search form
document.getElementById('searchForm').addEventListener('submit', handleSearch);
