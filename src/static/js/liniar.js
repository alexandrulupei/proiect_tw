window.addEventListener('DOMContentLoaded', () => {
    const chartData = [10, 20, 15, 25, 30, 40, 35]; // Example data for the chart

    const svg = document.getElementById('lineChart');
    const width = svg.clientWidth;
    const height = svg.clientHeight;

    // Set the SVG width and height attributes
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);

    // Calculate the maximum value in the chart data
    const maxValue = Math.max(...chartData);

    // Calculate the width and height of each point
    const pointWidth = width / (chartData.length - 1);
    const pointHeightRatio = height / maxValue;

    // Create the SVG path data for the line chart
    let pathData = `M 0 ${height - chartData[0] * pointHeightRatio}`;
    for (let i = 1; i < chartData.length; i++) {
        pathData += ` L ${i * pointWidth} ${height - chartData[i] * pointHeightRatio}`;
    }

    // Create the SVG path element
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('class', 'chart-line');

    // Add the path element to the SVG
    svg.appendChild(path);
});
