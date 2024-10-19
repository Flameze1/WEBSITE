// Example of Google Maps API integration for location display
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: -15.4167, lng: 28.2833 }, // Lusaka Coordinates
    });

    const locations = [
        { name: "Lusaka CBD", lat: -15.4167, lng: 28.2833 },
        { name: "Libala", lat: -15.4386, lng: 28.3035 },
        { name: "Kabwata", lat: -15.4472, lng: 28.3097 },
        // Add other locations as needed
    ];

    locations.forEach((location) => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name,
        });
    });
}
const ctx = document.getElementById('servicePerformanceChart').getContext('2d');
                const servicePerformanceChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Airtel Money', 'MTN Money', 'Zamtel Money', 'Zanaco', 'FNB'],
                        datasets: [{
                            label: 'Service Performance',
                            data: [5000, 3000, 2000, 1000, 4000], // Sample data
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkmode-toggle');
    
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        
        // Optional: Save the user's preference in localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
});

console.log("Dark mode script is running");
