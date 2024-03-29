function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function checkLeapYear() {
    var year = parseInt(document.getElementById("year").value);

    if (year >= 1 && year <= 9999) {
        if (isLeapYear(year)) {
            alert(year + " є високосним роком.");
        } else {
            alert(year + " не є високосним роком.");
        }
    } else {
        alert("Будь ласка, введіть рік в діапазоні від 1 до 9999.");
    }
}