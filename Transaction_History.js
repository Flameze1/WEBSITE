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