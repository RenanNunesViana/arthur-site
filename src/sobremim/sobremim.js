// Ícones para cada categoria
const icons = {
    "Programação": "💻",
    "Música": "🎵",
    "Esportes": "⚽",
    "Leitura": "📚",
    "Cozinhar": "🍳"
};

// Dados do gráfico
const labels = Object.keys(icons).map(key => `${icons[key]} ${key}`);
const dataValues = [9, 7, 8, 6, 5];

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Nível de Interesse',
            data: dataValues,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            borderColor: '#ffffff',
            borderWidth: 2,
            borderRadius: 10, // Bordas arredondadas
            barThickness: 40, // Espessura das barras
            hoverBackgroundColor: '#FF9F40', // Cor ao passar o mouse
            barPercentage: 0.8, // Tamanho das barras (evita que fiquem quebradas)
            categoryPercentage: 0.8 // Ajuste fino das barras
        }]
    },
    options: {
        indexAxis: 'y', // Barras horizontais
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                max: 10,
                ticks: {
                    font: {
                        size: 14
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return ` Nível: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeOutBounce'
        }
    }
});