function stopwatch() {
    let timer, elapsedTime = 0;
    let display = document.createElement("span");
    let startBtn = document.createElement("button");
    let stopBtn = document.createElement("button");
    let resetBtn = document.createElement("button");
    startBtn.innerText = "Start";
    stopBtn.innerText = "Stop";
    resetBtn.innerText = "Reset";
    startBtn.onclick = function () {
        if (!timer) {
            timer = setInterval(() => {
                elapsedTime++;
                display.innerText = elapsedTime + " sec";
            }, 1000);
        }
    };
    stopBtn.onclick = function () {
        clearInterval(timer);
        timer = null;
    };
    resetBtn.onclick = function () {
        clearInterval(timer);
        timer = null;
        elapsedTime = 0;
        display.innerText = "0 sec";
    };
    document.body.append(display, startBtn, stopBtn, resetBtn);
}

function ageCalculator() {
    let dobInput = document.createElement("input");
    let ageDisplay = document.createElement("span");
    dobInput.type = "date";
    dobInput.onmouseover = function () {
        let dob = new Date(dobInput.value);
        if (!isNaN(dob.getTime())) {
            let age = Math.floor((new Date() - dob) / (1000 * 60 * 60 * 24 * 365.25));
            ageDisplay.innerText = "Age: " + age + " years";
        }
    };
    document.body.append(dobInput, ageDisplay);
}

function charCounter() {
    let textarea = document.createElement("textarea");
    let counter = document.createElement("span");
    counter.innerText = "0 characters";
    textarea.oninput = function () {
        counter.innerText = textarea.value.length + " characters";
    };
    document.body.append(textarea, counter);
}

stopwatch();
ageCalculator();
charCounter();
