const ctx = document.getElementById('MeuGrafico').getContext('2d');
        const meuGrafico = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                datasets: [
                    { 
                        label: 'Ganho',
                        data: [2200, 2400, 2600, 2800, 3000, 3200],
                        backgroundColor: 'rgb(3, 0, 193)'
                    },
                    {
                        label: 'Despesa',
                        data: [1500, 1600, 1700, 1800, 1900, 2000],
                        backgroundColor: 'rgb(255, 119, 0)'
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return 'R$' + value;
                            }
                        }
                    }
                }
            }
        });