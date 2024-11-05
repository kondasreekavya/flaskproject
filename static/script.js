document.addEventListener("DOMContentLoaded", function() {
    fetch('/chart-data')
    .then(response => response.json())
    .then(data => {
        const ctx = document.getElementById('expenseChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: 'Expenses by Category',
                    data: Object.values(data),
                    backgroundColor: [
                        'rgba(231, 76, 60, 0.8)',
                        'rgba(52, 152, 219, 0.8)', 
                        'rgba(241, 196, 15, 0.8)',
                        'rgba(46, 204, 113, 0.8)',
                        'rgba(155, 89, 182, 0.8) ',
                        'rgba(243, 156, 18, 0.8) ',
                        'rgba(149, 165, 166, 0.8) '
                    ],
                    borderColor: [
                        'rgba(231, 76, 60, 0.8)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true
            }
        });
    });
});
