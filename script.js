function updateData() {
    let temp = (Math.random() * 10 + 25).toFixed(1);
    let light = Math.random() > 0.5 ? "ON" : "OFF";
    let motion = Math.random() > 0.5 ? "Detected" : "None";

    document.getElementById("temp").innerText = temp;
    document.getElementById("light").innerText = light;
    document.getElementById("motion").innerText = motion;
}

setInterval(updateData, 2000);