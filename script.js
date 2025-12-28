let chart;

function plot() {
    const xStr = document.getElementById('xInput').value;
    const yStr = document.getElementById('yInput').value;

    const xVals = xStr.split(',').map(v => v.trim());
    const yVals = yStr.split(',').map(v => Number(v.trim()));

    const ctx = document.getElementById('chart').getContext('2d');

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xVals,
            datasets: [{
                label: 'Y values',
                data: yVals,
                borderColor: 'cyan',
                backgroundColor: 'rgba(0,255,255,0.2)',
                tension: 0.2
            }]
        },
        options: {
            responsive: false,
            scales: {
                x: { title: { display: true, text: 'X' } },
                y: { title: { display: true, text: 'Y' } }
            }
        }
    });
}