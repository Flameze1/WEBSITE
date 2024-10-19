(() => {
    const sectionServices = {
        Wina1: ['Airtel Money', 'MTN Money', 'Zamtel Money', 'Zanaco', 'FNB'],
        Wina2: ['Airtel Money', 'MTN Money', 'Zamtel Money', 'FNB'],
        Wina3: ['Airtel Money', 'MTN Money', 'Zamtel Money', 'Zanaco', 'FNB'],
        Wina4: ['Airtel Money', 'MTN Money', 'Zamtel Money'],
        Wina5: ['Airtel Money', 'MTN Money', 'Zanaco', 'FNB'],
        Wina6: ['Airtel Money', 'MTN Money', 'Zamtel Money']
    };

    const TAX_RATE = 0.16;
    const formSection = document.getElementById('form-section');

    // Function to generate the form for a given section
    const generateForm = (section) => {
        // Clear existing form
        formSection.innerHTML = '';

        // Create form HTML dynamically
        const formHtml = `
            <form id="transactionForm">
                <h2>Submit a New Transaction for ${section}</h2>

                <label for="transactionID">Transaction ID:</label>
                <input type="text" id="transactionID" name="transactionID" readonly value="${generateTransactionID()}">

                <label for="service">Select Service:</label>
                <select id="service" name="service"></select>

                <label for="revenue">Revenue per Kwacha (ZMW):</label>
                <input type="text" id="revenue" name="revenue" readonly value="1.00">

                <label for="amount">Transaction Amount (ZMW):</label>
                <input type="number" id="amount" name="amount" required>

                <label for="tax">Tax (ZMW):</label>
                <input type="text" id="tax" name="tax" readonly>

                <button type="submit">Submit Transaction</button>
            </form>
        `;
        formSection.innerHTML = formHtml;

        const serviceSelect = document.getElementById('service');
        populateServices(section, serviceSelect);

        // Calculate tax when the amount is entered
        const amountInput = document.getElementById('amount');
        const taxField = document.getElementById('tax');
        amountInput.addEventListener('input', () => {
            const amount = parseFloat(amountInput.value) || 0;
            const tax = calculateTax(amount);
            taxField.value = tax;
        });

        // Form submission event
        document.getElementById('transactionForm').addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('Form Submitted');
        });
    };

    // Function to generate a random transaction ID
    const generateTransactionID = () => {
        const randomNum = Math.floor(100000 + Math.random() * 900000);
        return `WB${randomNum}`;
    };

    // Populate the services for a given section
    const populateServices = (section, serviceSelect) => {
        const services = sectionServices[section] || [];
        serviceSelect.innerHTML = '';
        services.forEach(service => {
            const option = document.createElement('option');
            option.value = service;
            option.textContent = service;
            serviceSelect.appendChild(option);
        });
    };

    // Calculate tax based on the amount
    const calculateTax = (amount) => (amount * TAX_RATE).toFixed(2);

    // Event listener for service buttons
    document.querySelectorAll('.payment-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const section = event.target.getAttribute('data-section');
            generateForm(section);  // Generate the form for the selected section
        });
    });

    // Load Wina1 form by default on page load
    window.addEventListener('DOMContentLoaded', () => {
        generateForm('Wina1');  // Automatically load Wina1 form on page load
    });

})();

// Transaction Performance Chart (Bar Chart)
const ctx1 = document.getElementById('transactionChart').getContext('2d');
const transactionChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Wina1', 'Wina2', 'Wina3', 'Wina4', 'Wina5', 'Wina6'], // X-axis labels
        datasets: [{
            label: 'Transactions',
            data: [60, 50, 80, 80, 60, 60], // Transactions data
            backgroundColor: 'rgba(54, 162, 235, 0.7)', // Bar color
            borderColor: 'rgba(54, 162, 235, 1)', // Border color
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 90 // Set max value for y-axis
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `Transactions: ${tooltipItem.raw}`;
                    }
                }
            }
        }
    }
});

// Revenue Distribution Chart (Pie Chart)
const ctx2 = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Airtel Money', 'MTN Money', 'Zamtel Money', 'Zanaco', 'FNB'], // Services
        datasets: [{
            data: [30, 20, 25, 15, 10], // Revenue percentage data
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)', // Airtel Money (Blue)
                'rgba(75, 192, 192, 0.7)', // MTN Money (Cyan)
                'rgba(75, 192, 75, 0.7)',  // Zamtel Money (Green)
                'rgba(255, 159, 64, 0.7)', // Zanaco (Orange)
                'rgba(255, 99, 132, 0.7)'  // FNB (Red)
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const value = revenueChart.data.datasets[0].data[tooltipItem.dataIndex];
                        return `${revenueChart.data.labels[tooltipItem.dataIndex]}: ${value}%`;
                    }
                }
            }
        }
    }
});
document.querySelectorAll('.payment-button').forEach(button => {
    button.addEventListener('click', function() {
        const locationField = document.getElementById('location');
        const formSection = document.getElementById('form-section');
        const transactionHeading = document.getElementById('transactionHeading');
        
        // Set the location and selected service based on the clicked button
        let selectedService = '';
        switch (this.dataset.section) {
            case 'Wina1':
                locationField.value = 'Lusaka CBD';
                selectedService = 'Wina1';
                break;
            case 'Wina2':
                locationField.value = 'Libala';
                selectedService = 'Wina2';
                break;
            case 'Wina3':
                locationField.value = 'Kabwata';
                selectedService = 'Wina3';
                break;
            case 'Wina4':
                locationField.value = 'Mandevu';
                selectedService = 'Wina4';
                break;
            case 'Wina5':
                locationField.value = 'Woodlands';
                selectedService = 'Wina5';
                break;
            case 'Wina6':
                locationField.value = 'Matero East';
                selectedService = 'Wina6';
                break;
            default:
                locationField.value = '';
        }

        // Update heading with the specific service
        transactionHeading.textContent = `Submit a New Transaction for ${selectedService}`;
        
        // Show the form with animation
        formSection.classList.remove('hidden');
        formSection.classList.add('show');
        
        // Animate the heading
        transactionHeading.classList.remove('hidden');
        transactionHeading.classList.add('slide-in');
    });
});
