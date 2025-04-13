document.addEventListener("DOMContentLoaded", function () {
    drawBarChart();
    drawLineChart();
    drawPieChart();
    drawDonutChart();
});

function drawBarChart() {
    let data = [{
        x: ["A", "B", "C", "D"],
        y: [10, 20, 15, 25],
        type: "bar",
        marker: { color: "blue" }
    }];
    let layout = { title: "Bar Chart", xaxis: { title: "Categories" }, yaxis: { title: "Values" } };
    Plotly.newPlot("barChart", data, layout);
}

function drawLineChart() {
    let data = [{
        x: [1, 2, 3, 4, 5],
        y: [10, 15, 7, 12, 20],
        type: "scatter",
        mode: "lines+markers",
        marker: { color: "green" }
    }];
    let layout = { title: "Line Chart", xaxis: { title: "X Axis" }, yaxis: { title: "Y Axis" } };
    Plotly.newPlot("lineChart", data, layout);
}

function drawPieChart() {
    let data = [{
        values: [30, 20, 50],
        labels: ["Category A", "Category B", "Category C"],
        type: "pie"
    }];
    let layout = { title: "Pie Chart" };
    Plotly.newPlot("pieChart", data, layout);
}

function drawDonutChart() {
    let data = [{
        values: [25, 35, 40],
        labels: ["X", "Y", "Z"],
        type: "pie",
        hole: 0.4
    }];
    let layout = { title: "Donut Chart" };
    Plotly.newPlot("donutChart", data, layout);
}
