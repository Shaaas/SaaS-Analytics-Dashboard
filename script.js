// Simulate Bar Chart Data
const barChart = document.getElementById('barChart');
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const values = [40, 65, 50, 85, 70, 95, 80];

values.forEach((val, index) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = '0%';
    bar.setAttribute('data-value', val + '%');
    
    // Animate height on load
    setTimeout(() => {
        bar.style.height = val + '%';
    }, index * 100);
    
    barChart.appendChild(bar);
});

// Dynamic Revenue Simulation
let revenue = 128430;
const revenueEl = document.getElementById('revenue-val');

setInterval(() => {
    const change = Math.floor(Math.random() * 50);
    revenue += change;
    revenueEl.innerText = `$${revenue.toLocaleString()}`;
}, 3000);

// Search functionality simulation
document.querySelector('.search-box input').addEventListener('input', (e) => {
    console.log("Filtering dashboard for:", e.target.value);
});
