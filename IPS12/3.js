const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d");
const radius = canvas.width / 3;
ctx.translate(radius, radius);

function drawClock() {
    ctx.clearRect(-radius, -radius, canvas.width, canvas.height);
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
    ctx.beginPath();
    ctx.arc(0, 0, radius - 5, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let num = 1; num <= 12; num++) {
        let angle = (num * Math.PI) / 6;
        let x = (radius - 20) * Math.cos(angle - Math.PI / 2);
        let y = (radius - 20) * Math.sin(angle - Math.PI / 2);
        ctx.fillText(num, x, y);
    }
}

function drawTime(ctx, radius) {
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    drawHand(ctx, (hours * 30 + minutes / 2) * (Math.PI / 180), radius * 0.5, 6);
    drawHand(ctx, (minutes * 6 + seconds / 10) * (Math.PI / 180), radius * 0.8, 4);
    drawHand(ctx, seconds * 6 * (Math.PI / 180), radius * 0.9, 2, "red");
}

function drawHand(ctx, angle, length, width, color = "black") {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(0, 0);
    ctx.lineTo(length * Math.cos(angle - Math.PI / 2), length * Math.sin(angle - Math.PI / 2));
    ctx.stroke();
}

setInterval(drawClock, 1000);
drawClock();
