const ctx = canvas.getContext("2d");

let boatY = 290;
let boatDirection = 1;

function drawPond() {
    ctx.fillStyle = "#cce7ff";
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.ellipse(400, 300, 150, 70, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}

function drawBoat() {
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(370, boatY);
    ctx.lineTo(430, boatY);
    ctx.lineTo(420, boatY + 10);
    ctx.lineTo(380, boatY + 10);
    ctx.closePath();
    ctx.fill();
}

function drawDuck() {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(600, 350, 20, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(630, 360, 10, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(635, 355, 2, 0, Math.PI * 2);
    ctx.fill();
}

function drawSun() {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(700, 80, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "yellow";
    for (let i = 0; i < 12; i++) {
        let angle = (Math.PI / 6) * i;
        let x1 = 700 + 45 * Math.cos(angle);
        let y1 = 80 + 45 * Math.sin(angle);
        let x2 = 700 + 60 * Math.cos(angle);
        let y2 = 80 + 60 * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
}

function drawHouse() {
    ctx.fillStyle = "orange";
    ctx.fillRect(100, 250, 120, 100);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(100, 250);
    ctx.lineTo(160, 200);
    ctx.lineTo(220, 250);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "brown";
    ctx.fillRect(140, 300, 30, 50);
    
    ctx.fillStyle = "blue";
    ctx.fillRect(110, 270, 20, 20);
}

function drawFlower() {
    ctx.fillStyle = "green";
    ctx.fillRect(650, 380, 5, 60);
    
    ctx.fillStyle = "pink";
    for (let i = 0; i < 5; i++) {
        let angle = (Math.PI / 2.5) * i;
        let x = 655 + 20 * Math.cos(angle);
        let y = 380 + 20 * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
    }
    
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(655, 380, 10, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(645, 400);
    ctx.lineTo(635, 420);
    ctx.lineTo(645, 415);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(660, 400);
    ctx.lineTo(670, 420);
    ctx.lineTo(660, 415);
    ctx.fill();
}

function drawStones() {
    ctx.fillStyle = "gray";
    let positions = [[250, 370], [260, 380], [270, 365], [280, 375], [290, 368]];
    positions.forEach(pos => {
        ctx.beginPath();
        ctx.arc(pos[0], pos[1], 10, 0, Math.PI * 2);
        ctx.fill();
    });
    
    let positions2 = [[620, 400], [630, 410], [640, 395]];
    positions2.forEach(pos => {
        ctx.beginPath();
        ctx.arc(pos[0], pos[1], 10, 0, Math.PI * 2);
        ctx.fill();
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawPond();
    drawBoat();
    drawDuck();
    drawSun();
    drawHouse();
    drawFlower();
    drawStones();
    
    boatY += boatDirection;
    if (boatY > 295 || boatY < 285) {
        boatDirection *= -1;
    }
    
    requestAnimationFrame(animate);
}

animate();
