function calculateHours() {
    var degrees = parseFloat(document.getElementById("degrees").value);

    if (degrees >= 0 && degrees <= 360) {
        var hours = Math.floor(degrees / 30);
        alert("Минуло " + hours + " годин.");
    } else {
        alert("Будь ласка, введіть число в діапазоні від 0 до 360.");
    }
}