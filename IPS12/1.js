const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");

function drawPond() {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.ellipse(400, 500, 200, 80, 0, 0, Math.PI * 2);
    ctx.fill();
}

function drawBoat() {
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(320, 450);
    ctx.quadraticCurveTo(400, 500, 480, 450);
    ctx.quadraticCurveTo(400, 480, 320, 450);
    ctx.fill();
}

function drawDuck() {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(500, 450, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(530, 460, 10, 0, Math.PI * 2);
    ctx.fill();
}

function drawSun() {
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(700, 100, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "orange";
    for (let i = 0; i < 12; i++) {
        let angle = (Math.PI / 6) * i;
        let x1 = 700 + 50 * Math.cos(angle);
        let y1 = 100 + 50 * Math.sin(angle);
        let x2 = 700 + 70 * Math.cos(angle);
        let y2 = 100 + 70 * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
}

function drawHouse() {
    ctx.fillStyle = "red";
    ctx.fillRect(100, 300, 120, 100);
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(160, 250);
    ctx.lineTo(220, 300);
    ctx.fill();
}

function drawFlower() {
    ctx.fillStyle = "green";
    ctx.fillRect(600, 400, 5, 60);
    ctx.beginPath();
    ctx.arc(595, 420, 10, 0, Math.PI * 2);
    ctx.arc(610, 420, 10, 0, Math.PI * 2);
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(603, 410, 10, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}

function drawStones() {
    ctx.fillStyle = "gray";
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(350 + i * 30, 550, 10, 0, Math.PI * 2);
        ctx.fill();
    }
}

drawPond();
drawBoat();
drawDuck();
drawSun();
drawHouse();
drawFlower();
drawStones();
